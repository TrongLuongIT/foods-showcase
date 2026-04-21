import { unstable_cache } from 'next/cache';
import { cache } from 'react';

// unstable_cache
export const createCacheRequest = <T, P extends unknown[]>(
  fetcher: (...args: P) => Promise<T>,
  keyParts: string[],
  { revalidate = 3600, tags = [] }: { revalidate?: number; tags?: string[] } = {}
) => {
  const finalTags = ['all', ...(tags || [])];
  return unstable_cache(fetcher, keyParts, { revalidate, tags: finalTags });
};

//parallel safe cache request
export const createParallelCacheRequest = <T, P extends unknown[]>(
  fetcher: (...args: P) => Promise<T>,
  keyParts: string[],
  options?: { revalidate?: number; tags?: string[] }
) => {
  const persistentFetcher = createCacheRequest(fetcher, keyParts, options);

  const parallelSafeFetcher = cache(async (...args: P) => {
    return persistentFetcher(...args);
  });

  return parallelSafeFetcher;
};
