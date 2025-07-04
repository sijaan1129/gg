import React, { useEffect, useState } from 'react';
import { Shield, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const AuthCallback = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      setStatus('error');
      setMessage('Authentication failed. Please try again.');
      return;
    }

    if (code) {
      // Here you would normally send the code to your backend
      // For now, we'll simulate a successful authentication
      setTimeout(() => {
        setStatus('success');
        setMessage('Successfully authenticated! Redirecting...');
        
        // Redirect to main page after 2 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }, 1500);
    } else {
      setStatus('error');
      setMessage('No authentication code received.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">NexuSec Authentication</h1>

          <div className="flex items-center justify-center mb-4">
            {status === 'loading' && (
              <Loader className="h-8 w-8 text-blue-400 animate-spin" />
            )}
            {status === 'success' && (
              <CheckCircle className="h-8 w-8 text-green-400" />
            )}
            {status === 'error' && (
              <AlertCircle className="h-8 w-8 text-red-400" />
            )}
          </div>

          <p className="text-gray-300 mb-6">{message}</p>

          {status === 'error' && (
            <button
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Return to Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;