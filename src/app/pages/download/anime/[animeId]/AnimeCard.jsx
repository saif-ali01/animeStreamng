'use client';

import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { CiPlay1 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

function AnimeCard() {
  return (
    <div className="relative w-full h-[80vh]  bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/m.jpg"
          alt="Tower of God"
          fill
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-10 flex flex-col justify-end font-roboto h-full bg-gradient-to-r from-black/80 via-black/60 to-transparent space-y-2 md:space-y-4">
        {/* Title Section */}
        <div className="flex justify-between md:items-start ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tower of God</h1>
          
          {/* Mobile-only Audio Info */}
          <div className=" md:hidden mt-2 text-xs text-gray-400">
            <p><strong>Audio:</strong> JA, EN, DE...</p>
            <p><strong>Subs:</strong> EN, ID, DE...</p>
          </div>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-300">
          <span>14+</span>
          <span className="hidden sm:inline-block text-xs sm:text-sm underline text-gray-400">
            Action, Adventure, Drama, Fantasy, Shonen
          </span>
          <div className="flex items-center font-bold">
            <FaStar className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="ml-1 text-sm sm:text-base">4.6 (102.5K)</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 md:mt-6 flex gap-3">
          <button className="bg-blue-800 hover:bg-transparent hover:border  hover:border-blue-800 hover:text-blue-500  rounded-lg text-white px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold flex-1 sm:flex-none">
            <CiPlay1 className="w-5 h-5" />
            <span className="hidden sm:inline">Start Watching S1 E1</span>
            <span className="sm:hidden">Play E1</span>
          </button>
          <button className="border border-white rounded-lg text-white p-2 sm:px-4 sm:py-3 flex items-center justify-center">
            <FiPlus className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10 mt-4">
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 mt-3">
            Reach the top, and everything will be yours. At the top of the tower exists everything in this world, 
            and all of it can be yours. You can become a god... lorem10
          </p>

          {/* Desktop Audio & Subtitle Info */}
          <div className="hidden md:block text-sm text-gray-400">
            <p><strong>Audio:</strong> Japanese, English, Deutsch, Español...</p>
            <p className="mt-1"><strong>Subtitles:</strong> English, Bahasa Indonesia, Deutsch, Español...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;