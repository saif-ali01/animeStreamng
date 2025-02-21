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
import animeData from '../../data/animeData';
import animeAudioData from '../../data/animeAudioData';
import NewCard from '../../component/card/NewCard';
import WallpaperPage from '../download/wallpaper/[wallpaperId]/page';

const Page = () => {


    return (
        <div className={`text-white sm:w-[full] w-full  flex justify-center flex-col`}>
            <Search />
            <div className={`w-full mt-5`}>
                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center ml-5 text-blue-500  tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16 Latotext`}>Tranding</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {animeData.map((data, index) => (
                            <Link key={index}
                                href={{
                                    pathname: `/pages/download/video/${data.id}`,
                                }}
                                as={`/pages/download/video/${data.id}`}
                                state={{ anime: data }}
                            >
                                <NewCard data={data} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Twistors</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {animeData.map((data, index) => (
                            <Link key={index} href={{
                                pathname: `/pages/download/video/${data.id}`,
                            }}
                                as={`/pages/download/video/${data.id}`}
                                state={{ anime: data }}
                            >
                                <NewCard data={data} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Raw</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {animeAudioData.map((data, index) => (
                            <Link key={index} href={{
                                pathname: `/pages/download/video/${data.id}`,
                            }}
                                as={`/pages/download/video/${data.id}`}
                                state={{ anime: data }}
                            >
                                <Card dummyData={data} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Flow Frame</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {animeData.map((data, index) => (
                            <Link key={index} href={{
                                pathname: `/pages/download/video/${data.id}`,
                            }}
                                as={`/pages/download/video/${data.id}`}
                                state={{ anime: data }}
                            >
                                <NewCard data={data} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest'>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Dialogues</span>
                    </h1>
                    <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                        {animeAudioData.map((data, index) => (
                            <Link
                                key={data.id} // Use a unique identifier instead of index
                                href={{
                                    pathname: `/pages/download/audio/${data.id}`,
                                    query: { anime: JSON.stringify(data) }, // Ensure correct formatting
                                }}
                            >
                                <AudioCard data={data} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <h1 className='flex justify-center Latotext ml-5 text-blue-500 tracking-widest '>
                        <span className={`w-full text-3xl lg:text-7xl mt-16`}>Wallpapers</span>
                    </h1>
                    <div className="mt-3 grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mx-5">
                        {animeData.map((data, index) => (
                            <Link
                                key={data.id}
                                href={`/pages/download/wallpaper/${data.id}?anime=${encodeURIComponent(JSON.stringify(data))}`}
                            >
                                <WallpaperCard data={data} />
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
