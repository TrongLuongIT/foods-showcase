"use client";

import { memo } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

interface SocialModalProps {
  url: string | null;
  onClose: () => void;
}

const SocialModal = memo(({ url, onClose }: SocialModalProps) => {
  return (
    <Modal
      show={!!url}           // Hiển thị khi có url
      onHide={onClose}       // Gọi hàm đóng khi bấm X hoặc click ra ngoài
      centered               // Căn giữa màn hình
      // size="sm"             // Kích thước nhỏ phù hợp video dọc
      contentClassName="bg-black border-0" // Style đen chuẩn TikTok
    >
      <Modal.Header 
        closeButton 
        closeVariant="white" 
        className="border-0 position-absolute top-0 end-0" 
        style={{ zIndex: 10 }}
      />
      
      <Modal.Body className="p-0">
        {/* Tỉ lệ 9:16 chuẩn video điện thoại */}
        <div className="ratio ratio-9x16 bg-dark"
          style={{ 
            aspectRatio: "9/16", 
            width: "100%", 
            position: "relative",
            overflow: "hidden"
          }}
        >
          {url && (
            <ReactPlayer
              src={url}
              playing={true}   // Tự động phát khi mở
              controls={true}  // Hiện thanh điều khiển của TikTok
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
});

SocialModal.displayName = "SocialModal";
export default SocialModal;