export interface MenuInterface {
  name: string;
  link: string;
}

export interface FooterCollectionInterface {
  title: string;
  rows: MenuInterface[];
}

export interface SocialMediaInterface {
  link: string;
  thumbnail: string;
  id: number | string;
}

export interface ProductInterface {
  id: number | string;
  name: string;
  image: string;
  description: string;
}

export interface BannerInterface {
  id: number | string;
  src: string;
  link?: string;
  alt?: string;
}

export interface ReasonInterface {
  id: number | string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface OurStoryInterface {
  src: string;
  alt: string;
}

export interface GlobalDataInterface {
  header: MenuInterface[];
  footer: FooterCollectionInterface[];
}
