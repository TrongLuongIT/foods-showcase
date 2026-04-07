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

export const getSocialMediaLinks = cache(async (): Promise<SocialMediaInterface[]> => {
	try {
		const response = await apiClient.get(getTikTokVideosLink);
		return socialMediaLinksFormat(response?.data);
	} catch (error) {
		console.error("Error fetching social media links:", error);
		throw error;
	}
});

export const getBanner = cache(async (): Promise<BannerInterface[]> => {
	try {
		const response = await apiClient.get(getBannerLink);
		return bannerFormat(response?.data);
	} catch (error) {
		console.error("Error fetching banner:", error);
		throw error;
	}
});

export const getConfigPage = cache(async (): Promise<any> => {
	try {
		const response = await apiClient.get(getGlobalDataLink);
		console.log("Config page data:", response);
		return response?.data;
	} catch (error) {
		console.error("Error fetching config page:", error);
		throw error;
	}
});
