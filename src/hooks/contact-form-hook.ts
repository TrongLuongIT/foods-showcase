import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

import { sendContactForm } from '@/src/actions/contact-action';
import { ContactState } from '@/src/types/contact';

const initialState: ContactState = {
  status: 'idle',
  message: '',
};

export const useContactForm = () => {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);

  // LOGIC THEO DÕI STATE ĐỂ HIỂN THỊ TOAST
  useEffect(() => {
    if (state.status === 'success') {
      toast.success(state.message || 'Gửi liên hệ thành công!');
    } else if (state.status === 'error') {
      toast.error(state.message || 'Có lỗi xảy ra, vui lòng thử lại.');
    }
  }, [state]);

  // custom data
  const wrappedFormAction = async (formData: FormData) => {
    const name = formData.get('name');
    formData.set('name', name + ' custom');

    formAction(formData);
  };

  return {
    state,
    formAction: wrappedFormAction,
    isPending,
  };
};
