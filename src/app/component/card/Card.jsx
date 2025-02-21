"use client";
import React, { useState, useRef, useCallback } from 'react';
import "../../globals.css";
import Image from 'next/image';

const Card = ({ dummyData }) => {
    const [hovered, setHovered] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);

    // Memoized event handlers to avoid re-creating functions on every render
    const handleMouseEnter = useCallback(() => {
        setHovered(true);
        timeoutRef.current = setTimeout(() => {
            setPlayVideo(true);
            if (videoRef.current) {
                videoRef.current.play().catch(() => {
                    // Handle video autoplay error (e.g., browser restrictions)
                    console.log("Autoplay failed");
                });
            }
        }, 1000); // Adjust the timeout as needed
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHovered(false);
        setPlayVideo(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, []);

    return (
        <div
            className="rounded-2xl overflow-hidden md:mx-2 sm:mx-1 w-full mb-4
                       hover:transform hover:scale-105 transition-transform duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full rounded-2xl overflow-hidden bg-slate-400 relative 
                          aspect-video md:aspect-[3/2] sm:aspect-square">
                {hovered ? (
                    <video
                        ref={videoRef}
                        autoPlay={playVideo}
                        muted // Required for autoplay in most browsers
                        playsInline // Required for mobile devices
                        className="w-full h-full object-cover"
                        preload="none" // Lazy load video
                    >
                        <source src={dummyData.videoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img 

                        src={dummyData.previewImage.src}
                        alt={dummyData.title}
                        className="w-full h-full object-cover"
                        loading="lazy" // Lazy load image
                    />
                )}
            </div>
            <div className="p-4 md:p-3 sm:p-2">
                <div className="desc whitespace-pre-line line-clamp-2 md:line-clamp-3 sm:line-clamp-2">
                    <p className='text-gray-500 Latotext leading-tight 
                               text-base md:text-sm sm:text-xs 
                               tracking-wider'>
                        {dummyData.desc}
                    </p>
                </div>
                <div className="flex items-center justify-between gap-2 mt-3 md:mt-2">
                    <h1 className="text-yellow-400 text-lg md:text-base sm:text-sm 
                                  uppercase cardNameText truncate">
                        {dummyData.title}
                    </h1>
                    <h1 className="font-extrabold text-black text-shadow rounded-lg 
                                  text-sm md:text-xs sm:text-[10px] uppercase 
                                  bg-red-700 px-2 py-1 cardNameText">
                        {dummyData.type}
                    </h1>
                </div>

                <h2 className="text-end text-gray-500 Latotext tracking-wider
                              mt-2 md:mt-1 text-sm md:text-xs sm:text-[10px]">
                    {dummyData.date} <span className="hidden sm:inline">/badxboy350</span>
                </h2>
            </div>
        </div>
    );
};

export default React.memo(Card); // Memoize the component to prevent unnecessary re-renders