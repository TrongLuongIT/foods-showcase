import apiClient from "./api-client";
import { cache } from "react";
import { globalDataFormat } from "@/src/helper/dataFormat";
import { createCacheRequest } from "../helper/cacheRequest";
import { CACHE_NAME } from "../helper/constantData";
import {  getGlobalDataLink } from "./api-link";

const getGlobalDataWithCache = createCacheRequest(async (): Promise<any> => {
	try{
		const response = await apiClient.get(getGlobalDataLink);
		return globalDataFormat(response?.data);
	}catch(error){
		console.error("Error fetching global data:", error);
		return globalDataFormat();
	}
},
[CACHE_NAME.GLOBAL_CONFIG.TAGS],
{tags: [CACHE_NAME.GLOBAL_CONFIG.TAGS]}
);
export const getGlobalData = cache(async (): Promise<any> => {
	return await getGlobalDataWithCache();
});