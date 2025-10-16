import React, { useState, useEffect } from 'react';
import { AlertCircle, Crown, UserPlus, RefreshCw } from 'lucide-react';
import { ConversionLimits } from '../utils/conversionLimits';
import { useAuth } from '../contexts/AuthContext';

interface ConversionLimitBannerProps {
  onRegisterClick?: () => void;
  className?: string;
}

export const ConversionLimitBanner: React.FC<ConversionLimitBannerProps> = ({ 
  onRegisterClick,
  className = '' 
}) => {
  const { user } = useAuth();
  const [status, setStatus] = useState(ConversionLimits.getStatus());
  const [loading, setLoading] = useState(false);

  // Fetch server-side status on component mount
  useEffect(() => {
    const fetchServerStatus = async () => {
      if (!user) {
        setLoading(true);
        try {
          const serverStatus = await ConversionLimits.getServerStatus();
          setStatus(serverStatus);
        } catch (error) {
          console.warn('Failed to fetch server status, using local status');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchServerStatus();
  }, [user]);

  // Don't show banner for authenticated users
  if (user || status.isUnlimited) {
    return null;
  }

  const refreshStatus = async () => {
    if (!user) {
      setLoading(true);
      try {
        const serverStatus = await ConversionLimits.getServerStatus();
        setStatus(serverStatus);
      } catch (error) {
        console.warn('Failed to refresh server status');
      } finally {
        setLoading(false);
      }
    }
  };

  // Don't show banner if user can still convert
  if (status.canConvert && status.remaining > 0) {
    return (
      <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-blue-800">
                {loading ? 'Checking limits...' : `Free Conversion: ${status.remaining} remaining`}
              </p>
              <p className="text-xs text-blue-600">
                You've used {status.used} of {status.limit} free conversions
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={refreshStatus}
              disabled={loading}
              className="p-1.5 text-blue-600 hover:text-blue-700 disabled:opacity-50"
              title="Refresh status"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onRegisterClick}
              className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show limit reached banner
  return (
    <div className={`bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-orange-600" />
          <div>
            <p className="text-sm font-medium text-orange-800">
              {loading ? 'Checking limits...' : 'Free conversion limit reached'}
            </p>
            <p className="text-xs text-orange-600">
              You've used all {status.limit} free conversions. Register for unlimited access!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={refreshStatus}
            disabled={loading}
            className="p-1.5 text-orange-600 hover:text-orange-700 disabled:opacity-50"
            title="Refresh status"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={onRegisterClick}
            className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
          >
            <Crown className="w-4 h-4" />
            <span>Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversionLimitBanner;
