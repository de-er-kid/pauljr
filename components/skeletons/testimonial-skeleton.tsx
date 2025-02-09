import * as React from "react";

export function TestimonialSkeleton() {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
        <div className="h-24 w-24 bg-gray-200 rounded-full"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-8">
            <div className="relative h-32 w-32 mx-auto mb-8 bg-gray-200 rounded-full"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}