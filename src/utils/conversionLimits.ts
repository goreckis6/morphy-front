// Utility to track conversion limits for anonymous users
import { API_BASE_URL } from '../services/api';

export class ConversionLimits {
  private static STORAGE_KEY = 'morphyimg_anonymous_conversions';
  private static FREE_CONVERSION_LIMIT = 5;

  // Check if user can perform a conversion
  static canConvert(): boolean {
    if (typeof window === 'undefined') return true;
    
    // If user is authenticated, they have unlimited conversions
    const token = localStorage.getItem('auth_token');
    if (token) {
      return true;
    }
    
    // Check anonymous conversion count
    try {
      const stored = localStorage.getItem(ConversionLimits.STORAGE_KEY);
      const conversionCount = stored ? parseInt(stored, 10) : 0;
      return conversionCount < ConversionLimits.FREE_CONVERSION_LIMIT;
    } catch (error) {
      console.warn('Failed to check conversion limits:', error);
      return true; // Allow conversion if we can't check
    }
  }

  // Get remaining conversions for anonymous users
  static getRemainingConversions(): number {
    if (typeof window === 'undefined') return ConversionLimits.FREE_CONVERSION_LIMIT;
    
    // If user is authenticated, they have unlimited conversions
    const token = localStorage.getItem('auth_token');
    if (token) {
      return -1; // -1 means unlimited
    }
    
    try {
      const stored = localStorage.getItem(ConversionLimits.STORAGE_KEY);
      const conversionCount = stored ? parseInt(stored, 10) : 0;
      return Math.max(0, ConversionLimits.FREE_CONVERSION_LIMIT - conversionCount);
    } catch (error) {
      console.warn('Failed to get remaining conversions:', error);
      return ConversionLimits.FREE_CONVERSION_LIMIT;
    }
  }

  // Get total conversions used by anonymous users
  static getUsedConversions(): number {
    if (typeof window === 'undefined') return 0;
    
    try {
      const stored = localStorage.getItem(ConversionLimits.STORAGE_KEY);
      return stored ? parseInt(stored, 10) : 0;
    } catch (error) {
      console.warn('Failed to get used conversions:', error);
      return 0;
    }
  }

  // Record a conversion for anonymous users
  static recordConversion(): void {
    if (typeof window === 'undefined') return;
    
    // If user is authenticated, don't track conversions
    const token = localStorage.getItem('auth_token');
    if (token) {
      return;
    }
    
    try {
      const stored = localStorage.getItem(ConversionLimits.STORAGE_KEY);
      const conversionCount = stored ? parseInt(stored, 10) : 0;
      const newCount = conversionCount + 1;
      localStorage.setItem(ConversionLimits.STORAGE_KEY, newCount.toString());
      
      console.log(`Conversion recorded. Used: ${newCount}/${ConversionLimits.FREE_CONVERSION_LIMIT}`);
    } catch (error) {
      console.warn('Failed to record conversion:', error);
    }
  }

  // Reset conversion count (for testing or if user registers)
  static resetConversions(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(ConversionLimits.STORAGE_KEY);
      console.log('Conversion count reset');
    } catch (error) {
      console.warn('Failed to reset conversions:', error);
    }
  }

  // Get limit message for display
  static getLimitMessage(): string {
    const remaining = ConversionLimits.getRemainingConversions();
    
    if (remaining === -1) {
      return ''; // No limit for authenticated users
    }
    
    if (remaining === 0) {
      return `You've used all ${ConversionLimits.FREE_CONVERSION_LIMIT} free conversions. Register for unlimited conversions!`;
    }
    
    return `${remaining} free conversions remaining`;
  }

  // Get detailed status for display
  static getStatus(): {
    canConvert: boolean;
    remaining: number;
    used: number;
    limit: number;
    isUnlimited: boolean;
    message: string;
  } {
    const remaining = ConversionLimits.getRemainingConversions();
    const used = ConversionLimits.getUsedConversions();
    const canConvert = ConversionLimits.canConvert();
    const isUnlimited = remaining === -1;
    
    return {
      canConvert,
      remaining: isUnlimited ? -1 : remaining,
      used,
      limit: ConversionLimits.FREE_CONVERSION_LIMIT,
      isUnlimited,
      message: ConversionLimits.getLimitMessage()
    };
  }

  // Get server-side conversion status (IP-based)
  static async getServerStatus(): Promise<{
    canConvert: boolean;
    remaining: number;
    used: number;
    limit: number;
    message: string;
  }> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/conversion-status`);
      if (!response.ok) {
        throw new Error('Failed to fetch conversion status');
      }
      
      const data = await response.json();
      if (data.success) {
        // Map server response to expected format
        const serverData = data.data;
        return {
          canConvert: serverData.canConvert,
          remaining: serverData.remainingConversions || 0,
          used: serverData.usedConversions || 0,
          limit: serverData.limit || 5,
          message: serverData.message || 'Conversion status unknown'
        };
      } else {
        throw new Error(data.error || 'Failed to get conversion status');
      }
    } catch (error) {
      console.warn('Failed to get server conversion status:', error);
      // If server fails, allow conversion (fail open) instead of using localStorage
      return {
        canConvert: true,
        remaining: this.FREE_CONVERSION_LIMIT,
        used: 0,
        limit: this.FREE_CONVERSION_LIMIT,
        message: `${this.FREE_CONVERSION_LIMIT} free conversions available`
      };
    }
  }

  // Check server-side conversion limits before attempting conversion
  static async checkServerLimits(): Promise<boolean> {
    try {
      const status = await ConversionLimits.getServerStatus();
      return status.canConvert;
    } catch (error) {
      console.warn('Failed to check server limits:', error);
      // If server fails, allow conversion (fail open) instead of using localStorage
      return true;
    }
  }
}
