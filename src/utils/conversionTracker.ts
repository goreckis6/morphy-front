// Utility to track conversion statistics
export class ConversionTracker {
  private static STORAGE_KEY = 'morphyimg_total_processed';

  // Add file size to global counter
  static addConversion(fileSizeInBytes: number) {
    if (typeof window === 'undefined') return;
    
    try {
      // Update global counter if available
      if ((window as any).addToConversionCounter) {
        (window as any).addToConversionCounter(fileSizeInBytes);
      }
      
      // Also track in session storage for current session stats
      const sessionKey = 'morphyimg_session_processed';
      const currentSession = parseFloat(sessionStorage.getItem(sessionKey) || '0');
      const newSession = currentSession + (fileSizeInBytes / (1024 * 1024 * 1024)); // Convert to GB
      sessionStorage.setItem(sessionKey, newSession.toString());
    } catch (error) {
      console.warn('Failed to track conversion:', error);
    }
  }

  // Get total data processed
  static getTotalProcessed(): number {
    if (typeof window === 'undefined') return 0;
    
    try {
      const stored = localStorage.getItem(ConversionTracker.STORAGE_KEY);
      return stored ? parseFloat(stored) : 500; // Default to 500 GB
    } catch (error) {
      return 500;
    }
  }

  // Get session data processed
  static getSessionProcessed(): number {
    if (typeof window === 'undefined') return 0;
    
    try {
      const stored = sessionStorage.getItem('morphyimg_session_processed');
      return stored ? parseFloat(stored) : 0;
    } catch (error) {
      return 0;
    }
  }

  // Format size for display
  static formatSize(gb: number): string {
    if (gb >= 1000) {
      return `${(gb / 1000).toFixed(1)} TB`;
    }
    if (gb >= 1) {
      return `${gb.toFixed(1)} GB`;
    }
    return `${(gb * 1024).toFixed(0)} MB`;
  }
}


