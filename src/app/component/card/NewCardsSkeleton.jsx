import React from "react";

const NewCardsSkeleton = () => {
  return (
    <div className="max-w-full mt-10 relative animate-pulse">
      <div className="bg-gray-800 w-40 h-8 rounded-md mx-11 md:mx-8 sm:mx-4"></div>

      {/* Fake Swiper Slides */}
      <div className="flex gap-5 mt-4 px-10">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-36 sm:w-48 h-52 sm:h-72 bg-gray-700 rounded-md"></div>
        ))}
      </div>
    </div>
  );
};

export default NewCardsSkeleton;
