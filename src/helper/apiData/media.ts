export type ImageSize = 'small' | 'medium' | 'large' | 'thumbnail';

export const IMAGE_SIZES: Record<string, ImageSize> = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  THUMBNAIL: 'thumbnail',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getApiImage = (image: any, size: ImageSize = 'small'): string => {
  return (
    image?.src?.formats?.[size]?.url ||
    image?.image?.formats?.[size]?.url ||
    image?.formats?.[size]?.url ||
    '/fallback.png'
  );
};
