import apiClient from './api-client';
import { getTikTokVideosLink, getBannerLink } from './api-link';
import { socialMediaLinksFormat, bannerFormat } from '../helper/apiData/dataFormat';
import { BannerInterface, SocialMediaInterface } from '../types/models';
import { CACHE_NAME } from '../helper/constants/constantData';
import { createCacheRequest } from '../helper/cacheRequest';

export const getSocialMediaLinks = createCacheRequest(
  async (): Promise<SocialMediaInterface[]> => {
    try {
      const response = await apiClient.get(getTikTokVideosLink);
      return socialMediaLinksFormat(response?.data);
    } catch (error) {
      console.error('Error fetching social media links:', error);
      return socialMediaLinksFormat();
    }
  },
  [CACHE_NAME.SOCIAL_MEDIA.KEYS.LIST_TIKTOK],
  { tags: [CACHE_NAME.SOCIAL_MEDIA.TAGS, CACHE_NAME.SOCIAL_MEDIA.KEYS.LIST_TIKTOK] }
);

// get banner
const getBannerWithCache = createCacheRequest(async (): Promise<BannerInterface[]> => {
	try{
		const response = await apiClient.get(getBannerLink);
		return bannerFormat(response?.data);
	}catch(error){
		console.error("Error fetching banners:", error);
		return bannerFormat();
	}
},
[CACHE_NAME.BANNERS.KEYS.LIST],
{tags: [CACHE_NAME.BANNERS.TAGS, CACHE_NAME.BANNERS.KEYS.LIST]}
);
