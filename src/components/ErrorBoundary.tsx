import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = 'Something went wrong.';
      try {
        const parsedError = JSON.parse(this.state.error?.message || '{}');
        if (parsedError.error) {
          errorMessage = `Firestore Error: ${parsedError.error}`;
        }
      } catch (e) {
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-secondary p-4">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Application Error</h2>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <button
              className="bg-primary text-white px-6 py-2 rounded-full font-medium"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return (this.props as Props).children;
  }
}
