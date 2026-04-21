'use client';
import {
  useMotionValue,
  useTransform,
  animate,
  ValueAnimationTransition,
  MotionValue,
  motion,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { logoConstant, BRAND_INFO } from '@/src/helper/constants/constantData';
import './FireLogo.scss';

interface FireConfig {
  ANIMATION: ValueAnimationTransition<number>;
  travelDistance: number;
  timeOut: number;
  spinNumber: number;
  endSpinNumber: number;
  endTimePause: number;
  brandName: {
    fontSize: string;
    lineHeight: number;
    height: string;
    color: string;
  };
}

const FIRE_CONFIG: FireConfig = {
  ANIMATION: {
    duration: 1.5,
    ease: 'easeOut',
  },
  travelDistance: 230, // Khoảng cách lăn,
  spinNumber: 3 * 360, // số vòng xoay,
  endSpinNumber: 9 * 360, // tăng tốc độ xoay,
  endTimePause: 300,
  timeOut: 2000,
  brandName: {
    fontSize: '45px',
    lineHeight: 0.8,
    height: '45px',
    color: '#f9d852',
  },
};

// --- Main Component ---
export default function FireLogo() {
  const letters = Array.from(BRAND_INFO.NAME);

  const logoX = useMotionValue(0);
  const logoRotate = useMotionValue(0);

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        // 1. Lăn tới
        await Promise.all([
          animate(logoX, FIRE_CONFIG.travelDistance, FIRE_CONFIG.ANIMATION),
          animate(logoRotate, FIRE_CONFIG.spinNumber, FIRE_CONFIG.ANIMATION),
        ]);

        // 2. Sonic Spin tại chỗ - Tốc độ tăng dần
        await animate(logoRotate, FIRE_CONFIG.endSpinNumber, {
          duration: 1,
          ease: 'circIn',
        });

        // Nghỉ ngắn ở đỉnh điểm tốc độ
        await new Promise((r) => setTimeout(r, FIRE_CONFIG.endTimePause));

        // 3. Lăn ngược về và xóa chữ
        await Promise.all([
          animate(logoX, 0, FIRE_CONFIG.ANIMATION),
          animate(logoRotate, 0, FIRE_CONFIG.ANIMATION),
        ]);

        // Nghỉ trước khi lặp lại
        await new Promise((r) => setTimeout(r, FIRE_CONFIG.timeOut));
      }
    };
    runSequence();
  }, [logoX, logoRotate]);

  return (
    <div className="d-flex justify-content-center align-items-center position-relative pointer py-2 bootstrap-padding">
      {/* Icon Logo */}
      <motion.div style={{ x: logoX, rotate: logoRotate }}>
        <Image
          {...logoConstant}
          alt={`${BRAND_INFO.NAME} logo`}
          style={{ borderRadius: '50%' }}
          priority={true}
        />
      </motion.div>

      <div
        className="text-uppercase fst-italic d-flex align-items-center"
        style={FIRE_CONFIG.brandName}
      >
        {letters.map((letter, index) => (
          <AnimatedLetter key={index} letter={letter} index={index} logoX={logoX} />
        ))}
      </div>
    </div>
  );
}

interface AnimatedLetterProps {
  letter: string;
  index: number;
  logoX: MotionValue<number>;
}

function AnimatedLetter({ letter, index, logoX }: AnimatedLetterProps) {
  const start = index * 25;
  const end = start + 40;

  const opacity = useTransform(logoX, [start, end], [0, 1]);
  const scale = useTransform(logoX, [start, end], [0.5, 1]);
  const x = useTransform(logoX, [start, end], [-10, 0]);

  return (
    <motion.span key={index} style={{ opacity, scale, x }}>
      {letter}
    </motion.span>
  );
}
