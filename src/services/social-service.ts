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
	try {
		const response = await apiClient.get(getTikTokVideosLink);
		return socialMediaLinksFormat(response?.data);
	} catch (error) {
		console.error("Error fetching social media links:", error);
		return socialMediaLinksFormat();
	}
},
	[CACHE_NAME.SOCIAL_MEDIA.KEYS.LIST_TIKTOK],
	{tags: [CACHE_NAME.SOCIAL_MEDIA.TAGS, CACHE_NAME.SOCIAL_MEDIA.KEYS.LIST_TIKTOK]}
);
export const getSocialMediaLinks = cache(async(): Promise<SocialMediaInterface[]> => {
	return await getSocialMediaLinksWithCache();
});

// get banner
const getBannerWithCache = createCacheRequest(async (): Promise<BannerInterface[]> => {
	try {
		const response = await apiClient.get(getBannerLink);
		return bannerFormat(response?.data);
	} catch (error) {
		console.error("Error fetching banners:", error);
		return bannerFormat();
	}
},
[CACHE_NAME.BANNERS.KEYS.LIST],
{tags: [CACHE_NAME.BANNERS.TAGS, CACHE_NAME.BANNERS.KEYS.LIST]}
);
export const getBanner = cache(async (): Promise<BannerInterface[]> => {
	return await getBannerWithCache();
});

// get config page, apply for header, footer - todo
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

