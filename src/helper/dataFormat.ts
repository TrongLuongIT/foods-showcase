/*
 * header menu fs-3
 * category fs-4
 * title fs-5
 * text fs-6
 * more information fs-7
 */

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

const kokoThump = 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oMMTFoeRACjy2hQ9M8jIIfsDe784YAYORhAOWP~tplv-tiktokx-origin.image?dr=14575&x-expires=1775091600&x-signature=7iWl1wcihMtDK5TXsmlwoxDO7f0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2 1x, https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oMMTFoeRACjy2hQ9M8jIIfsDe784YAYORhAOWP~tplv-tiktokx-origin.image?dr=14575&x-expires=1775091600&x-signature=7iWl1wcihMtDK5TXsmlwoxDO7f0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2 2x';

export const socialMediaLinksFormat = (data: any[] = []): SocialMediaInterface[] => {
    return [
        { link: 'https://www.tiktok.com/@kokoria.chicken/video/7486328584022265096?is_from_webapp=1&sender_device=pc&web_id=7541402245171594760', thumbnail: kokoThump, id: 1 },
        { link: 'https://www.tiktok.com/@kokoria.chicken/video/7201081758522133787?is_from_webapp=1&sender_device=pc&web_id=7541402245171594760', thumbnail: "https://p16-common-sign.tiktokcdn.com/tos-useast2a-p-0037-aiso/oYbvfgQIDqnA7Pce2bBdHjYBC07DVCBUEFbvbV~tplv-tiktokx-origin.image?dr=14575&x-expires=1775091600&x-signature=6nVGbjRa1NRRJRZqQxWhT5blzLc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2 1x, https://p16-common-sign.tiktokcdn.com/tos-useast2a-p-0037-aiso/oYbvfgQIDqnA7Pce2bBdHjYBC07DVCBUEFbvbV~tplv-tiktokx-origin.image?dr=14575&x-expires=1775091600&x-signature=6nVGbjRa1NRRJRZqQxWhT5blzLc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2 2x", id: 2 },
        { link: 'https://www.tiktok.com/@kokoria.chicken/video/7616577357150801172', thumbnail: "https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/okYNKB8czbNVKEnacOIXCAihOvAEIGYwqiEUB~tplv-tiktokx-origin.image?dr=14575&x-expires=1775091600&x-signature=Omiakkzxvpi84IpVuEo6egW9WDk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2 1x, https://p19-common-sign.tiktokcdn.com/tos-alisg-p-0037/okYNKB8czbNVKEnacOIXCAihOvAEIGYwqiEUB~tplv-tiktokx-origin.image?dr=14575&x-expires=1775091600&x-signature=Omiakkzxvpi84IpVuEo6egW9WDk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2 2x", id: 3 },
        { link: 'https://www.tiktok.com/@kokoria.chicken/video/7618524802747354389?is_from_webapp=1&sender_device=pc&web_id=7541402245171594760', thumbnail: kokoThump, id: 4 }
    ]
}

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const listProduct = (data: any[] = []): ProductInterface[] => {
	return [
	{
		id: 1,
		name: "iPhone 15 Pro Max 256GB",
		price: 29990000,
		image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
		description: "Chip A17 Pro mạnh mẽ, camera 48MP zoom quang học 5x.",
	},
	{
		id: 2,
		name: "MacBook Pro M3 14 inch",
		price: 39990000,
		image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
		description: "Màn hình Liquid Retina XDR, hiệu năng vượt trội cho đồ họa.",
	},
	{
		id: 3,
		name: "Apple Watch Ultra 2",
		price: 21490000,
		image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
		description: "Vỏ titan bền bỉ, GPS tần số kép chính xác nhất.",
	},
	{
		id: 4,
		name: "AirPods Pro Gen 2 (USB-C)",
		price: 5990000,
		image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
		description: "Chống ồn chủ động gấp 2 lần, âm thanh thích ứng.",
	},
	{
		id: 5,
		name: "iPad Pro M2 12.9 inch",
		price: 31990000,
		image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
		description: "Trải nghiệm Apple Pencil di chuột, màn hình Mini-LED.",
	},
	{
		id: 6,
		name: "Magic Mouse - Black",
		price: 2490000,
		image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
		description: "Thiết kế tối giản, hỗ trợ cử chỉ Multi-Touch.",
	},
	]
};