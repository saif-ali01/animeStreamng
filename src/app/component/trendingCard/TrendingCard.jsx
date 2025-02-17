import React from 'react';
import "../../globals.css";
const TrendingCard = ({ data }) => {
  return (
    <div className='cursor-pointer rounded-2xl border-white border overflow-hidden text-2xl 
                   md:rounded-xl sm:rounded-lg'>
        <div className="w-full">
            <img className='w-full h-56 object-cover md:h-48 sm:h-40' src={data.src} alt="" />
        </div>
        <div className="bottom flex text-white justify-between mt-3 mb-5 md:mt-2 md:mb-3 sm:mt-1 sm:mb-2">
            <h1 className='uppercase tracking-wider text-lg text-gray-300 ml-5 
                           md:text-base md:ml-3 sm:text-sm sm:ml-2'>{data.title}</h1>
            <h3 className='text-xs text-gray-300 mr-4 mt-1 md:text-[10px] md:mr-2 
                          sm:text-[8px] sm:mr-1'>{data.date}</h3>
        </div>
    </div>
  );
}
export default TrendingCard;