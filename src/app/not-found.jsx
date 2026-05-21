"use client";

import React from "react";
import { Home, ArrowLeft, Phone } from "lucide-react";
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

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6 sm:space-y-8">
          {/* 404 Circle */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/10 rounded-full flex items-center justify-center border-4 border-blue-200/50 shadow-2xl backdrop-blur-sm">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text animate-pulse">404</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 poppins-bold">
            Oops! Page Not Found
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-md sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 poppins-regular">
            The page you're looking for seems to have wandered off into the digital wilderness. Don't worry, it happens to the best of us!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="default"
                size="lg"
                className="group w-full sm:w-auto min-h-[48px] sm:min-h-[44px]"
                aria-label="Go to home"
              >
                <Home className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                Take Me Home
              </Button>
            </Link>

            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto min-h-[48px] sm:min-h-[44px]"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Go Back
            </Button>
          </div>

          {/* Emergency Contact */}
          <div className="pt-4">
            <a href="tel:+919071020882">
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-300 text-blue-700 hover:border-blue-500 hover:bg-blue-100 min-h-[48px] sm:min-h-[44px]"
                aria-label="Call emergency support"
              >
                <Phone className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                Call Support: +91 9071020882
              </Button>
            </a>
          </div>

          {/* Support Link */}
          <p className="text-xs sm:text-sm text-slate-500 px-4 sm:px-0 poppins-regular">
            If you think this is a mistake, please{" "}
            <a href="mailto:care@clynicare.com" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium poppins-medium">
              contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}