"use client";
import React, { useState } from "react";
import { FaDownload, FaHeart, FaRegHeart } from "react-icons/fa";
import "../../globals.css";

const WallpaperCard = ({ dummyData }) => {
  const [hovered, setHovered] = useState(false);
  const [heart, setHeart] = useState(false);

  return (
    <div
      className="relative h-48 sm:h-64 md:h-72 w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] mx-auto rounded-xl overflow-hidden shadow-lg transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={dummyData.image}
        className={`w-full h-full object-cover transition-all duration-300 ${
          hovered ? "opacity-40 scale-105" : "opacity-100 scale-100"
        }`}
        alt={dummyData.title}
      />

      {/* Like Button */}
      <div
        className={`absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl cursor-pointer transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setHeart(!heart)}
      >
        {heart ? (
          <FaHeart className="text-red-500 drop-shadow-lg" />
        ) : (
          <FaRegHeart className="text-red-500 drop-shadow-lg" />
        )}
      </div>

      {/* Download Button */}
      <div
        className={`absolute top-1/2 right-[20%] transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl cursor-pointer transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaDownload className="text-blue-300 drop-shadow-lg " />
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-black bg-opacity-50">
        <h1 className="text-gray-300 font-extrabold text-sm sm:text-base">
          {dummyData.title}
        </h1>
      </div>
    </div>
  );
};

export default WallpaperCard;
