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
 * Submit a single URL to IndexNow
 * 
 * @param url - The URL to submit (must belong to the host)
 * @param options - Optional configuration
 * @returns Promise with submission result
 */
export async function submitUrl(
  url: string,
  options: IndexNowOptions = {}
): Promise<IndexNowResponse> {
  return submitUrls([url], options);
}

/**
 * Submit multiple URLs to IndexNow
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

    // Normalize URLs and validate they belong to the host
    const host = options.host || WEBSITE_HOST;
    const normalizedUrls = urls.map((url) => {
      try {
        const urlObj = new URL(url);
        // Ensure URL belongs to the host
        if (urlObj.hostname !== host && !urlObj.hostname.endsWith(`.${host}`)) {
          throw new Error(`URL ${url} does not belong to host ${host}`);
        }
        return urlObj.href;
      } catch (error) {
        throw new Error(`Invalid URL: ${url}`);
      }
    });

    // Prepare request payload
    const payload = {
      host: host,
      key: options.key || INDEXNOW_KEY,
      keyLocation: options.keyLocation || INDEXNOW_KEY_LOCATION,
      urlList: normalizedUrls,
    };

    // Submit to IndexNow API
    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    // Handle response
    if (response.status === 200) {
      return {
        success: true,
        status: 200,
        message: `Successfully submitted ${normalizedUrls.length} URL(s) to IndexNow`,
      };
    } else if (response.status === 400) {
      return {
        success: false,
        status: 400,
        error: 'Bad request: Invalid format',
      };
    } else if (response.status === 403) {
      return {
        success: false,
        status: 403,
        error: 'Forbidden: Key not valid (key not found or file found but key not in the file)',
      };
    } else if (response.status === 422) {
      return {
        success: false,
        status: 422,
        error: 'Unprocessable Entity: URLs do not belong to the host or key does not match the schema',
      };
    } else if (response.status === 429) {
      return {
        success: false,
        status: 429,
        error: 'Too Many Requests: Potential spam detected',
      };
    } else {
      const errorText = await response.text().catch(() => 'Unknown error');
      return {
        success: false,
        status: response.status,
        error: `HTTP ${response.status}: ${errorText}`,
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

