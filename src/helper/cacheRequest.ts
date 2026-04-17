import { unstable_cache } from "next/cache";

export const createCacheRequest = <T, P extends any[]>(
  fetcher: ((...args: P) => Promise<T>),
  keyParts: string[],
  {
    revalidate = 3600,
    tags = [],
  }: { revalidate?: number; tags?: string[] } = {}
) => {

  const finalTags = ['all', ...(tags || [])];

  return unstable_cache(
    async (...args: P) => fetcher(...args),
    keyParts,
    { revalidate, tags: finalTags }
  );
};