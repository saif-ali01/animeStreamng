"use client";

import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";

function EpisodeCard({ thumbnail, animeTitle, title, duration, type }) {
  return (
    <div className="relative w-full bg-black text-white rounded-lg overflow-hidden shadow-lg">
      {/* Thumbnail */}
      <div className="relative h-[200px]">
        <Image
          src={thumbnail}
          alt={`${title} Thumbnail`}
          width={250}
          height={220}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <CiPlay1 className="text-white w-10 h-10" />
        </div>
        <div className="absolute bottom-1 right-1 bg-black/70 px-2 py-1 text-xs rounded">
          {duration}
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-xs text-gray-400 truncate">{animeTitle}</p>
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-sm text-gray-400 mt-1">{type}</p>
      </div>
    </div>
  );
}

export default EpisodeCard;