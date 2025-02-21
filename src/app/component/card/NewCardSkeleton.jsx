import React from "react";

const NewCardSkeleton = () => {
  return (
    <div className="relative sm:w-48 w-36 h-52 sm:h-72 bg-gray-700 rounded-sm overflow-hidden animate-pulse mx-auto">
      {/* Image Placeholder */}
      <div className="h-full w-full bg-gray-600"></div>

      {/* Text Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 py-2 text-center">
        <div className="h-4 w-24 bg-gray-600 mx-auto rounded-md"></div>
        <div className="h-3 w-16 bg-gray-500 mx-auto rounded-md mt-1"></div>
      </div>
    </div>
  );
};

export default NewCardSkeleton;
