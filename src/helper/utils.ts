export const safeString = (val?: string): string => val ?? '';
export const safeId = (id: string | number, index: number, prefix: string): string | number =>
  id ?? `${prefix}-${index}-missing-id`;
