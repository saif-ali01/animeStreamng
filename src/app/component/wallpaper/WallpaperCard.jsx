"use client"
import React, { useState } from 'react';
import { FaDownload, FaHeart, FaRegHeart } from 'react-icons/fa';
import "../../globals.css";
 
const WallpaperCard = ({dummyData}) => {
  const [hovered, setHovered] = useState(false);
  const [heart, setHeart] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleHeart = () => {
    setHeart(!heart); // Toggle between true and false
  };

  return (
   
      <div
        className="relative h-96 w-64 mt-3 rounded-2xl ml-4 overflow-hidden "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={dummyData.image}
          className={`w-full h-full object-cover transition-all ${
            hovered ? 'opacity-40' : 'opacity-100'
          }`}
          alt=""
        />
        {heart ?  (
          <FaHeart
            className={`absolute ml-20 top-1/2 transform cursor-pointer -translate-x-1/2 -translate-y-1/2 font-extrabold z-50 text-4xl text-red-400 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleHeart}
          />
        ):(
          <FaRegHeart
            className={`absolute cursor-pointer ml-20 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold z-50 text-4xl text-red-400  ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleHeart}
          />
        ) }
        <FaDownload  className={`absolute ml-40 top-1/2 transform cursor-pointer -translate-x-1/2 -translate-y-1/2 font-extrabold z-50 text-4xl text-green-400 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
           
          />
            <div className="absolute bottom-0 left-0 Latotext italic  text-3xl z-50 text-black p-2 w-full glassmorphismbg from-neutral-900">
                <h1 className=' text-gray-300 font-extrabold tracking-wider'>{dummyData.title}</h1>
          
        </div>
      </div>
   
  );
};

export default WallpaperCard;
