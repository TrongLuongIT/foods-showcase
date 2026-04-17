import apiClient from "./api-client";
import { cache } from "react";
import { reasonFormat, ourStoryFormat } from "@/src/helper/dataFormat";
import { createCacheRequest } from "../helper/cacheRequest";
import { CACHE_NAME } from "../helper/constantData";
import {  getOurStoryLink, getReasonLink } from "./api-link";
import { tr } from "framer-motion/client";

const getOurStoryWithCache = createCacheRequest(async (): Promise<any> => {
  try{
    const response = await apiClient.get(getOurStoryLink);
    return ourStoryFormat(response?.data?.images);
  }catch(error){
    console.error("Error fetching our story:", error);
    return ourStoryFormat();
  }
},
[CACHE_NAME.OUR_STORY.TAGS],
{tags: [CACHE_NAME.OUR_STORY.TAGS]}
);
export const getOurStoryData = cache(async (): Promise<any> => {
  return await getOurStoryWithCache();
});

const getReasonWithCache = createCacheRequest(async (): Promise<any> => {
  try{
    const response = await apiClient.get(getReasonLink);
    return reasonFormat(response?.data);
  }catch(error){
    console.error("Error fetching reasons:", error);
    return reasonFormat();
  }
},
[CACHE_NAME.REASONS.TAGS],
{tags: [CACHE_NAME.REASONS.TAGS]}
);
export const getReasonData = cache(async (): Promise<any> => {
  return await getReasonWithCache();
});