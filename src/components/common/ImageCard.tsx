"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  ratio?: string;
  children?: React.ReactNode;
  className?: string;
  sizes?: string;
}

export default function ImageCard({
  src, alt, title,
  description,
  ratio="1/1",
  children,
  className,
  sizes="200px"
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-100"
    >
      <div 
        className="position-relative w-100 rounded overflow-hidden"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-fit-cover ` + className}
          sizes={sizes}
        />
        {children || null}
      </div>
      <div>
        <h3 className="text-truncate mt-2">{title || ''}</h3>
        <p>{description || ''}</p>
      </div>
    </motion.div>
  );
}
