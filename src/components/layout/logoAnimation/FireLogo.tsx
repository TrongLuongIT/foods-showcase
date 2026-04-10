"use client";
import { useMotionValue, useTransform, animate, ValueAnimationTransition } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { logoConstant, BRAND_INFO } from "@/src/helper/constantData";
import * as S from "./FireLogo.styles";

interface FireConfig {
  ANIMATION: ValueAnimationTransition<number>;
  travelDistance: number;
  timeOut: number;
  spinNumber: number;
  endSpinNumber: number;
  endTimePause: number;
}

const FIRE_CONFIG: FireConfig = {
  ANIMATION: {
    duration: 1.5,
    ease: "easeOut",
  },
  travelDistance: 280, // Khoảng cách lăn,
  spinNumber: 3*360, // số vòng xoay,
  endSpinNumber: 9*360, // tăng tốc độ xoay,
  endTimePause: 300,
  timeOut: 1500,
};

// --- Main Component ---
export default function FireLogo() {
  const letters = Array.from(BRAND_INFO.NAME);

  const logoX = useMotionValue(0);
  const logoRotate = useMotionValue(0);

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        // 1. Lăn tới (1.5s)
        await Promise.all([
          animate(logoX, FIRE_CONFIG.travelDistance, FIRE_CONFIG.ANIMATION),
          animate(logoRotate, FIRE_CONFIG.spinNumber, FIRE_CONFIG.ANIMATION)
        ]);

        // 2. Sonic Spin tại chỗ (1s) - Tốc độ tăng dần
        await animate(logoRotate, FIRE_CONFIG.endSpinNumber, { 
          duration: 1, 
          ease: "circIn" 
        });

        // Nghỉ ngắn ở đỉnh điểm tốc độ
        await new Promise(r => setTimeout(r, FIRE_CONFIG.endTimePause));

        // 3. Lăn ngược về và xóa chữ (1.5s)
        await Promise.all([
          animate(logoX, 0, FIRE_CONFIG.ANIMATION),
          animate(logoRotate, 0, FIRE_CONFIG.ANIMATION)
        ]);

        // Nghỉ trước khi lặp lại
        await new Promise(r => setTimeout(r, FIRE_CONFIG.timeOut));
      }
    };
    runSequence();
  }, [logoX, logoRotate]);

  return (
    <div className="d-flex justify-content-center align-items-center position-relative pointer">
      {/* Icon Logo */}
      <S.LogoContainer style={{ x: logoX, rotate: logoRotate }}>
        <Image
          {...logoConstant}
          style={{ borderRadius: "50%" }}
        />
      </S.LogoContainer>

      {/* Tên Kokoria */}
      <div className="text-uppercase fst-italic"  style={{ fontSize: "55px", lineHeight: 0.8, height: "45x", color: "#f9d852" }}>
        {letters.map((letter, index) => {
          // Tính toán mốc hiện chữ: Logo đi qua tới đâu, chữ hiện tới đó
          // Điều chỉnh mốc này dựa trên travelDistance mới
          const start = (index * 38); 
          const end = start + 40;

          const opacity = useTransform(logoX, [start, end], [0, 1]);
          const scale = useTransform(logoX, [start, end], [0.5, 1]);
          const x = useTransform(logoX, [start, end], [-10, 0]);

          return (
            <S.Letter key={index} style={{ opacity, scale, x }}>
              {letter}
            </S.Letter>
          );
        })}
      </div>
    </div>
  );
}