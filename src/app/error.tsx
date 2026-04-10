'use client'; // Error components phải là Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Đây là nơi bạn có thể gửi log về Server hoặc các bên như Sentry/LogRocket
    console.error("Caught by Error Boundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-xl font-bold text-red-600">
        {/* User sẽ chỉ thấy thông báo thân thiện mà bạn đã throw ở bước 1 */}
        {error.message} 
      </h2>
      <button
        onClick={() => reset()} // Thử tải lại trang
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Thử lại
      </button>
    </div>
  );
}