import { cache } from "react";

import apiClient from "./api-client";
import { 
	getTikTokVideosLink,
	getGlobalDataLink,
	getBannerLink
} from "./api-link";
import { 
	SocialMediaInterface,
	socialMediaLinksFormat,
	BannerInterface,
	bannerFormat,
} from "../helper/dataFormat";
import { CACHE_NAME } from "../helper/constantData";
import { createCacheRequest } from "../helper/cacheRequest";

/*
 * Api ở đây được cache bởi next, và cả cache của react
 */

const getSocialMediaLinksWithCache = createCacheRequest(async (): Promise<SocialMediaInterface[]> => {
	const response = await apiClient.get(getTikTokVideosLink);
	return socialMediaLinksFormat(response?.data);
},
	[CACHE_NAME.SOCIAL_MEDIA.KEYS.LIST_TIKTOK],
	{tags: [CACHE_NAME.SOCIAL_MEDIA.TAGS, CACHE_NAME.SOCIAL_MEDIA.KEYS.LIST_TIKTOK]}
);
export const getSocialMediaLinks = cache(async(): Promise<SocialMediaInterface[]> => {
	return await getSocialMediaLinksWithCache();
});

const getBannerWithCache = createCacheRequest(async (): Promise<BannerInterface[]> => {
	const response = await apiClient.get(getBannerLink);
	return bannerFormat(response?.data);
},
[CACHE_NAME.BANNERS.KEYS.LIST],
{tags: [CACHE_NAME.BANNERS.TAGS, CACHE_NAME.BANNERS.KEYS.LIST]}
);
export const getBanner = cache(async (): Promise<BannerInterface[]> => {
	return await getBannerWithCache();
});

const getConfigPageWithCache = createCacheRequest(async (): Promise<any> => {
	const response = await apiClient.get(getGlobalDataLink);
	return response?.data;
},
[CACHE_NAME.CONFIG.KEYS.PAGE],
{tags: [CACHE_NAME.CONFIG.TAGS, CACHE_NAME.CONFIG.KEYS.PAGE]}
);
export const getConfigPage = cache(async (): Promise<any> => {
	return await getConfigPageWithCache();
});

