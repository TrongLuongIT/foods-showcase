'use client';
import { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BottomModalProps {
  onOpen?: () => void;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface BottomModalRef {
  open: () => void;
  close: () => void;
}

const BottomModal = forwardRef<BottomModalRef, BottomModalProps>(
  ({ title, children, onOpen, onClose }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const modalOpen = () => {
      setIsOpen(true);
      if (onOpen) onOpen();
    };

    const modalClose = () => {
      setIsOpen(false);
      if (onClose) onClose();
    };

    // Xuất khẩu hàm ra bên ngoài cho Component cha dùng
    useImperativeHandle(ref, () => ({
      open: modalOpen,
      close: modalClose,
    }));

    // Chống scroll body
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={modalClose}
              className="fixed-top vh-100 vw-100 bg-dark bg-opacity-50"
              style={{ zIndex: 1060 }}
            />

            {/* Panel trượt từ dưới lên */}
            <motion.div
              drag="y" // Thêm tính năng vuốt
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 150) {
                  // Vuốt xuống hơn 150px thì đóng
                  modalClose();
                }
              }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed-bottom bg-white shadow-lg border-top w-100"
              style={{
                zIndex: 1070,
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                touchAction: 'none', // Quan trọng để drag mượt trên mobile
              }}
            >
              {/* Handle Bar */}
              <div className="d-flex justify-content-center pt-2 pb-1" style={{ cursor: 'grab' }}>
                <div
                  style={{ width: '40px', height: '5px', background: '#ddd', borderRadius: '10px' }}
                />
              </div>

              <div className="p-4 pt-2">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="m-0 fw-bold text-dark">{title}</h5>
                  <button onClick={modalClose} className="btn-close shadow-none"></button>
                </div>
                <div className="modal-body p-0 text-dark">{children}</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }
);

BottomModal.displayName = 'BottomModal';
export default BottomModal;
