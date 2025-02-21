const HeaderSkeleton = () => {
    return (
      <header className="relative h-[80vh] md:h-[100vh] bg-black/70">
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-black/80 animate-pulse"></div>
  
        {/* Content Placeholder */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center pb-12 md:pb-8 sm:pb-6 relative z-20">
          <div className="max-w-2xl flex items-center sm:items-start mt-auto sm:mb-0 flex-col sm:m-10">
            {/* Title Placeholder */}
            <div className="w-40 h-10 bg-gray-700 animate-pulse rounded"></div>
  
            {/* Info Placeholder */}
            <div className="flex items-center gap-4 mt-4 mb-6">
              <div className="w-16 h-4 bg-gray-700 animate-pulse rounded"></div>
              <div className="w-24 h-4 bg-gray-700 animate-pulse rounded"></div>
            </div>
  
            {/* Description Placeholder */}
            <div className="hidden sm:block">
              <div className="w-full sm:w-[60%] h-16 bg-gray-700 animate-pulse rounded"></div>
            </div>
  
            {/* Button & Bookmark Placeholder */}
            <div className="w-full flex mt-6">
              <div className="w-64 h-12 bg-gray-700 animate-pulse rounded"></div>
              <div className="w-12 h-12 ml-5 bg-gray-700 animate-pulse rounded-lg"></div>
            </div>
          </div>
  
          {/* Region Placeholder */}
          <div className="absolute right-6 bottom-2 bg-gray-700 w-32 h-6 rounded"></div>
        </div>
      </header>
    );
  };
  
  export default HeaderSkeleton;
  