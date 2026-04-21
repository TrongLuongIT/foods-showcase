export interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiMediaRaw {
  id: number;
  attributes: {
    url: string;
    formats?: {
      large?: StrapiMediaFormat;
      medium?: StrapiMediaFormat;
      small?: StrapiMediaFormat;
      thumbnail?: StrapiMediaFormat;
    };
    alternativeText?: string;
  };
}

export interface RawMenu {
  name: string;
  link: string;
}

export interface RawFooter {
  title: string;
  rows: RawMenu[];
}

export interface RawSocialMedia {
  video_link: string;
  thumbnail: string;
  id: number | string;
}

export interface RawFood {
  id: number | string;
  title: string;
  description: string;
  image?: {
    data: StrapiMediaRaw;
  };
}

export interface RawBanner {
  id: number | string;
  link?: string;
  alt?: string;
  image?: {
    data: StrapiMediaRaw;
  };
}

export interface RawReason {
  id: number | string;
  title: string;
  description: string;
  alt: string;
  image?: {
    data: StrapiMediaRaw;
  };
}

export interface RawOurStory {
  alt: string;
  image?: {
    data: StrapiMediaRaw;
  };
}
