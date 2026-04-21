'use server';

import { ContactState } from '@/src/types/contact';

export async function sendContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // xử lý data form
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // Logic kiểm tra đơn giản
  if (!email || !email.includes('@')) {
    return {
      status: 'error',
      message: 'Email không hợp lệ!',
      errors: { email: ['Vui lòng nhập đúng định dạng email'] },
    };
  }

  // debug timeout api
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  // sử lý dữ liệu trước khi lưu
  console.log('server response:', { name, email });

  return {
    status: 'success',
    message: 'Gửi liên hệ thành công!',
    errors: {},
  };
}
