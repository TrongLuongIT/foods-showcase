import apiClient from './api-client';
import { foodFormat } from '@/src/helper/apiData/dataFormat';
import { ProductInterface } from '@/src/types/models';
import { createCacheRequest } from '../helper/cacheRequest';
import { CACHE_NAME } from '../helper/constants/constantData';
import { getFoodLink } from './api-link';

export const getFoods = createCacheRequest(
  async (): Promise<ProductInterface[]> => {
    try {
      const response = await apiClient.get(getFoodLink);
      return foodFormat(response?.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
      return foodFormat();
    }
  },
  [CACHE_NAME.FOODS.KEYS.LIST],
  { tags: [CACHE_NAME.FOODS.TAGS, CACHE_NAME.FOODS.KEYS.LIST] }
);
