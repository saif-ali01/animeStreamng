"use client"
import React, { useEffect, useState } from 'react'
import styles from "./wallpaper.module.css"
import "../../../../globals.css";
import WallpaperPage from './page';
import animeData from '../../../../data/animeData';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const [anime, setAnime] = useState(null);
        const searchParams = useSearchParams();
        useEffect(() => {
            const animeParam = searchParams.get("anime"); // Get anime data from query
            if (animeParam) {
                try {
                    setAnime(JSON.parse(animeParam)); // Parse JSON data
                    console.log(anime)
                } catch (error) {
                    console.error("Error parsing anime data:", error);
                }
            }
        }, [searchParams]);
    return ( <h1 className='w-screen h-screen flex justify-center items-center text-4xl text-white'>{anime.title}</h1>)
}

export default Page;
