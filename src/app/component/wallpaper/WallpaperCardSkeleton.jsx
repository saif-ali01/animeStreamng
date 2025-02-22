import React from "react";

const WallpaperCardSkeleton = () => {
  return (
    <div className="w-52 h-72 mx-auto rounded-sm overflow-hidden transition-all duration-300 mt-10 shadow-md shadow-gray-600 animate-pulse bg-gray-800">
      {/* Image Placeholder */}
      <div className="w-full h-full bg-gray-700"></div>
     
      </div>
  );
};

export default WallpaperCardSkeleton;
