import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    // Tắt các cảnh báo từ thư viện bên thứ 3 (như Bootstrap)
    quietDeps: true,
  },
  /* config options here */
  images: {
    domains: [
      'picsum.photos',
      'images.unsplash.com',
      'shop.vinfastauto.com',
      'p9-sign-sg.tiktokcdn.com',
      'p16-common-sign.tiktokcdn.com',
      'p16-sign-sg.tiktokcdn.com',
      'p19-common-sign.tiktokcdn.com',
      'localhost',
      'res.cloudinary.com',
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 828, 1080, 1920],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
  },
  eslint: {
    // Tắt vì chúng ta đã tự chạy lint ở package.json build script
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
