import apiClient from './api-client';
import { globalDataFormat } from '@/src/helper/apiData/dataFormat';
import { GlobalDataInterface } from '../types/models';
import { createCacheRequest } from '../helper/cacheRequest';
import { CACHE_NAME } from '../helper/constants/constantData';
import { getGlobalDataLink } from './api-link';

export const getGlobalData = createCacheRequest(
  async (): Promise<GlobalDataInterface> => {
    try {
      const response = await apiClient.get(getGlobalDataLink);
      return globalDataFormat(response?.data);
    } catch (error) {
      console.error('Error fetching global data:', error);
      return globalDataFormat();
    }
  },
  [CACHE_NAME.GLOBAL_CONFIG.TAGS],
  { tags: [CACHE_NAME.GLOBAL_CONFIG.TAGS] }
);
