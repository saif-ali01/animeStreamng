"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import animeData from "../../../data/animeData";
import animeAudioData from "../../../data/animeAudioData";
import NewCard from "../../../component/card/NewCard";
import Card from "../../../component/card/Card";
import AudioCard from "../../../component/Dialog/AudioCard";
import WallpaperCard from "../../../component/wallpaper/WallpaperCard";

// Configuration object for sections
const sectionConfig = {
  audio: {
    data: animeAudioData,
    CardComponent: AudioCard,
    linkPath: "/pages/download/audio",
    gridCols: "xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1",
    skeletonCols: { xl: 4, lg: 3, sm: 2, base: 1 }, // Card count per breakpoint
  },
  video: {
    data: animeData,
    CardComponent: Card,
    linkPath: "/pages/download/video",
    gridCols: "xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
    skeletonCols: { xl: 3, lg: 2, sm: 1, base: 1 },
  },
  wallpaper: {
    data: animeData,
    CardComponent: WallpaperCard,
    linkPath: "/pages/download/wallpaper",
    gridCols: "xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 grid-cols-3",
    skeletonCols: { xl: 6, lg: 5, sm: 4, base: 3 },
  },
  Anime: {
    data: animeData,
    CardComponent: NewCard,
    linkPath: "/pages/download/anime",
    gridCols: "xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1",
    skeletonCols: { xl: 4, lg: 3, sm: 2, base: 1 },
  },
  raw: {
    data: animeData,
    CardComponent: Card,
    linkPath: "/pages/download/raw",
    gridCols: "xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
    skeletonCols: { xl: 3, lg: 2, sm: 1, base: 1 },
  },
  flowframe: {
    data: animeData,
    CardComponent: Card,
    linkPath: "/pages/download/flowframe",
    gridCols: "xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
    skeletonCols: { xl: 3, lg: 2, sm: 1, base: 1 },
  },
};

// GridSkeleton Component
const GridSkeleton = ({ gridCols, skeletonCols }) => {
  const [numCards, setNumCards] = useState(skeletonCols.base);

  useEffect(() => {
    const updateNumCards = () => {
      const width = window.innerWidth;
      if (width >= 1280) setNumCards(skeletonCols.xl); // xl
      else if (width >= 1024) setNumCards(skeletonCols.lg); // lg
      else if (width >= 640) setNumCards(skeletonCols.sm); // sm
      else setNumCards(skeletonCols.base); // base
    };

    if (typeof window !== "undefined") {
      updateNumCards();
      window.addEventListener("resize", updateNumCards);
      return () => window.removeEventListener("resize", updateNumCards);
    }
  }, [skeletonCols]);

  return (
    <div className={`mt-5 grid ${gridCols} gap-4 mx-5`}>
      {Array(numCards).fill().map((_, i) => (
        <div
          key={i}
          className="w-full h-80 bg-gray-700 animate-pulse rounded-lg"
        />
      ))}
    </div>
  );
};

// Reusable grid rendering component
const renderGrid = ({ data, CardComponent, linkPath, gridCols }) => (
  <div className={`mt-5 grid ${gridCols} gap-4 mx-5`}>
    {data.map((item) => (
      <Link
        key={item.id}
        href={{
          pathname: `${linkPath}/${item.id}`,
          query: { anime: JSON.stringify(item) },
        }}
      >
        <CardComponent data={item} />
      </Link>
    ))}
  </div>
);

const Page = () => {
  const params = useParams();
  const section = sectionConfig[params.search];
  const [isLoaded, setIsLoaded] = useState(false); // Loading state

  useEffect(() => {
    // Simulate data loading (replace with actual fetch if needed)
    const timer = setTimeout(() => setIsLoaded(true), 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white w-full flex justify-center flex-col">
      <div className="w-full mt-5">
        {section ? (
          isLoaded ? (
            renderGrid(section)
          ) : (
            <GridSkeleton gridCols={section.gridCols} skeletonCols={section.skeletonCols} />
          )
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </div>
  );
};

export default Page;