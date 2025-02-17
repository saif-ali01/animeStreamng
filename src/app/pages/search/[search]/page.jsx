'use client'
import React from 'react'
import Search from "../../../component/search/search"
import { useParams, usePathname, useRouter } from 'next/navigation';
import AudioCard from '../../../component/Dialog/AudioCard';
import Card from '../../../component/card/Card';
import WallpaperCard from '../../../component/wallpaper/WallpaperCard';
import TrendingCard from '../../../component/trendingCard/TrendingCard';
import Link from 'next/link';

const Page = () => {
    const slide = {
        title: "jujutsu kaisen",
        date: "2024-02-09",
        src: "https://www.enjpg.com/img/2020/jujutsu-kaisen-18.jpg",
    }
    const wallpaperData = {
        image: '/m.jpg',
        title: 'one piece',
        date: '2024-02-14',
    }
    const rawData = {
        previewImage: '/m.jpg',
        videoSource: '/one.mp4',
        title: 'one piece',
        date: '2024-02-14',
        type: 'raw',
        desc: "One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature..."
    }
    const flowFrameData = {
        previewImage: '/m.jpg',
        videoSource: '/one.mp4',
        title: 'one piece',
        date: '2024-02-14',
        type: 'flow Frames',
        desc: "One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature..."
    }
    const videoData = {
        previewImage: '/m.jpg',
        videoSource: '/one.mp4',
        title: 'one piece',
        date: '2024-02-14',
        type: 'twistor',
        desc: "One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature..."
    }
    const dummyData = {
        previewImage: '/m.jpg',
        audioSource: '/audio.mp',
        title: 'Luffy Dialouge',
        desc: "if I give up now Im going to regret it"
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30];
    const params = useParams();
    const router = useRouter();
    const path = usePathname();

    return (
        <div className={`text-white sm:w-[full] w-full  flex justify-center flex-col`}>
            <Search />
            <div className={`w-full mt-5`}>
                {
                    params.search === "audio" ? <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/audio/111"}>
                                <AudioCard data={dummyData} />
                            </Link>
                        ))}
                    </div>
                    : params.search === "video" ? <div className="mt-3 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/video/111"}>
                                <Card dummyData={videoData} />
                            </Link>
                        ))}
                    </div>
                    : params.search === "wallpaper" ? <div className="mt-3 grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-3 sm:grid-cols-4 gap-4">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/wallpaper/111"}>
                                <WallpaperCard dummyData={wallpaperData} />
                            </Link>
                        ))}
                    </div>
                    : params.search === "category" ? <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-5">
                        {numbers.map((number) => (
                            <TrendingCard key={number} data={slide} />
                        ))}
                    </div>
                    : params.search === "raw" ? <div className="mt-3 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4 mx-6 ">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/video/111"}>
                                <Card dummyData={rawData} />
                            </Link>
                        ))}
                    </div>
                    : params.search === "flowframe" ? <div className="mt-3 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/video/111"}>
                                <Card dummyData={flowFrameData} />
                            </Link>
                        ))}
                    </div>
                    : <h1>not found</h1>
                }
            </div>
        </div>
    )
}

export default Page
