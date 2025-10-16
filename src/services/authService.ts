import { apiService } from './api';

export interface User {
  id: number;
  email: string;
  name?: string;
  isActive: boolean;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

export interface UserStats {
  totalConversions: number;
  completedConversions: number;
  failedConversions: number;
  successRate: number;
  todayConversions: number;
  weekConversions: number;
  monthConversions: number;
  avgConversionTime: number;
  popularFormats: Array<{
    originalFormat: string;
    convertedFormat: string;
    count: number;
  }>;
}

class AuthService {
  private token: string | null = null;
  private user: User | null = null;

  constructor() {
    // Load token and user from localStorage on initialization
    this.token = localStorage.getItem('auth_token');
    this.user = this.getStoredUser();
  }

  // Store authentication data
  private storeAuth(token: string, user: User): void {
    this.token = token;
    this.user = user;
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(user));
  }

  // Clear authentication data
  private clearAuth(): void {
    this.token = null;
    this.user = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }

  // Get stored user data
  private getStoredUser(): User | null {
    try {
      const userData = localStorage.getItem('user_data');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing stored user data:', error);
      return null;
    }
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.user;
  }

  // Get current token
  getToken(): string | null {
    return this.token;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!(this.token && this.user);
  }

  // Register new user
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success && result.user && result.token) {
        this.storeAuth(result.token, result.user);
      }

      return result;
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: 'Registration failed. Please try again.'
      };
    }
  }

  // Login user
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (result.success && result.user && result.token) {
        this.storeAuth(result.token, result.user);
      }

      return result;
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'Login failed. Please try again.'
      };
    }
  }

  // Logout user
  logout(): void {
    this.clearAuth();
  }

  // Verify token and get user data
  async verifyToken(): Promise<AuthResponse> {
    if (!this.token) {
      return {
        success: false,
        error: 'No token found'
      };
    }

    try {
      const response = await fetch('/api/auth/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: this.token }),
      });

      const result = await response.json();

      if (result.success && result.user) {
        this.user = result.user;
        localStorage.setItem('user_data', JSON.stringify(result.user));
        return result;
      } else {
        this.clearAuth();
        return {
          success: false,
          error: 'Token verification failed'
        };
      }
    } catch (error) {
      console.error('Token verification error:', error);
      this.clearAuth();
      return {
        success: false,
        error: 'Token verification failed'
      };
    }
  }

  // Get current user profile
  async getProfile(): Promise<AuthResponse> {
    if (!this.token) {
      return {
        success: false,
        error: 'Not authenticated'
      };
    }

    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });

      const result = await response.json();

      if (result.success && result.user) {
        this.user = result.user;
        localStorage.setItem('user_data', JSON.stringify(result.user));
      }

      return result;
    } catch (error) {
      console.error('Get profile error:', error);
      return {
        success: false,
        error: 'Failed to get user profile'
      };
    }
  }

  // Update user profile
  async updateProfile(updates: { name?: string; email?: string }): Promise<AuthResponse> {
    if (!this.token) {
      return {
        success: false,
        error: 'Not authenticated'
      };
    }

    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        },
        body: JSON.stringify(updates),
      });

      const result = await response.json();

      if (result.success && result.user) {
        this.user = result.user;
        localStorage.setItem('user_data', JSON.stringify(result.user));
      }

      return result;
    } catch (error) {
      console.error('Update profile error:', error);
      return {
        success: false,
        error: 'Profile update failed'
      };
    }
  }

  // Change password
  async changePassword(currentPassword: string, newPassword: string): Promise<AuthResponse> {
    if (!this.token) {
      return {
        success: false,
        error: 'Not authenticated'
      };
    }

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Change password error:', error);
      return {
        success: false,
        error: 'Password change failed'
      };
    }
  }

  // Get user statistics
  async getUserStats(): Promise<{ success: boolean; stats?: any; recentConversions?: any; error?: string }> {
    if (!this.token) {
      return {
        success: false,
        error: 'Not authenticated'
      };
    }

    try {
      const response = await fetch('/api/auth/stats', {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Get user stats error:', error);
      return {
        success: false,
        error: 'Failed to get user statistics'
      };
    }
  }

  // Get authorization header for API requests
  getAuthHeader(): { Authorization: string } | {} {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }
}

export const authService = new AuthService();
