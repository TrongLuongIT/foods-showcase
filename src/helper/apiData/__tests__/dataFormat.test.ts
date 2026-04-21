/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import * as formatters from '../dataFormat';
import * as MOCK_DATA from '../mockData';

// Mock media helper
vi.mock('../media', () => ({
  getApiImage: vi.fn((data, size) => `mocked-url-${size}`),
  IMAGE_SIZES: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    THUMBNAIL: 'thumbnail',
  },
}));

describe('dataFormat helper', () => {
  describe('footerFormat', () => {
    it('should format footer data correctly', () => {
      const input = [
        {
          title: 'Section 1',
          rows: [{ name: 'Home', link: '/' }],
        },
      ];
      const result = formatters.footerFormat(input as any);
      expect(result).toEqual([
        {
          title: 'Section 1',
          rows: [{ name: 'Home', link: '/' }],
        },
      ]);
    });

    it('should return empty array if input is empty', () => {
      expect(formatters.footerFormat([])).toEqual([]);
      expect(formatters.footerFormat(undefined)).toEqual([]);
    });
  });

  describe('headerMenuFormat', () => {
    it('should format header menu data correctly', () => {
      const input = [{ name: 'About', link: '/about' }];
      const result = formatters.headerMenuFormat(input as any);
      expect(result).toEqual([{ name: 'About', link: '/about' }]);
    });

    it('should return empty array if input is empty', () => {
      expect(formatters.headerMenuFormat([])).toEqual([]);
      expect(formatters.headerMenuFormat(undefined)).toEqual([]);
    });
  });

  describe('globalDataFormat', () => {
    it('should format global data correctly', () => {
      const input = {
        header: [{ name: 'Home', link: '/' }],
        footer: [{ title: 'Footer', rows: [] }],
      };
      const result = formatters.globalDataFormat(input as any);
      expect(result.header).toHaveLength(1);
      expect(result.footer).toHaveLength(1);
    });

    it('should return MOCK_DATA.GLOBAL_DATA if input is empty', () => {
      const result = formatters.globalDataFormat({});
      expect(result).toEqual(MOCK_DATA.GLOBAL_DATA);
    });
  });

  describe('socialMediaLinksFormat', () => {
    it('should format social media links correctly', () => {
      const input = [{ video_link: 'link1', thumbnail: 'thumb1', id: 1 }];
      const result = formatters.socialMediaLinksFormat(input as any);
      expect(result).toEqual([{ link: 'link1', thumbnail: 'thumb1', id: 1 }]);
    });

    it('should return MOCK_DATA.TIKTOK_VIDEOS if input is empty', () => {
      const result = formatters.socialMediaLinksFormat([]);
      expect(result).toEqual(MOCK_DATA.TIKTOK_VIDEOS);
    });
  });

  describe('foodFormat', () => {
    it('should format food data correctly', () => {
      const input = [{ id: 1, title: 'Pizza', description: 'Yummy' }];
      const result = formatters.foodFormat(input as any);
      expect(result[0]).toEqual({
        id: 1,
        name: 'Pizza',
        image: 'mocked-url-medium',
        description: 'Yummy',
      });
    });

    it('should return MOCK_DATA.FOODS if input is empty', () => {
      const result = formatters.foodFormat([]);
      expect(result).toEqual(MOCK_DATA.FOODS);
    });
  });

  describe('bannerFormat', () => {
    it('should format banner data correctly', () => {
      const input = [{ id: 1, link: '/', alt: 'Banner' }];
      const result = formatters.bannerFormat(input as any);
      expect(result[0]).toEqual({
        id: 1,
        src: 'mocked-url-large',
        link: '/',
        alt: 'Banner',
      });
    });

    it('should return MOCK_DATA.BANNER if input is empty', () => {
      const result = formatters.bannerFormat([]);
      expect(result).toEqual(MOCK_DATA.BANNER);
    });
  });

  describe('reasonFormat', () => {
    it('should format reason data correctly', () => {
      const input = [{ id: 1, alt: 'Reason', title: 'Quality', description: 'Best' }];
      const result = formatters.reasonFormat(input as any);
      expect(result[0]).toEqual({
        id: 1,
        src: 'mocked-url-small',
        alt: 'Reason',
        title: 'Quality',
        description: 'Best',
      });
    });

    it('should return MOCK_DATA.REASON if input is empty', () => {
      const result = formatters.reasonFormat([]);
      expect(result).toEqual(MOCK_DATA.REASON);
    });
  });

  describe('ourStoryFormat', () => {
    it('should format our story data correctly', () => {
      const input = [{ alt: 'Story' }];
      const result = formatters.ourStoryFormat(input as any);
      expect(result[0]).toEqual({
        src: 'mocked-url-small',
        alt: 'Story',
      });
    });

    it('should return MOCK_DATA.OUR_STORY if input is empty', () => {
      const result = formatters.ourStoryFormat([]);
      expect(result).toEqual(MOCK_DATA.OUR_STORY);
    });
  });
});
