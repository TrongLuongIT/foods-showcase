import * as MOCK_DATA from './mockData';
import { getApiImage, IMAGE_SIZES } from './media';
import { safeString, safeId } from '../utils';

import {
  RawMenu,
  RawFooter,
  RawSocialMedia,
  RawFood,
  RawBanner,
  RawReason,
  RawOurStory,
} from '@/src/types/strapi';

import {
  MenuInterface,
  FooterCollectionInterface,
  SocialMediaInterface,
  ProductInterface,
  BannerInterface,
  ReasonInterface,
  OurStoryInterface,
  GlobalDataInterface,
} from '@/src/types/models';

export const footerFormat = (data: RawFooter[] = []): FooterCollectionInterface[] => {
  return data.map((item) => ({
    title: safeString(item.title),
    rows: (item.rows || []).map((row: RawMenu) => ({
      name: safeString(row.name),
      link: safeString(row.link),
    })),
  }));
};

export const headerMenuFormat = (data: RawMenu[] = []): MenuInterface[] => {
  return data.map((item) => ({
    name: safeString(item.name),
    link: safeString(item.link),
  }));
};

export const globalDataFormat = (
  data: { header?: RawMenu[]; footer?: RawFooter[] } = {}
): GlobalDataInterface => {
  if (!data || Object.keys(data).length === 0) return MOCK_DATA.GLOBAL_DATA;

  return {
    header: headerMenuFormat(data.header || []),
    footer: footerFormat(data.footer || []),
  };
};

export const socialMediaLinksFormat = (data: RawSocialMedia[] = []): SocialMediaInterface[] => {
  if (!data || data.length === 0) return MOCK_DATA.TIKTOK_VIDEOS;

  return data.map((item) => ({
    link: safeString(item.video_link),
    thumbnail: safeString(item.thumbnail),
    id: item.id,
  }));
};

export const foodFormat = (data: RawFood[] = []): ProductInterface[] => {
  if (!data || data.length === 0) return MOCK_DATA.FOODS;

  return data.map((item, index) => ({
    id: safeId(item.id, index, 'food'),
    name: safeString(item.title),
    image: getApiImage(item, IMAGE_SIZES.MEDIUM),
    description: safeString(item.description),
  }));
};

export const bannerFormat = (data: RawBanner[] = []): BannerInterface[] => {
  if (!data || data.length === 0) return MOCK_DATA.BANNER;

  return data.map((item, index) => ({
    id: safeId(item.id, index, 'banner'),
    src: getApiImage(item, IMAGE_SIZES.LARGE),
    link: safeString(item.link),
    alt: safeString(item.alt),
  }));
};

export const reasonFormat = (data: RawReason[] = []): ReasonInterface[] => {
  if (!data || data.length === 0) return MOCK_DATA.REASON;

  return data.map((item, index) => ({
    id: safeId(item.id, index, 'reason'),
    src: getApiImage(item, IMAGE_SIZES.SMALL),
    alt: safeString(item.alt),
    title: safeString(item.title),
    description: safeString(item.description),
  }));
};

export const ourStoryFormat = (data: RawOurStory[] = []): OurStoryInterface[] => {
  if (!data || data.length === 0) return MOCK_DATA.OUR_STORY;

  return data.map((item) => ({
    src: getApiImage(item, IMAGE_SIZES.SMALL),
    alt: safeString(item.alt),
  }));
};
