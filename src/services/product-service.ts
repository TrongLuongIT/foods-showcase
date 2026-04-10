import apiClient from "./api-client";
import { cache } from "react";
import { ProductInterface, foodFormat } from "@/src/helper/dataFormat";
import { createCacheRequest } from "../helper/cacheRequest";
import { CACHE_NAME } from "../helper/constantData";
import { getFoodLink } from "./api-link";

const getFoodsWithCache = createCacheRequest(async (): Promise<ProductInterface[]> => {
	const response = await apiClient.get(getFoodLink);
  console.log("getFoodsWithCache called");
	return foodFormat(response?.data);
},
[CACHE_NAME.FOODS.KEYS.LIST],
{tags: [CACHE_NAME.FOODS.TAGS, CACHE_NAME.FOODS.KEYS.LIST]}
);
export const getFoods = cache(async() => {
  return await getFoodsWithCache();
})

interface MockImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const MOCK_IMAGES: MockImage[] = [
  {
    "id": 1,
    "src": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000",
    "alt": "Không gian quán rượu Kokoria đông khách thể hiện doanh thu ổn định",
    "title": "Doanh thu ổn định và lợi nhuận cao",
    "description": "Bí quyết vận hành lâu năm giúp đảm bảo hiệu quả kinh doanh và lợi nhuận vượt trội."
  },
  {
    "id": 2,
    "src": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000",
    "alt": "Món chân gà nướng than hoa đặc trưng của Kokoria ăn kèm sốt đặc biệt",
    "title": "Thực đơn Steady Menu gây nghiện",
    "description": "Những món ăn mang hương vị độc đáo, chinh phục khẩu vị của mọi lứa tuổi."
  },
  {
    "id": 3,
    "src": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000",
    "alt": "Thiết kế nội thất quán Kokoria phong cách Pocha hiện đại và sành điệu",
    "title": "Nội thất không lỗi mốt",
    "description": "Sự kết hợp giữa phong cách Retro và xu hướng hiện đại, tạo không gian thư giãn lý tưởng."
  }
];

export interface MockBranchImage {
  id: number;
  src: string;
  alt: string;
}

export const MOCK_BRANCH_IMAGES: MockBranchImage[] =[
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại trung tâm thành phố"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 1"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 3"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 4"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 5"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 6"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 7"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 8"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 9"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 10"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    alt: "Chi nhánh quán Kokoria tại quận 11"
  }
];

export const MOCK_SLIDE_IMAGE: MockBranchImage[] = [
  {
    id: 1,
    src: "/uploads/images/koko-2.jpg",
    alt: "Chi nhánh quán Kokoria tại trung tâm thành phố"
  },
  {
    id: 2,
    src: "/uploads/images/koko-3.jpg",
    alt: "Chi nhánh quán Kokoria tại quận 1"
  },
  {
    id: 3,
    src: "/uploads/images/koko-4.jpg",
    alt: "Chi nhánh quán Kokoria tại quận 3"
  },
  {
    id: 4,
    src: "/uploads/images/koko-5.jpg",
    alt: "Chi nhánh quán Kokoria tại quận 4"
  },
];