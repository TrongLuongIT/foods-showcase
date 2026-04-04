import { cache } from "react";

import apiClient from "./api-client";
import { getTikTokVideosLink } from "./api-link";
import { SocialMediaInterface, socialMediaLinksFormat } from "../helper/dataFormat";

export const getSocialMediaLinks = cache(async (): Promise<SocialMediaInterface[]> => {
	try {
		const response = await apiClient.get(getTikTokVideosLink);
		return socialMediaLinksFormat(response?.data);
	} catch (error) {
		console.error("Error fetching social media links:", error);
		throw error;
	}
});
