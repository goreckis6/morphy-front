import { useCallback } from 'react';
import {
  submitUrl,
  submitUrls,
  submitCurrentPage,
  submitSitemap,
  IndexNowResponse,
  IndexNowOptions,
} from '../services/indexnow';

/**
 * React hook for IndexNow URL submission
 * 
 * @example
 * ```tsx
 * const { submitPage, submitPages, submitSitemapUrls } = useIndexNow();
 * 
 * // Submit current page
 * await submitPage();
 * 
 * // Submit specific URL
 * await submitPage('https://morphyhub.com/some-page');
 * 
 * // Submit multiple URLs
 * await submitPages(['https://morphyhub.com/page1', 'https://morphyhub.com/page2']);
 * ```
 */
export function useIndexNow(options: IndexNowOptions = {}) {
  /**
   * Submit a single URL or the current page
   */
  const submitPage = useCallback(
    async (url?: string): Promise<IndexNowResponse> => {
      if (url) {
        return submitUrl(url, options);
      }
      return submitCurrentPage(options);
    },
    [options]
  );

  /**
   * Submit multiple URLs
   */
  const submitPages = useCallback(
    async (urls: string[]): Promise<IndexNowResponse> => {
      return submitUrls(urls, options);
    },
    [options]
  );

  /**
   * Submit all URLs from sitemap
   */
  const submitSitemapUrls = useCallback(
    async (sitemapUrl?: string): Promise<IndexNowResponse> => {
      return submitSitemap(sitemapUrl, options);
    },
    [options]
  );

  return {
    submitPage,
    submitPages,
    submitSitemapUrls,
  };
}

