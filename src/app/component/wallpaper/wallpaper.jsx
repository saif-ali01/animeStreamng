"use client"
import React, { useEffect, useRef, useState } from "react";
import "../../globals.css";
import WallpaperCard from "./WallpaperCard";
import animeData from "../../data/animeData";
import WallpaperCardSkeleton from "./WallpaperCardSkeleton";

const Wallpaper = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.2 } // Load when 20% visible
    );

    const elements = containerRef.current?.querySelectorAll(".wallpaper-card");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white mt-11 px-4 md:px-8">
      <div className="text-yellow-400 sm:text-3xl text-2xl uppercase font-montserrat font-bold tracking-wider ml-3 md:ml-11">
        <h1 className="mb-2 underline ">Wallpaper</h1>
      </div>

      {/* Responsive Grid Layout */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:col-end-5 mt-4 w-[90%] mx-auto" ref={containerRef}>
        {animeData.map((anime, index) => (
          <div key={index} data-index={index} className="wallpaper-card">
            {visibleCards.has(index.toString()) ? <WallpaperCard key={anime.title} data={anime} /> : <WallpaperCardSkeleton />}
          </div>


        ))}
      </div>
    </div>
  );
};

export default Wallpaper;
