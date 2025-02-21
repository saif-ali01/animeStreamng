import React from "react";

const WallpaperCardSkeleton = () => {
  return (
    <div className="relative max-h-48 sm:max-h-64 md:max-h-72 w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] mx-auto rounded-sm overflow-hidden transition-all duration-300 mt-10 shadow-md shadow-gray-600 animate-pulse bg-gray-800">
      {/* Image Placeholder */}
      <div className="w-full h-full bg-gray-700"></div>

      {/* Like Button Placeholder */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl bg-gray-600 w-8 h-8 rounded-full"></div>

      {/* Download Button Placeholder */}
      <div className="absolute top-1/2 right-[20%] transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl bg-gray-600 w-8 h-8 rounded-full"></div>

      {/* Title Placeholder */}
      <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-gray-700">
        <div className="h-4 w-3/4 bg-gray-600 mx-auto rounded"></div>
      </div>
    </div>
  );
};

export default WallpaperCardSkeleton;
