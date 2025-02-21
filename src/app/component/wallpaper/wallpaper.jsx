import React from "react";
import "../../globals.css";
import WallpaperCard from "./WallpaperCard";
import animeData from "../../data/animeData";

const Wallpaper = () => {
  return (
    <div className="text-white mt-11 px-4 md:px-8">
      <div className="text-yellow-400 sm:text-3xl text-2xl uppercase font-montserrat font-bold tracking-wider ml-3 md:ml-11">
        <h1 className="mb-2 underline ">Wallpaper</h1>
      </div>

      {/* Responsive Grid Layout */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:col-end-5 mt-4 w-[90%] mx-auto">
        {animeData.map((anime) => (
          <WallpaperCard key={anime.title} data={anime} />
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;
