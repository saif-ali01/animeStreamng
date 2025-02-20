"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './video.module.css';

// Video Skeleton Component
export const VideoSkeleton = () => {
    return (
        <div className="w-full min-h-screen sm:h-auto">
            <div className={`mt-4 flex flex-col md:flex-row h-full text-white ${styles.glass}`}>
                {/* Video Section Skeleton */}
                <div className="w-full md:w-5/12 lg:w-6/12 xl:w-5/12 aspect-video md:aspect-auto md:h-auto border-b md:border-r border-zinc-900 overflow-hidden">
                    <div className="w-full h-full bg-gray-700 animate-pulse" />
                </div>

                {/* Content Section Skeleton */}
                <div className="p-4 md:p-6 lg:p-8 xl:p-12 md:ml-4 lg:ml-8 xl:ml-12 w-full md:w-7/12 lg:w-6/12 xl:w-7/12">
                    <div className="title">
                        <div className="h-8 bg-gray-600 animate-pulse w-3/4 mb-4 rounded" />
                        <div className="h-6 bg-gray-600 animate-pulse w-1/2 mb-6 rounded" />
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-600 animate-pulse w-full rounded" />
                            <div className="h-4 bg-gray-600 animate-pulse w-5/6 rounded" />
                            <div className="h-4 bg-gray-600 animate-pulse w-4/5 rounded" />
                            <div className="h-4 bg-gray-600 animate-pulse w-3/4 rounded" />
                            <div className="h-4 bg-gray-600 animate-pulse w-2/3 rounded" />
                        </div>
                    </div>
                    <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        <div className="h-12 bg-gray-600 animate-pulse w-32 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};
const LazyIframe = ({ src, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const iframeRef = useRef();
    const observerRef = useRef();

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isLoaded) {
                    setIsLoaded(true);
                    observerRef.current.disconnect();
                }
            });
        });

        if (iframeRef.current) {
            observerRef.current.observe(iframeRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div ref={iframeRef} className="relative w-full h-full">
            {/* Background Image (Blurred) */}
            {!isLoaded && (
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 blur-sm"
                    style={{ backgroundImage: "url('https://cache.desktopnexus.com/thumbseg/1468/1468649-bigthumbnail.jpg')" }}>
                </div>
            )}
            
            {/* Spinner (Separate from Blur) */}
            {!isLoaded && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {isLoaded && (
                <iframe
                    src={src}
                    {...props}
                    className="w-full h-full object-cover"
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

// Main Video Component
const Video = () => {
    return (
        <div className="w-full min-h-screen sm:h-auto">
            <div className={`mt-4 flex flex-col md:flex-row h-full text-white ${styles.glass}`}>
                {/* Video Section */}
                <div className="w-full md:w-5/12 lg:w-6/12 xl:w-5/12 aspect-video md:aspect-auto md:h-auto border-b md:border-r border-zinc-900 overflow-hidden">
                    <LazyIframe
                        src="https://geo.dailymotion.com/player.html?video=k1nMwu2opUYmABCurDg"
                        allowFullScreen
                        loading="lazy"
                        title="Dailymotion Video Player"
                        allow="web-share"
                    />
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-6 lg:p-8 xl:p-12 md:ml-4 lg:ml-8 xl:ml-12 w-full md:w-7/12 lg:w-6/12 xl:w-7/12 text-white">
                    <div className="title">
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 opacity-90 border-b-2 md:border-b-4 inline-block border-yellow-500 text-yellow-300 Latotext uppercase font-light'>
                            ONE PIECE
                        </h1>
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-6 uppercase text-yellow-600 Latotext font-light'>
                            Twistor
                        </h2>
                        <p className='mt-4 md:mt-6 lg:mt-8 opacity-65 text-xs sm:text-sm md:text-base lg:text-lg line-clamp-5 md:line-clamp-none'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id fugit alias hic blanditiis similique omnis cum incidunt nesciunt, possimus inventore magnam excepturi atque aliquam magni recusandae, sint quidem aut?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quod deserunt ea quibusdam repellendus. Pariatur repellat incidunt dolor facilis sequi fugit! Praesentium quisquam possimus deleniti minus alias repellat expedita aliquid.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 cursor-pointer downloadbtn flex justify-center items-center">
                        <a
                            href="https://mega.nz/file/HZFzwZIC#eN36e7l3sLrfmge0Qdel8cJD7kC4_ittrb1bUwlssWM"
                            download
                            className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4'
                            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;