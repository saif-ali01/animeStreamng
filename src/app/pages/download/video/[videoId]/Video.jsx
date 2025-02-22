"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./video.module.css";

// Common Tailwind class strings
const glassContainer = `mt-4 flex flex-col md:flex-row h-full text-white ${styles.glass}`;
const videoSection = "w-full md:w-5/12 lg:w-6/12 xl:w-5/12 aspect-video md:aspect-auto md:h-auto border-b md:border-r border-zinc-900 overflow-hidden";
const contentSection = "p-4 md:p-6 lg:p-8 xl:p-12 md:ml-4 lg:ml-8 xl:ml-12 w-full md:w-7/12 lg:w-6/12 xl:w-7/12";

// Video Skeleton Component
export const VideoSkeleton = () => (
  <div className="w-full min-h-screen sm:h-auto">
    <div className={glassContainer}>
      <div className={videoSection}>
        <div className="w-full h-full bg-gray-700 animate-pulse" />
      </div>
      <div className={contentSection}>
        <div className="space-y-4">
          <div className="h-8 bg-gray-600 animate-pulse w-3/4 rounded" />
          <div className="h-6 bg-gray-600 animate-pulse w-1/2 rounded" />
          <div className="space-y-2">
            {Array(5).fill().map((_, i) => (
              <div key={i} className={`h-4 bg-gray-600 animate-pulse w-${6 - i}/6 rounded`} />
            ))}
          </div>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12">
          <div className="h-12 bg-gray-600 animate-pulse w-32 rounded" />
        </div>
      </div>
    </div>
  </div>
);

// LazyIframe Component
const LazyIframe = ({ src, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div ref={iframeRef} className="relative w-full h-full">
      {!isLoaded && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm transition-all duration-500"
            style={{ backgroundImage: "url('https://cache.desktopnexus.com/thumbseg/1468/1468649-bigthumbnail.jpg')" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </>
      )}
      {isLoaded && (
        <iframe 
          src={src}
          {...props}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

// Main Video Component
const Video = () => (
  <div className="w-full min-h-screen sm:h-auto">
    <div className={glassContainer}>
      <div className={videoSection}>
        <LazyIframe
          src="https://geo.dailymotion.com/player.html?video=k1nMwu2opUYmABCurDg&autoplay=0" // Added autoplay=0
          allowFullScreen
          loading="lazy"
          title="Dailymotion Video Player"
          allow="web-share"
        />
      </div>
      <div className={contentSection}>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 opacity-90 border-b-2 md:border-b-4 inline-block border-yellow-500 text-yellow-300 Latotext uppercase font-light">
            ONE PIECE
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-6 uppercase text-yellow-600 Latotext font-light">
            Twistor
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-8 opacity-65 text-xs sm:text-sm md:text-base lg:text-lg line-clamp-5 md:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id fugit alias hic blanditiis similique omnis cum incidunt nesciunt, possimus inventore magnam excepturi atque aliquam magni recusandae, sint quidem aut? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quod deserunt ea quibusdam repellendus. Pariatur repellat incidunt dolor facilis sequi fugit! Praesentium quisquam possimus deleniti minus alias repellat expedita aliquid.
          </p>
        </div>
        <a
          href="https://mega.nz/file/HZFzwZIC#eN36e7l3sLrfmge0Qdel8cJD7kC4_ittrb1bUwlssWM"
          download
          className="border-2 border-gray-700 rounded-md text-white mt-6 md:mt-8 lg:mt-10 xl:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase  px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 flex justify-center items-center"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Download
        </a>
      </div>
    </div>
  </div>
);

export default Video;