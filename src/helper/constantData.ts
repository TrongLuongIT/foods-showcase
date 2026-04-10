interface BrandInfoInterface {
  NAME: string;
  SLOGAN: string;
  FULL_NAME: string;
  CONTACT: {
    PHONE: string;
    EMAIL: string;
    ADDRESS: string;
  };
}

export const BRAND_INFO: BrandInfoInterface = {
  NAME: "Kokoria",
  SLOGAN: "Created by TrongLuong",
  FULL_NAME: "Kokoria - Fried Chicken",
  CONTACT: {
    PHONE: "070-879-6719",
    EMAIL: "kokoria.sg@gmail.com",
    ADDRESS: "207/33 ba tháng hai phường 11 , quận 10, Ho Chi Minh City, Vietnam"
  },
}

export const BOOTSTRAP_BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export interface LogoConstantInterface {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const logoConstant: LogoConstantInterface = {
  src: "/images/layout/logo.jpg",
  alt: "Kokoria Logo",
  width: 50,
  height: 50,
};

export const CACHE_NAME = {
  FOODS:{
    TAGS: "foods",
    KEYS: {
      LIST: "food-list"
    }
  },
  BANNERS: {
    TAGS: "banners",
    KEYS: {
      LIST: "banner-list"
    }
  },
  SOCIAL_MEDIA: {
    TAGS: "social-media",
    KEYS: {
      LIST_TIKTOK: "list-tiktok"
    }
  },
  CONFIG: {
    TAGS: "config",
    KEYS: {
      PAGE: "config-page"
    }
  }
}

export const brandList = [
  {
    name: "CN 3 Tháng 2",
    address: "207/33 Ba tháng hai, Phường 11, Quận 10",
    phone: "0708796719"
  },
  {
    name: "CN Sư Vạn Hạnh",
    address: "573/2 Sư Vạn Hạnh , P.13 , Quận 10",
    phone: "0785037679"
  },
  {
    name: "CN Tân Bình",
    address: "28 Trương Công Định , Phường 14 , Quận Tân Bình",
    phone: "0938592218"
  },
  {
    name: "CN Lê Văn Duyệt",
    address: "106 Lê Văn Duyệt, Phường 1, Bình Thạnh",
    phone: "0909407981"
  },
  {
    name: "CN Xô Viết Nghệ Tĩnh",
    address: "321-323-325 Xô Viết Nghệ Tĩnh, P.24, Quận Bình Thạnh",
    phone: "0938585618"
  },
  {
    name: "CN Gò Vấp",
    address: "699 Phan Văn Trị , Phường 1 , Quận Gò Vấp",
    phone: "0938115428"
  },
  {
    name: "CN Quận 9",
    address: "Shophouse 01S04, tòa nhà S203, khu Rainbow, Chung cư Vinhomes Grand Park, Q9, Tp Thủ Đức",
    phone: "0792712100"
  },
  {
    name: "CN Quận 12",
    address: "29A Nguyễn Ảnh Thủ, P. Hiệp Thành, Quận 12",
    phone: "0909815996"
  },
  {
    name: "CN Cần Thơ",
    address: "Số 228A, Trần Hưng Đạo, Ninh Kiều, Cần Thơ",
    phone: "0949668227"
  },
  {
    name: "CN Cà Mau",
    address: "210 Châu Văn Liêm, P. An Xuyên, Cà Mau",
    phone: "0869688563"
  }
];