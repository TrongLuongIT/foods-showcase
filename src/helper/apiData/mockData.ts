import { link } from 'fs';

export const TIKTOK_VIDEOS = [
  {
    id: 'tt-001',
    link: 'https://www.tiktok.com/@kokoria.chicken/video/7486328584022265096',
    thumbnail: '/images/thumbnail/1.jpeg',
  },
  {
    id: 'tt-002',
    link: 'https://www.tiktok.com/@kokoria.chicken/video/7201081758522133787',
    thumbnail: '/images/thumbnail/2.jpeg',
  },
  {
    id: 'tt-003',
    link: 'https://www.tiktok.com/@kokoria.chicken/video/7618524802747354389',
    thumbnail: '/images/thumbnail/3.jpeg',
  },
  {
    id: 'tt-004',
    link: 'https://www.tiktok.com/@kokoria.chicken/video/7618086759649348884',
    thumbnail: '/images/thumbnail/4.jpeg',
  },
];

export const FOODS = [
  {
    id: 101,
    name: 'Gà Rán Sốt Cay Kokoria',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500',
    description: 'Gà giòn rụm quyện cùng sốt cay ngọt đặc trưng của quán.',
  },
  {
    id: 102,
    name: 'Cơm Trộn Bibimbap',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=500',
    description: 'Sự kết hợp hoàn hảo giữa 8 loại rau củ và trứng lòng đào.',
  },
  {
    id: 103,
    name: 'Mì Tương Đen Jajangmyeon',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500',
    description: 'Sợi mì dai ngon hòa quyện cùng sốt tương đen đậm đà.',
  },
  {
    id: 104,
    name: 'Lẩu Kimchi Hải Sản',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=500',
    description: 'Vị chua cay nồng nàn, đầy ắp hải sản tươi sống.',
  },
  {
    id: 105,
    name: 'Tokbokki Phô Mai',
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=500',
    description: 'Bánh gạo dẻo mềm cùng lớp phô mai kéo sợi béo ngậy.',
  },
  {
    id: 106,
    name: 'Thịt Nướng Samgyeopsal',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500',
    description: 'Thịt ba chỉ nướng xèo xèo, ăn kèm rau sống và kim chi.',
  },
  {
    id: 107,
    name: 'Canh Đậu Phụ Non',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500',
    description: 'Canh nóng hổi, đậu phụ mềm tan trong miệng.',
  },
  {
    id: 108,
    name: 'Miến Trộn Japchae',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500',
    description: 'Miến khoai tây dai giòn cùng dầu mè thơm phức.',
  },
];

export const BANNER = [
  {
    id: 1,
    src: '/uploads/images/koko-2.jpg',
    link: '/',
    alt: 'Banner 1',
  },
  {
    id: 2,
    src: '/uploads/images/koko-3.jpg',
    link: '/',
    alt: 'Banner 2',
  },
  {
    id: 3,
    src: '/uploads/images/koko-4.jpg',
    link: '/',
    alt: 'Banner 3',
  },
  {
    id: 4,
    src: '/uploads/images/koko-5.jpg',
    link: '/',
    alt: 'Banner 4',
  },
];

export const MOCK_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000',
    alt: 'Không gian quán rượu Kokoria đông khách thể hiện doanh thu ổn định',
    title: 'Doanh thu ổn định và lợi nhuận cao',
    description:
      'Bí quyết vận hành lâu năm giúp đảm bảo hiệu quả kinh doanh và lợi nhuận vượt trội.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000',
    alt: 'Món chân gà nướng than hoa đặc trưng của Kokoria ăn kèm sốt đặc biệt',
    title: 'Thực đơn Steady Menu gây nghiện',
    description: 'Những món ăn mang hương vị độc đáo, chinh phục khẩu vị của mọi lứa tuổi.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000',
    alt: 'Thiết kế nội thất quán Kokoria phong cách Pocha hiện đại và sành điệu',
    title: 'Nội thất không lỗi mốt',
    description:
      'Sự kết hợp giữa phong cách Retro và xu hướng hiện đại, tạo không gian thư giãn lý tưởng.',
  },
];

export const GLOBAL_DATA = {
  footer: [
    {
      title: 'Kokoria - món ngon chuẩn Hàn',
      rows: [
        { name: 'Địa chỉ: 207/33 Ba tháng hai, Phường 11, Quận 10', link: '/' },
        { name: 'Các thông tin khác', link: '/' },
        { name: 'Phương thức liên hệ', link: '/' },
      ],
    },
    {
      title: 'Thông tin',
      rows: [
        { name: 'Về chúng tôi', link: '/about' },
        { name: 'Chính sách bảo mật', link: '/privacy' },
        { name: 'Điều khoản dịch vụ', link: '/terms' },
        { name: 'Hỗ trợ khách hàng', link: '/support' },
      ],
    },
  ],
  header: [
    { name: 'Trang chủ', link: '/' },
    { name: 'Liên hệ', link: '/contact' },
  ],
};

export const OUR_STORY = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại trung tâm thành phố',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 4',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 5',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 6',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 7',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 8',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 9',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 10',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    alt: 'Chi nhánh quán Kokoria tại quận 11',
  },
];

export const REASON = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000',
    alt: 'Không gian quán rượu Kokoria đông khách thể hiện doanh thu ổn định',
    title: 'Doanh thu ổn định và lợi nhuận cao',
    description:
      'Bí quyết vận hành lâu năm giúp đảm bảo hiệu quả kinh doanh và lợi nhuận vượt trội.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000',
    alt: 'Món chân gà nướng than hoa đặc trưng của Kokoria ăn kèm sốt đặc biệt',
    title: 'Thực đơn Steady Menu gây nghiện',
    description: 'Những món ăn mang hương vị độc đáo, chinh phục khẩu vị của mọi lứa tuổi.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1000',
    alt: 'Thiết kế nội thất quán Kokoria phong cách Pocha hiện đại và sành điệu',
    title: 'Nội thất không lỗi mốt',
    description:
      'Sự kết hợp giữa phong cách Retro và xu hướng hiện đại, tạo không gian thư giãn lý tưởng.',
  },
];
