"use client";
import { logoConstant } from "@/src/helper/constantData";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// --- Styled Components ---

const lavaBurn = keyframes`
  0% { 
    text-shadow: 0 0 4px #fff, 0 -5px 4px #ff3, 2px -10px 6px #f80, -2px -15px 11px #f00;
  }
  50% { 
    text-shadow: 0 0 4px #fff, 0 -4px 4px #ff3, 2px -8px 6px #f80, -2px -12px 11px #f00;
  }
  100% { 
    text-shadow: 0 0 4px #fff, 0 -5px 4px #ff3, 2px -10px 6px #f80, -2px -15px 11px #f00;
  }
`;

// --- Hiệu ứng xoáy Plasma cho Logo ---
const plasmaGlow = keyframes`
  0% { box-shadow: 0 0 20px #4facfe, 0 0 40px #00f2fe, inset 0 0 10px #fff; }
  50% { box-shadow: 0 0 40px #4facfe, 0 0 70px #00f2fe, inset 0 0 20px #fff; }
  100% { box-shadow: 0 0 20px #4facfe, 0 0 40px #00f2fe, inset 0 0 10px #fff; }
`;

const LogoContainer = styled(motion.div)`
  z-index: 10;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: absolute; /* Giữ logo độc lập để không đẩy chữ */
  left: 0;
  animation: ${plasmaGlow} 1.5s infinite ease-in-out;
`;

const Letter = styled(motion.span)`
  display: inline-block;
  will-change: transform, opacity;
  animation: ${lavaBurn} 1s infinite alternate;
`;

// --- Main Component ---
export default function LogoAnimation() {
  const brandName = "KOKORIA";
  const letters = Array.from(brandName);
  const logoSize = 45; 
  const travelDistance = 280; // Cho icon lăn ra xa hẳn

  const logoX = useMotionValue(0);
  const logoRotate = useMotionValue(0);

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        // 1. Lăn tới (1.5s)
        await Promise.all([
          animate(logoX, travelDistance, { duration: 1.5, ease: "easeOut" }),
          animate(logoRotate, 720, { duration: 1.5, ease: "easeOut" }) // Xoay 2 vòng khi đi
        ]);

        // 2. Sonic Spin tại chỗ (1s) - Tốc độ tăng dần
        // Xoay thêm từ 720 lên 2160 độ (xoay cực nhanh)
        await animate(logoRotate, 2160, { 
          duration: 1, 
          ease: "circIn" 
        });

        // Nghỉ ngắn ở đỉnh điểm tốc độ
        await new Promise(r => setTimeout(r, 300));

        // 3. Lăn ngược về và xóa chữ (1.5s)
        await Promise.all([
          animate(logoX, 0, { duration: 1.5, ease: "easeInOut" }),
          animate(logoRotate, 0, { duration: 1.5, ease: "easeInOut" })
        ]);

        // Nghỉ trước khi lặp lại
        await new Promise(r => setTimeout(r, 1500));
      }
    };
    runSequence();
  }, [logoX, logoRotate]);

  return (
    <div className="d-flex justify-content-center align-items-center position-relative pointer">
      {/* Icon Logo */}
      <LogoContainer style={{ x: logoX, rotate: logoRotate }}>
        <Image
          src={logoConstant.src}
          alt="Logo"
          width={logoSize}
          height={logoSize}
          style={{ borderRadius: "50%" }}
        />
      </LogoContainer>

      {/* Tên Kokoria */}
      <div className="text-white fw-bold text-uppercase fst-italic ps-4" style={{ fontSize: "55px", lineHeight: 0.8, height: "45px" }}>
        {letters.map((letter, index) => {
          // Tính toán mốc hiện chữ: Logo đi qua tới đâu, chữ hiện tới đó
          // Điều chỉnh mốc này dựa trên travelDistance mới
          const start = (index * 38); 
          const end = start + 40;

          const opacity = useTransform(logoX, [start, end], [0, 1]);
          const scale = useTransform(logoX, [start, end], [0.5, 1]);
          const x = useTransform(logoX, [start, end], [-10, 0]);

          return (
            <Letter key={index} style={{ opacity, scale, x }}>
              {letter}
            </Letter>
          );
        })}
      </div>
    </div>
  );
}