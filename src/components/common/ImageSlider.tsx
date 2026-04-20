'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderProps {
  images: { src: string; alt?: string; id: number }[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1,
  }),
};

export default function ImageSlider({ images }: SliderProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  // Bọc paginate vào useCallback để tham chiếu không đổi
  const paginate = useCallback((newDirection: number) => {
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  }, []);

  const goToPage = (index: number) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]); // Chỉ phụ thuộc vào paginate (đã được memoize)

  return (
    <div className="position-relative overflow-hidden w-100">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 80, damping: 25 },
            opacity: { duration: 0.5 },
          }}
          className="position-relative bg-light"
          style={{ height: 'auto', aspectRatio: '18/9' }}
        >
          <Image
            src={images[imageIndex].src}
            alt={images[imageIndex].alt || ''}
            sizes="(max-width: 768px) 150px, 100vw"
            className="object-fit-cover"
            priority={imageIndex === 0}
            fill
          />
        </motion.div>
      </AnimatePresence>

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex z-1">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToPage(index)}
            className={`mx-1 rounded-circle transition-all dot-point ${
              index === imageIndex ? 'bg-danger border-0' : 'opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
