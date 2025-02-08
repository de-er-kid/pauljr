import * as React from "react";

export function HeroSkeleton() {
  return (
    <div className="relative h-screen w-full overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-gray-300"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <div className="h-12 bg-gray-400 rounded w-3/4 mx-auto mb-6"></div>
          <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}