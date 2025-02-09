import * as React from "react";

export function FAQSkeleton() {
  return (
    <div className="animate-pulse max_w_3xl mx-auto">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="border rounded-lg mb-4 p-3 bg-gray-200">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
}