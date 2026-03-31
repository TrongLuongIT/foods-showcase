import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // Tắt các cảnh báo từ thư viện bên thứ 3 (như Bootstrap)
    quietDeps: true, 
  },
  /* config options here */
  images: {
    domains: [
      "https://picsum.photos",
      "picsum.photos",
      "https://images.unsplash.com",
      "images.unsplash.com",
      "shop.vinfastauto.com",
      "p9-sign-sg.tiktokcdn.com",
      "p16-common-sign.tiktokcdn.com",
      "p16-sign-sg.tiktokcdn.com",
      "p19-common-sign.tiktokcdn.com"
    ],
  },
};

export default nextConfig;