import * as React from "react";

export function GallerySkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div 
            key={i}
            className="h-10 w-24 bg-gray-200 rounded-full"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i}
            className="aspect-square bg-gray-200 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}