"use client";

import React from "react";
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
  },
  video: {
    data: animeData,
    CardComponent: Card,
    linkPath: "/pages/download/video",
    gridCols: "xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
  },
  wallpaper: {
    data: animeData,
    CardComponent: WallpaperCard,
    linkPath: "/pages/download/wallpaper",
    gridCols: "xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 grid-cols-3",
  },
  Anime: {
    data: animeData,
    CardComponent: NewCard,
    linkPath: "/pages/download/anime",
    gridCols: "xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1",
  },
  raw: {
    data: animeData,
    CardComponent: Card,
    linkPath: "/pages/download/raw",
    gridCols: "xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
  },
  flowframe: {
    data: animeData,
    CardComponent: Card,
    linkPath: "/pages/download/flowframe",
    gridCols: "xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1",
  },
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

  return (
    <div className="text-white w-full flex justify-center flex-col">
      <div className="w-full mt-5">
        {section ? renderGrid(section) : <h1>not found</h1>}
      </div>
    </div>
  );
};

export default Page;