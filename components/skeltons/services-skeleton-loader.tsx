import * as React from "react";

export function SkeletonLoader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="relative aspect-[3/4] bg-gray-200 animate-pulse rounded-lg"></div>
      ))}
    </div>
  );
}