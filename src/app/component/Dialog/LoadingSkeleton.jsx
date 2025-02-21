const LoadingSkeleton = () => (
    <div className="animate-pulse bg-white/20 rounded-md w-full h-16 flex items-center p-2 glass">
      {/* Image Placeholder */}
      <div className="w-12 h-10 bg-gray-700 rounded-lg"></div>

      {/* Text Placeholder */}
      <div className="ml-3 flex flex-col space-y-1 w-full">
        <div className="w-28 h-3 bg-gray-700 rounded"></div>
        <div className="w-20 h-2 bg-gray-700 rounded"></div>
      </div>

      {/* Button Placeholder */}
      <div className="w-8 h-8 bg-gray-700 rounded-xl"></div>
    </div>
);

export default LoadingSkeleton;
