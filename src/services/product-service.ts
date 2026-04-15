import apiClient from "./api-client";
import { cache } from "react";
import { ProductInterface, foodFormat } from "@/src/helper/dataFormat";
import { createCacheRequest } from "../helper/cacheRequest";
import { CACHE_NAME } from "../helper/constantData";
import { getFoodLink } from "./api-link";

const getFoodsWithCache = createCacheRequest(async (): Promise<ProductInterface[]> => {
  try{
    const response = await apiClient.get(getFoodLink);
    return foodFormat(response?.data);
  }catch(error){
    console.error("Error fetching foods:", error);
    return foodFormat();
  }
},
[CACHE_NAME.FOODS.KEYS.LIST],
{tags: [CACHE_NAME.FOODS.TAGS, CACHE_NAME.FOODS.KEYS.LIST]}
);
export const getFoods = cache(async() => {
  return await getFoodsWithCache();
})