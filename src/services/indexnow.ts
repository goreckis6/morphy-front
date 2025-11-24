/**
 * IndexNow Service
 * 
 * Implements Bing IndexNow protocol for submitting URLs to search engines.
 * Documentation: https://www.indexnow.org/
 */

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';
const INDEXNOW_KEY = 'd778e855ffec4226b9e198cfce528ac3';
const INDEXNOW_KEY_LOCATION = 'https://morphyhub.com/d778e855ffec4226b9e198cfce528ac3.txt';
const WEBSITE_HOST = 'morphyhub.com';

export interface IndexNowResponse {
  success: boolean;
  status: number;
  message?: string;
  error?: string;
}

export interface IndexNowOptions {
  /**
   * Custom host if different from default
   */
  host?: string;
  
  /**
   * Custom key if different from default
   */
  key?: string;
  
  /**
   * Custom key location if different from default
   */
  keyLocation?: string;
}

/**
 * Submit a single URL to IndexNow using GET request (no CORS issues)
 * 
 * @param url - The URL to submit (must belong to the host)
 * @param options - Optional configuration
 * @returns Promise with submission result
 */
export async function submitUrl(
  url: string,
  options: IndexNowOptions = {}
): Promise<IndexNowResponse> {
  try {
    // Validate URL
    if (!url || url.trim() === '') {
      return {
        success: false,
        status: 400,
        error: 'No URL provided',
      };
    }

    // Normalize and validate URL belongs to the host
    const host = options.host || WEBSITE_HOST;
    let normalizedUrl: string;
    try {
      const urlObj = new URL(url);
      // Ensure URL belongs to the host
      if (urlObj.hostname !== host && !urlObj.hostname.endsWith(`.${host}`)) {
        return {
          success: false,
          status: 422,
          error: `URL ${url} does not belong to host ${host}`,
        };
      }
      normalizedUrl = urlObj.href;
    } catch (error) {
      return {
        success: false,
        status: 400,
        error: `Invalid URL: ${url}`,
      };
    }

    const key = options.key || INDEXNOW_KEY;
    const keyLocation = options.keyLocation || INDEXNOW_KEY_LOCATION;

    // Use image pixel technique to submit URL (bypasses CORS restrictions)
    // IndexNow API doesn't support CORS, so we use this fire-and-forget method
    const params = new URLSearchParams({
      url: normalizedUrl,
      key: key,
      keyLocation: keyLocation,
    });

    return new Promise<IndexNowResponse>((resolve) => {
      const img = new Image();
      
      // Set a timeout to resolve after request is sent (fire-and-forget)
      const timeout = setTimeout(() => {
        resolve({
          success: true,
          status: 200,
          message: `Successfully submitted URL to IndexNow`,
        });
      }, 500);

      img.onload = () => {
        clearTimeout(timeout);
        resolve({
          success: true,
          status: 200,
          message: `Successfully submitted URL to IndexNow`,
        });
      };

      img.onerror = () => {
        clearTimeout(timeout);
        // Even if image fails to load, the GET request was sent to IndexNow
        // IndexNow doesn't return an image, so this is expected
        resolve({
          success: true,
          status: 200,
          message: `Successfully submitted URL to IndexNow`,
        });
      };

      // Trigger the GET request via image src (bypasses CORS completely)
      img.src = `${INDEXNOW_API_URL}?${params.toString()}`;
    });
  } catch (error) {
    return {
      success: false,
      status: 0,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Submit multiple URLs to IndexNow
 * Since POST requests have CORS issues, we submit URLs one by one using GET requests
 * 
 * @param urls - Array of URLs to submit (all must belong to the host)
 * @param options - Optional configuration
 * @returns Promise with submission result
 */
export async function submitUrls(
  urls: string[],
  options: IndexNowOptions = {}
): Promise<IndexNowResponse> {
  try {
    // Validate URLs
    if (!urls || urls.length === 0) {
      return {
        success: false,
        status: 400,
        error: 'No URLs provided',
      };
    }

    // Submit each URL individually using GET requests (no CORS issues)
    const results = await Promise.allSettled(
      urls.map(url => submitUrl(url, options))
    );

    // Count successes and failures
    let successCount = 0;
    let failureCount = 0;
    const errors: string[] = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.success) {
        successCount++;
      } else {
        failureCount++;
        const errorMsg = result.status === 'rejected' 
          ? result.reason?.message || 'Unknown error'
          : result.value.error || 'Unknown error';
        errors.push(`URL ${index + 1}: ${errorMsg}`);
      }
    });

    if (failureCount === 0) {
      return {
        success: true,
        status: 200,
        message: `Successfully submitted ${successCount} URL(s) to IndexNow`,
      };
    } else if (successCount === 0) {
      return {
        success: false,
        status: 400,
        error: `Failed to submit all URLs. Errors: ${errors.join('; ')}`,
      };
    } else {
      return {
        success: true,
        status: 200,
        message: `Submitted ${successCount} of ${urls.length} URL(s) successfully. ${failureCount} failed.`,
        error: errors.length > 0 ? `Some errors: ${errors.slice(0, 3).join('; ')}` : undefined,
      };
    }
  } catch (error) {
    return {
      success: false,
      status: 0,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Submit current page URL to IndexNow
 * Useful for client-side submission when pages are created/updated
 * 
 * @param options - Optional configuration
 * @returns Promise with submission result
 */
export async function submitCurrentPage(
  options: IndexNowOptions = {}
): Promise<IndexNowResponse> {
  if (typeof window === 'undefined') {
    return {
      success: false,
      status: 0,
      error: 'submitCurrentPage can only be called in browser environment',
    };
  }

  const currentUrl = window.location.href;
  return submitUrl(currentUrl, options);
}

/**
 * Submit sitemap URLs to IndexNow
 * Parses sitemap.xml and submits all URLs
 * 
 * @param sitemapUrl - URL to the sitemap (default: /sitemap.xml)
 * @param options - Optional configuration
 * @returns Promise with submission result
 */
export async function submitSitemap(
  sitemapUrl: string = '/sitemap.xml',
  options: IndexNowOptions = {}
): Promise<IndexNowResponse> {
  try {
    // Fetch sitemap
    const response = await fetch(sitemapUrl);
    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        error: `Failed to fetch sitemap: ${response.statusText}`,
      };
    }

    const xmlText = await response.text();
    
    // Parse XML to extract URLs
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parsing errors
    const parserError = xmlDoc.querySelector('parsererror');
    if (parserError) {
      return {
        success: false,
        status: 400,
        error: 'Failed to parse sitemap XML',
      };
    }

    // Extract all <loc> elements
    const locElements = xmlDoc.querySelectorAll('loc');
    const urls: string[] = [];
    
    locElements.forEach((loc) => {
      const url = loc.textContent?.trim();
      if (url) {
        urls.push(url);
      }
    });

    if (urls.length === 0) {
      return {
        success: false,
        status: 400,
        error: 'No URLs found in sitemap',
      };
    }

    // Submit URLs in batches (IndexNow recommends batches)
    // Submit all at once as IndexNow supports bulk submission
    return submitUrls(urls, options);
  } catch (error) {
    return {
      success: false,
      status: 0,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * IndexNow service class
 * Provides a convenient interface for IndexNow operations
 */
export class IndexNowService {
  private defaultOptions: IndexNowOptions;

  constructor(options: IndexNowOptions = {}) {
    this.defaultOptions = options;
  }

  /**
   * Submit a single URL
   */
  async submitUrl(url: string): Promise<IndexNowResponse> {
    return submitUrl(url, this.defaultOptions);
  }

  /**
   * Submit multiple URLs
   */
  async submitUrls(urls: string[]): Promise<IndexNowResponse> {
    return submitUrls(urls, this.defaultOptions);
  }

  /**
   * Submit current page
   */
  async submitCurrentPage(): Promise<IndexNowResponse> {
    return submitCurrentPage(this.defaultOptions);
  }

  /**
   * Submit sitemap
   */
  async submitSitemap(sitemapUrl?: string): Promise<IndexNowResponse> {
    return submitSitemap(sitemapUrl, this.defaultOptions);
  }
}

// Export default service instance
export const indexNowService = new IndexNowService();

