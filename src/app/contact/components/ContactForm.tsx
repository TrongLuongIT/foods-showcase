'use client';

import { useContactForm } from '@/src/hooks/contact-form-hook';

export default function ContactForm() {

  const { state, formAction, isPending } = useContactForm();

  return (
        <div className="card shadow-sm p-4">
          <form action={formAction}>
            {/* Họ tên */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Họ và tên</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Nội dung */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Nội dung tin nhắn</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Nút gửi */}
            <button 
              type="submit" 
              className={`btn btn-primary w-100 fw-bold py-2 ${isPending ? 'disabled' : ''}`}
            >
              { !!isPending ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
            </button>
          </form>
        </div>
  );  
}