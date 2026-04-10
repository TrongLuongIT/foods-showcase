import { unstable_cache } from "next/cache";

export const createCacheRequest = <T, P extends any[]>(
  fetcher: ((...args: P) => Promise<T>),
  keyParts: string[],
  options: {time?: number, tags?: string[]} = {time: 3600}
) => {
  return unstable_cache(
    async (...args: P) => fetcher(...args),
    keyParts,
    options
  );
};