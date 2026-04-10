"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MockBranchImage } from "@/src/services/product-service";

interface ImageMarqueeProps {
  images: MockBranchImage[],
  speed?: number; // Tốc độ chạy (giây), số càng lớn càng chậm
}

export default function ImageMarquee({ images, speed = 30 }: ImageMarqueeProps) {

  const newImages = [...images, ...images]; // Nhân đôi mảng hình ảnh

  return (
    <div className="overflow-hidden px-2 d-flex w-100">
      <motion.div
        className="d-flex "
        animate={{
          x: ["0%", "-50%"], // Chạy từ đầu đến nửa dãy hình (phần nhân đôi)
        }}
        transition={{
          ease: "linear",
          duration: speed, // Tốc độ chạy (giây), số càng lớn càng chậm
          repeat: Infinity, // Chạy mãi mãi
        }}
        style={{ width: "max-content" }}
      >
        {newImages.map((image, index) => (
          <div 
            key={index} 
            className="position-relative mx-1 border border-danger" 
            style={{ width: "300px", height: "250px", flexShrink: 0 }}
          >
            <Image
              src={image.src}
              alt={`CCTV-${index}`}
              fill
              className="object-fit-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}