'use client'
import React from 'react'
import Search from "../../component/search/search"
import { useParams, usePathname, useRouter } from 'next/navigation';
import AudioCard from '../../component/Dialog/AudioCard';
import Card from '../../component/card/Card';
import WallpaperCard from '../../component/wallpaper/WallpaperCard';
import TrendingCard from '../../component/trendingCard/TrendingCard';
import Link from 'next/link';
import "../../globals.css"

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
        desc: "One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature. Luffy is known for his impulsiveness, lack of strategic thinking at times, and a certain level of stupidity or innocence. However, it's essential to note that his seemingly foolish actions often stem from his genuine and straightforward personality rather than actual stupidity"
    }
    const flowFrameData = {
        previewImage: '/m.jpg',
        videoSource: '/one.mp4',
        title: 'one piece',
        date: '2024-02-14',
        type: 'flow Frames',
        desc: "One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature. Luffy is known for his impulsiveness, lack of strategic thinking at times, and a certain level of stupidity or innocence. However, it's essential to note that his seemingly foolish actions often stem from his genuine and straightforward personality rather than actual stupidity"
    }
    const videoData = {
        previewImage: '/m.jpg',
        videoSource: '/one.mp4',
        title: 'one piece',
        date: '2024-02-14',
        type: 'twistor',
        desc: "One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature. Luffy is known for his impulsiveness, lack of strategic thinking at times, and a certain level of stupidity or innocence. However, it's essential to note that his seemingly foolish actions often stem from his genuine and straightforward personality rather than actual stupidity"
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
                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center ml-5 text-blue-500  tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16 Latotext`}>Categories</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/trending/111"}>
                                <TrendingCard data={slide} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Twistors</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/video/111"}>
                                <Card dummyData={videoData} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Raw</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/flowframe/111"}>
                                <Card dummyData={rawData} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Flow Frame</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/raw/111"}>
                                <Card dummyData={flowFrameData} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Dialogues</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/audio/111"}>
                                <AudioCard data={dummyData} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest '>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Wallpapers</span>
                    </h1>
                    <div className="mt-3 grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mx-5">
                        {numbers.map((number) => (
                            <Link key={number} href={"/pages/download/wallpaper/111"}>
                                <WallpaperCard dummyData={wallpaperData} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
