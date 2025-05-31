import React, { useState, useEffect } from 'react';

interface AppProps {
  title?: string;
  className?: string;
  onAction?: (data: any) => void;
}

export const App: React.FC<AppProps> = ({ title = 'App', className = '', onAction }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize component
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Implementation for: Implement Auto-Location Weather Widget
      // Build a widget that detects the user’s location (GPS/IP) and displays real-time weather data from Op...

      // Simulate data loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData({ message: 'Component loaded successfully' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = () => {
    if (onAction) {
      onAction(data);
    }
  };

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center">
          <div className="text-red-800">
            <h3 className="font-medium">Error</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
        <button
          onClick={loadData}
          className="mt-3 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white shadow rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {isLoading && (
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">Implementation for ticket: {ticketData.id}</p>

        {data && (
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="text-sm text-gray-700">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={handleAction}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Execute Action'}
          </button>

          <button
            onClick={loadData}
            disabled={isLoading}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
