import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
