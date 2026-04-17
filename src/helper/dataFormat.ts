import * as MOCK_DATA from "./mockData"

export interface FooterCollectionInterface {
	title: string;
	rows: MenuInterface[];
}

export const footerFormat = (data:any[] = []): FooterCollectionInterface[] => {
	return data.map(item => ({
		'title': item.title,
		'rows': item.rows.map((row: any) => ({
			name: row.name,
			link: row.link || ''
		}))
	}));
}

export interface MenuInterface {
	name: string;
	link: string;
}

export const headerMenuFormat = (data: any[] = []): MenuInterface[] => {
	return data.map(item => ({
		name: item.name,
		link: item.link || ''
	}));
}

interface GlobalDataInterface {
	header: MenuInterface[];
	footer: FooterCollectionInterface[];
}

export const globalDataFormat = (data: any = {}): GlobalDataInterface => {

	if(!data || Object.keys(data).length === 0) return MOCK_DATA.GLOBAL_DATA;

	return {
		header: headerMenuFormat(data?.header || []),
		footer: footerFormat(data?.footer || [])
	}
}

export interface SocialMediaInterface {
	link: string;
	thumbnail: string;
	id: number|string;
}

export const socialMediaLinksFormat = (data: any[] = []): SocialMediaInterface[] => {

	if(!data || data.length === 0) return MOCK_DATA.TIKTOK_VIDEOS;

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

	if(!data || data.length === 0) return MOCK_DATA.FOODS;

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

	if(!data || data.length === 0) return MOCK_DATA.BANNER;

	return data.map((item: any) => ({
		id: item.id,
		src: item.src?.formats?.large.url,
		link: item.link || '',
		alt: item.alt || ''
	}));
};

export interface ReasonInterface {
	id: number | string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const reasonFormat = (data: any[] = []): ReasonInterface[] => {

	if(!data || data.length === 0) return MOCK_DATA.REASON;

	return data.map((item: any) => ({
		id: item.id,
		src: item.src?.formats?.small.url,
		alt: item.alt || '',
		title: item.title || '',
		description: item.description || ''
	}));
};

export interface OurStoryInterface {
  src: string;
  alt: string;
}

export const ourStoryFormat = (data: any[] = []): OurStoryInterface[] => {

	if(!data || data.length === 0) return MOCK_DATA.OUR_STORY;

	return data.map((item: any) => ({
		src: item.formats?.small.url || '',
		alt: item.alt || ''
	}));
};
