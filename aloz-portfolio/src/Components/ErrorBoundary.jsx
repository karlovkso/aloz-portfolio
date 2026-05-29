/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio rendering error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-base-100 px-6 py-10 text-base-content">
          <div className="mx-auto max-w-2xl rounded-box bg-base-200 p-8 shadow-lg">
            <p className="text-2xl font-bold text-accent">
              Something went wrong.
            </p>
            <p className="mt-3 text-sm opacity-80">
              The portfolio page could not render. Please refresh the page or
              try again later.
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
