"use client";

import React, { useEffect } from "react";
import { Home, ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";
import Link from "next/link";

// Inlined Button component
const Button = React.forwardRef(({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

  const variantClasses = {
    default: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
    outline: "border-2 border-blue-500 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-600",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    lg: "h-12 px-8 rounded-2xl text-base",
    icon: "h-10 w-10",
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClassName} ref={ref} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6 sm:space-y-8">
          {/* Error Icon */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-full flex items-center justify-center border-4 border-red-200/50 shadow-2xl backdrop-blur-sm">
              <AlertTriangle className="w-24 h-24 sm:w-32 sm:h-32 text-red-500 animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 poppins-bold">
            Something went wrong!
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-md sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 poppins-regular">
            We encountered an unexpected error. Our team has been notified and is working to fix it.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              onClick={() => reset()}
              variant="default"
              size="lg"
              className="group w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 min-h-[48px] sm:min-h-[44px]"
              aria-label="Try again"
            >
              <RefreshCw className="w-5 h-5 transition-transform duration-200 group-hover:rotate-180" />
              Try Again
            </Button>

            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600 min-h-[48px] sm:min-h-[44px]"
                aria-label="Go to home"
              >
                <Home className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                Go Home
              </Button>
            </Link>
          </div>

          {/* Support Link */}
          <p className="text-xs sm:text-sm text-slate-500 px-4 sm:px-0 poppins-regular">
            If the problem persists, please{" "}
            <a href="mailto:care@clynicare.com" className="text-red-600 hover:text-red-700 hover:underline transition-colors duration-200 font-medium poppins-medium">
              contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}