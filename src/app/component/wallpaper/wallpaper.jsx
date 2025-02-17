"use client";
import React from "react";
import "../../globals.css";
import WallpaperCard from "./WallpaperCard";

const Wallpaper = () => {
  const dummyData = {
    image: "/m.jpg",
    title: "One Piece",
    date: "2024-02-14",
  };

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="text-white mt-11 px-4 md:px-8">
      <div className="text-yellow-400 text-3xl uppercase border-b-2 border-yellow-400 font-bold tracking-wider ml-3 md:ml-11 font-serif">
        <h1 className="mb-2">#Wallpaper</h1>
      </div>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {numbers.map((number) => (
          <WallpaperCard key={number} dummyData={dummyData} />
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;
