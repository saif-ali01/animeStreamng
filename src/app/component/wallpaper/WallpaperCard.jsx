"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaDownload, FaHeart, FaRegHeart } from "react-icons/fa";
import "../../globals.css";

const WallpaperCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const [heart, setHeart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it's loaded
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative max-h-48 sm:max-h-64 md:max-h-72 w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] mx-auto rounded-sm overflow-hidden transition-all duration-300 mt-10 shadow-md shadow-gray-600"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Skeleton Placeholder */}
      {loading && <div className="absolute inset-0 bg-black/40 h-full w-full animate-pulse"></div>}

      {/* Image (Loads only when in viewport) */}
      <div className="relative w-full h-full">
        {isVisible && (
          <Image
            src={data.previewImage.src}
            alt={data.title}
            width={222}
            height={333}
            objectFit="cover"
            className={`transition-all duration-300 ${
              hovered ? "opacity-40 scale-105" : "opacity-100 scale-100"
            }`}
            onLoad={() => setLoading(false)}
          />
        )}
      </div>

      {/* Like Button */}
      <div
        className={`absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl cursor-pointer transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setHeart(!heart)}
      >
        {heart ? <FaHeart className="text-red-500 drop-shadow-lg" /> : <FaRegHeart className="text-red-500 drop-shadow-lg" />}
      </div>

      {/* Download Button */}
      <div
        className={`absolute top-1/2 right-[20%] transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl cursor-pointer transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaDownload className="text-blue-300 drop-shadow-lg" />
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-black bg-opacity-50">
        <h1 className="text-gray-300 font-extrabold text-sm sm:text-base">{data.title}</h1>
      </div>
    </div>
  );
};

export default WallpaperCard;
