import React from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";

const NewCard = ({ data }) => {
  if (!data) return null; // Avoid errors if data is missing

  return (
    <div className="relative group sm:w-48 w-36 h-52 sm:h-72 bg-gray-800 rounded-sm overflow-hidden hover:shadow-none shadow-gray-600 mx-auto shadow-sm">
      {/* Anime Image */}
      <div className="h-full overflow-hidden w-full">
        <Image
          src={data.previewImage}
          alt={data.title || "Anime"}
          fill
          className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Anime Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center  py-2">
        <h1 className="sm:text-base text-sm text-white">{data.title}</h1>
        <h2 className="sm:text-sm text-xs text-gray-300">{data.type}</h2>
      </div>

      {/* Play Button - Visible on Hover */}
      <div className="absolute inset-0 flex items-center justify-center  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="sm:w-16 w-10 sm:h-16 h-10   bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300">
          <FiPlay className="text-white sm:w-10 w-5 sm:h-10 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NewCard;
