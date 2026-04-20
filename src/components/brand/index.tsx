'use client';

import { useState, useEffect, useRef } from 'react';

import { useContactForm } from '@/src/hooks/contact-form-hook';
import WavyText from '../common/WavyText';
import BottomModal, { BottomModalRef } from '../common/BottomModal';
import { BRAND_INFO, BOOTSTRAP_BREAKPOINTS } from '@/src/helper/constants/constantData';

export default function Brand() {
  const [isDesktop, setIsDesktop] = useState(false);
  const { formAction, isPending } = useContactForm();

  const modalRef = useRef<BottomModalRef>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= BOOTSTRAP_BREAKPOINTS.lg); // lg breakpoint của Bootstrap
    };
    handleResize(); // Chạy khi component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmitFormMobile = (formData: FormData) => {
    modalRef.current?.close();
    formAction(formData);
  };

  return (
    <div className="container-fluid sticky-brand">
      <div className="container px-0 px-sm-3 py-3 py-lg-0 d-flex justify-content-between">
        {isDesktop ? (
          <>
            <div className="d-flex brand-hotline">
              <div className="pe-2">Hotline</div>
              <WavyText text={BRAND_INFO.CONTACT.PHONE} />
            </div>
            <form action={formAction} className="d-flex">
              <div className="py-3 px-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  required
                  className="form-control"
                />
              </div>
              <div className="py-3 px-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="form-control"
                />
              </div>
              <div className="py-3 px-1">
                <input
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Nội dung"
                  required
                />
              </div>
              <div className="p-3">
                {isPending ? (
                  <div className="btn btn-primary">Đang gửi...</div>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Gửi
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="text-center w-100" onClick={() => modalRef.current?.open()}>
              Liên hệ nhượng quyền
            </div>
            <BottomModal ref={modalRef} title="Liên hệ nhượng quyền">
              <form action={onSubmitFormMobile}>
                <div className="py-3 px-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    required
                    className="form-control"
                  />
                </div>
                <div className="py-3 px-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="form-control"
                  />
                </div>
                <div className="py-3 px-1">
                  <input
                    type="text"
                    name="message"
                    className="form-control"
                    placeholder="Nội dung"
                    required
                  />
                </div>
                <div className="y-3">
                  {isPending ? (
                    <div className="btn btn-primary w-100">Đang gửi...</div>
                  ) : (
                    <button type="submit" className="btn btn-primary w-100">
                      Gửi
                    </button>
                  )}
                </div>
              </form>
            </BottomModal>
          </>
        )}
      </div>
    </div>
  );
}
