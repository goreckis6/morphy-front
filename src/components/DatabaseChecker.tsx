import React, { useState, useEffect } from 'react';
import { Database, AlertCircle, CheckCircle, Clock, Users, FileText, Activity, RefreshCw, Eye, EyeOff } from 'lucide-react';

interface DatabaseInfo {
  host: string;
  port: string;
  database: string;
  user: string;
  ssl: boolean;
  connectionTime: string;
}

interface DatabaseStats {
  users: number;
  conversions: number;
  totalTables: number;
}

interface RecentError {
  id: number;
  originalFilename: string;
  errorMessage: string;
  updatedAt: string;
}

interface DatabaseStatus {
  status: 'connected' | 'disconnected' | 'loading';
  timestamp: string;
  database: DatabaseInfo;
  tables: string[];
  stats: DatabaseStats;
  recentErrors: RecentError[];
  environment: {
    nodeEnv: string;
    port: string;
  };
  error?: {
    message: string;
    code: string;
    detail: string;
  };
}

const DatabaseChecker: React.FC = () => {
  const [dbStatus, setDbStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSensitiveInfo, setShowSensitiveInfo] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkDatabase = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/dbchecker');
      const data = await response.json();
      
      if (response.ok) {
        setDbStatus(data);
      } else {
        setDbStatus(data);
      }
      
      setLastChecked(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check database status');
      setDbStatus(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkDatabase();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(checkDatabase, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusIcon = () => {
    if (loading) return <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />;
    if (dbStatus?.status === 'connected') return <CheckCircle className="w-6 h-6 text-green-500" />;
    return <AlertCircle className="w-6 h-6 text-red-500" />;
  };

  const getStatusColor = () => {
    if (loading) return 'text-blue-600';
    if (dbStatus?.status === 'connected') return 'text-green-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Database Status Checker</h1>
                <p className="text-gray-600">Monitor your OVH PostgreSQL database connection</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={checkDatabase}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
          
          {lastChecked && (
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Last checked: {lastChecked.toLocaleString()}
            </div>
          )}
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Connection Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Connection Status</p>
                <p className={`text-2xl font-bold ${getStatusColor()}`}>
                  {loading ? 'Checking...' : dbStatus?.status || 'Unknown'}
                </p>
              </div>
              {getStatusIcon()}
            </div>
          </div>

          {/* Users Count */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dbStatus?.stats?.users || 0}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          {/* Conversions Count */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Conversions</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dbStatus?.stats?.conversions || 0}
                </p>
              </div>
              <FileText className="w-8 h-8 text-green-500" />
            </div>
          </div>

          {/* Tables Count */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Database Tables</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dbStatus?.stats?.totalTables || 0}
                </p>
              </div>
              <Activity className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Database Configuration */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Database Configuration</h2>
            <button
              onClick={() => setShowSensitiveInfo(!showSensitiveInfo)}
              className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              {showSensitiveInfo ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showSensitiveInfo ? 'Hide' : 'Show'} Details</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Host</label>
              <p className="text-lg text-gray-900">
                {showSensitiveInfo ? dbStatus?.database.host : '••••••••••••••••'}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Port</label>
              <p className="text-lg text-gray-900">
                {showSensitiveInfo ? dbStatus?.database.port : '••••'}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Database</label>
              <p className="text-lg text-gray-900">
                {showSensitiveInfo ? dbStatus?.database.database : '••••••'}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">User</label>
              <p className="text-lg text-gray-900">
                {showSensitiveInfo ? dbStatus?.database.user : '••••••'}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">SSL</label>
              <p className="text-lg text-gray-900">
                {dbStatus?.database.ssl ? (
                  <span className="text-green-600 font-semibold">Enabled</span>
                ) : (
                  <span className="text-red-600 font-semibold">Disabled</span>
                )}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Connection Time</label>
              <p className="text-lg text-gray-900">{dbStatus?.database.connectionTime || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Error Information */}
        {dbStatus?.status === 'disconnected' && dbStatus?.error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Database Connection Error</h3>
            </div>
            <div className="space-y-2">
              <div>
                <span className="font-medium text-red-700">Message:</span>
                <p className="text-red-600">{dbStatus.error.message}</p>
              </div>
              {dbStatus.error.code && (
                <div>
                  <span className="font-medium text-red-700">Code:</span>
                  <p className="text-red-600">{dbStatus.error.code}</p>
                </div>
              )}
              {dbStatus.error.detail && (
                <div>
                  <span className="font-medium text-red-700">Detail:</span>
                  <p className="text-red-600">{dbStatus.error.detail}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recent Errors */}
        {dbStatus?.recentErrors && dbStatus.recentErrors.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Conversion Errors</h2>
            <div className="space-y-3">
              {dbStatus.recentErrors.map((error) => (
                <div key={error.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{error.originalFilename}</span>
                    <span className="text-sm text-gray-500">{formatTimestamp(error.updatedAt)}</span>
                  </div>
                  <p className="text-red-600 text-sm">{error.errorMessage}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Database Tables */}
        {dbStatus?.tables && dbStatus.tables.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Database Tables</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {dbStatus.tables.map((table) => (
                <div key={table} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-700">{table}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Environment Info */}
        {dbStatus && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Environment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">Node Environment:</span>
                <span className="ml-2 text-gray-900">{dbStatus.environment.nodeEnv}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Port:</span>
                <span className="ml-2 text-gray-900">{dbStatus.environment.port}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Last Check:</span>
                <span className="ml-2 text-gray-900">{formatTimestamp(dbStatus.timestamp)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseChecker;
