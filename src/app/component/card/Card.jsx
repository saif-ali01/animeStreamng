"use client";

import React, { useState, useEffect } from "react";
import "../../globals.css";
import Image from "next/image";

const Card = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate data readiness with a 1-second delay
    const timer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden md:mx-2 sm:mx-1 w-full mb-4 hover:transform hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full rounded-2xl overflow-hidden bg-slate-400 relative aspect-video md:aspect-[3/2] sm:aspect-square">
        {isReady && (
          <Image
            fill
            src={data.previewImage}
            alt={data.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        )}
      </div>
      <div className="p-4 md:p-3 sm:p-2">
        {isReady && (
          <div className="transition-opacity duration-300" style={{ opacity: imageLoaded ? 1 : 0 }}>
            <div className="desc whitespace-pre-line line-clamp-2 md:line-clamp-3 sm:line-clamp-2">
              <p className="text-gray-500 Latotext leading-tight text-base md:text-sm sm:text-xs tracking-wider">
                {data.desc}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 mt-3 md:mt-2">
              <h1 className="text-yellow-400 text-lg md:text-base sm:text-sm uppercase cardNameText truncate">
                {data.title}
              </h1>
              <h1 className="font-extrabold text-black text-shadow rounded-lg text-sm md:text-xs sm:text-[10px] uppercase bg-red-700 px-2 py-1 cardNameText">
                {data.type}
              </h1>
            </div>
            <h2 className="text-end text-gray-500 Latotext tracking-wider mt-2 md:mt-1 text-sm md:text-xs sm:text-[10px]">
              {data.date} <span className="hidden sm:inline">/badxboy350</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Card);