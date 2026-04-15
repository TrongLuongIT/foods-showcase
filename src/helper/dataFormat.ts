import MOCK_DATA from './mockData';
export interface FooterCollectionInterface {
	title: string;
	rows: string[];
}

export const footerCollections = (data:any[] = []): FooterCollectionInterface[] => {
	return [
		{
			'title': 'Kokoria - món ngon chuẩn Hàn',
			'rows': [
				"Địa chỉ: 207/33 Ba tháng hai, Phường 11, Quận 10",
				"Các thông tin khác",
				"Phương thức liên hệ"
			],
		},
		{
			'title': 'Thông tin',
			'rows': [
				"Về chúng tôi",
				"Chính sách bảo mật",
				"Điều khoản dịch vụ",
				"Hỗ trợ khách hàng"
			],
		}
	]
}

export interface HeaderMenuInterface {
	name: string;
	link: string;
}

export const headerMenu = (data: any[] = []): HeaderMenuInterface[] => {
	return [
		{ name: 'Trang chủ', link: '/' },
		// { name: 'Sản phẩm', link: '/products' },
		// { name: 'Giới thiệu', link: '/about' },
		{ name: 'Liên hệ', link: '/contact' }
	]
}

export interface SocialMediaInterface {
	link: string;
	thumbnail: string;
	id: number|string;
}

export const socialMediaLinksFormat = (data: any[] = []): SocialMediaInterface[] => {

	// mock data
	if(data.length === 0) return MOCK_DATA.TIKTOK_VIDEOS;

	const videos = data.map((item: any) => ({
		link: item.video_link,
		thumbnail: item.thumbnail,
		id: item.id
	}));
	return videos;
}

export interface ProductInterface {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const foodFormat = (data: any[] = []): ProductInterface[] => {

	if(data.length === 0) return MOCK_DATA.FOODS;

	const foods = data.map((item: any) => ({
		id: item.id,
		name: item.title,
		image: item.image?.formats?.medium.url,
		description: item.description
	}));
	return foods;
};

export interface BannerInterface {
  id: number;
  src: string;
  link?: string;
  alt?: string;
}

export const bannerFormat = (data: any[] = []): BannerInterface[] => {

	if(data.length === 0) return MOCK_DATA.BANNER;

	return data.map((item: any) => ({
		id: item.id,
		src: item.src?.formats?.large.url,
		link: item.link || '',
		alt: item.alt || ''
	}));
};

