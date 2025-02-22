"use client"
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { FiDownloadCloud } from 'react-icons/fi';

const WallpaperPage = ({ data }) => {
    const searchParams = useSearchParams();
    const [anime, setAnime] = useState(null);
    const [fav, setFav] = useState(true);

    useEffect(() => {
        const animeParam = searchParams.get("anime"); // Get anime data from query
        console.log(animeParam)
        if (animeParam) {
            try {
                setAnime(JSON.parse(decodeURIComponent(animeParam))); // Decode and parse JSON data
            } catch (error) {
                console.error("Error parsing anime data:", error);
            }
        }
    }, [searchParams]);

    if (!anime) return <p className="text-white text-center mt-10">Loading...</p>;
    const tags = ["anime", "my hero acedemia ", "bleach ", "naruto ", " one piece", "funny", " action ", "humar", "romance"]

    return (
        <div className="w-full h-screen  p-4 sm:p-8 flex justify-center items-start sm:items-center">
            {/* MAIN CARD CONTAINER */}
            <div className="w-full max-w-6xl sm:h-[80%] bg-white/10 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/30 flex flex-col sm:flex-row">
                {/* IMAGE SECTION */}
                <div className="relative w-full sm:w-[50%] h-64 sm:h-auto">
                    <Image
                        src={anime.previewImage.src} 
                        alt="wallpaper"
                        fill
                        className="object-cover object-center"
                        loading="lazy"
                    />
                </div>

                {/* CONTENT SECTION */}
                <div className="w-full sm:w-[50%] flex flex-col justify-between p-4 sm:p-6">
                    {/* TOP BAR */}
                    <div className="flex  sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-0">
                        <div className="flex gap-3 sm:gap-5">
                            <button className="text-gray-300 hover:text-red-500 transition-colors">
                                {fav ? (
                                    <FaHeart className="w-6 h-6 sm:w-7 sm:h-7" />
                                ) : (
                                    <FaHeartBroken className="w-6 h-6 sm:w-7 sm:h-7" />
                                )}
                            </button>
                            <button className="text-gray-300 hover:text-blue-400 transition-colors">
                                <a href={anime.previewImage.src} download={true}>
                                    <FiDownloadCloud className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>
                            </button>
                        </div>
                        <h1 className="text-lg sm:text-xl text-gray-300 font-poppins font-medium">
                            {anime.title}
                        </h1>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="flex-1  overflow-y-auto py-4 sm:py-6">
                        <p className="text-sm sm:text-base text-gray-300 font-roboto leading-relaxed">
                            {anime.desc}
                        </p>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((data, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-black/50 text-xs sm:text-sm text-gray-300 font-roboto"
                            >
                                {data}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WallpaperPage