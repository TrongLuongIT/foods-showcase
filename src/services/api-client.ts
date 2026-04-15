import axios, { AxiosInstance } from 'axios';
import { API_URL, isDevMode } from '@/src/helper/config';

/**
 * Hàm lấy Token từ Server:
 * Chỉ thực hiện khi code đang chạy trên Server (Server Components / Actions).
 * Nếu chạy ở Client, trình duyệt sẽ tự động gửi kèm Cookie nếu cùng Domain.
 */
const getAuthToken = async () => {
  // Kiểm tra nếu không phải môi trường trình duyệt (tức là đang ở Server)
  if (typeof window === 'undefined') {
    try {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();
      return cookieStore.get('auth_token')?.value;
    } catch (error) {
      // Có thể đang trong quá trình build tĩnh (Static Generation)
      return undefined;
    }
  }
  return undefined; 
};

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(async (config) => {
  // Lấy token từ Cookie (chỉ lấy được khi chạy trên Server)
  const token = await getAuthToken();
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorResponse = error.response?.data;
    
    console.error("--- API ERROR ---");
    console.error("URL:", API_URL,  error.config?.url);
    console.error("Status:", error.response?.status);
    console.error("Message:", errorResponse?.error?.message || error.message);
    console.error("--------------------");

    let errorMessage = error.response?.data || error.message;
    if (isDevMode) {
      errorMessage += ` (Debug info: ${JSON.stringify(error.response)})`;
    }else{
      errorMessage = "Có lỗi xảy ra, vui lòng thử lại sau.";
    }
    throw new Error(errorMessage);
  }
);

export const thirdPartyClient: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor đơn giản để lấy thẳng data
thirdPartyClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Third Party API Error:", error.message);
    return Promise.reject(error);
  }
);

export default apiClient;