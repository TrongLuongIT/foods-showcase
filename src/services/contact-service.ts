import apiClient from './api-client';
import { reasonFormat, ourStoryFormat } from '@/src/helper/apiData/dataFormat';
import { OurStoryInterface, ReasonInterface } from '@/src/types/models';
import { createCacheRequest } from '../helper/cacheRequest';
import { CACHE_NAME } from '../helper/constants/constantData';
import { getOurStoryLink, getReasonLink } from './api-link';

export const getOurStoryData = createCacheRequest(
  async (): Promise<OurStoryInterface[]> => {
    try {
      const response = await apiClient.get(getOurStoryLink);
      return ourStoryFormat(response?.data?.images);
    } catch (error) {
      console.error('Error fetching our story:', error);
      return ourStoryFormat();
    }
  },
  [CACHE_NAME.OUR_STORY.TAGS],
  { tags: [CACHE_NAME.OUR_STORY.TAGS] }
);

export const getReasonData = createCacheRequest(
  async (): Promise<ReasonInterface[]> => {
    try {
      const response = await apiClient.get(getReasonLink);
      return reasonFormat(response?.data);
    } catch (error) {
      console.error('Error fetching reasons:', error);
      return reasonFormat();
    }
  },
  [CACHE_NAME.REASONS.TAGS],
  { tags: [CACHE_NAME.REASONS.TAGS] }
);
