import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService, User, AuthResponse } from '../services/authService';
import { ConversionLimits } from '../utils/conversionLimits';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signUp: (email: string, password: string, name?: string) => Promise<AuthResponse>;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => void;
  updateProfile: (updates: { name?: string; email?: string }) => Promise<AuthResponse>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<AuthResponse>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication
    const initializeAuth = async () => {
      try {
        const currentUser = authService.getCurrentUser();
        const token = authService.getToken();
        
        if (currentUser && token) {
          // Verify token is still valid
          const result = await authService.verifyToken();
          if (result.success && result.user) {
            setUser(result.user);
          } else {
            // Token is invalid, clear auth
            authService.logout();
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const signUp = async (email: string, password: string, name?: string) => {
    setLoading(true);
    try {
      const result = await authService.register({ email, password, name });
      if (result.success && result.user) {
        setUser(result.user);
        // Reset conversion limits for newly registered users
        ConversionLimits.resetConversions();
      }
      return result;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const result = await authService.login({ email, password });
      if (result.success && result.user) {
        setUser(result.user);
        // Reset conversion limits for logged-in users
        ConversionLimits.resetConversions();
      }
      return result;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    authService.logout();
    setUser(null);
    // Redirect to main site after logout
    window.location.href = '/';
  };

  const updateProfile = async (updates: { name?: string; email?: string }) => {
    setLoading(true);
    try {
      const result = await authService.updateProfile(updates);
      if (result.success && result.user) {
        setUser(result.user);
      }
      return result;
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    setLoading(true);
    try {
      const result = await authService.changePassword(currentPassword, newPassword);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    signUp,
    signIn,
    signOut,
    updateProfile,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};