"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import "../../globals.css";
import animeData from "../../data/animeData";
import animeAudioData from "../../data/animeAudioData";
import NewCard from "../../component/card/NewCard";
import Card from "../../component/card/Card";
import AudioCard from "../../component/Dialog/AudioCard";
import WallpaperCard from "../../component/wallpaper/WallpaperCard";

// SwiperSection Component to reuse across sections
const SwiperSection = ({ title, data, CardComponent, linkPath,more }) => {
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState(5);
  const [slidesGap, setSlidesGap] = useState(50);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth > 1100) {
        setSlides(5);
        setSlidesGap(50);
      } else if (window.innerWidth > 800) {
        setSlides(4);
        setSlidesGap(50);
      } else if (window.innerWidth > 600) {
        setSlides(3);
        setSlidesGap(60);
      } else {
        setSlides(3);
        setSlidesGap(100);
      }
    };

    if (typeof window !== "undefined") {
      updateSlides();
      window.addEventListener("resize", updateSlides);
      return () => window.removeEventListener("resize", updateSlides);
    }
  }, []);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div className="max-w-full mt-10 relative">
      <div className="relative flex items-center justify-between px-11 md:px-8 sm:px-4">
        <div className="text-blue-500 font-bold tracking-wider font-roboto">
          <h1 className="sm:text-3xl md:text-4xl text-3xl underline leading-loose py-3 uppercase Latotext">
            {title}
          </h1>
        </div>
        <Link
          href={more} // Navigate to the section's base path
          className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 text-sm sm:text-base font-roboto underline"
        >
          Show More
        </Link>
      </div>
      <div className="w-full absolute top-[40%] -translate-y-1/2 px-5 z-50 flex justify-between">
        <button
          onClick={handlePrev}
          className="w-14 h-14 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black transition cursor-pointer z-50 absolute left-0"
        >
          <FaAngleLeft className="w-8 h-8" />
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black transition cursor-pointer z-50 absolute right-0"
        >
          <FaAngleRight className="w-8 h-8" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={false}
        scrollbar={{ draggable: true }}
        spaceBetween={slidesGap}
        slidesPerView={slides}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="px-2">
            <Link
              href={{
                pathname: `${linkPath}/${item.id}`,
                query: linkPath.includes("audio") || linkPath.includes("wallpaper")
                  ? { anime: JSON.stringify(item) }
                  : undefined,
              }}
            >
              <CardComponent data={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Page = () => {
  return (
    <div className="text-white sm:w-full w-full flex justify-center flex-col">
      <div className="w-full mt-5">
        {/* Trending Section */}
        <SwiperSection
          title="Anime"
          data={animeData}
          CardComponent={NewCard}
          more={"/pages/search/anime"}
          linkPath="/pages/download/anime"
        />

        {/* Twistors Section */}
        <SwiperSection
          title="Twistors"
          data={animeData}
          CardComponent={NewCard}
          more={"/pages/search/twistor"}
          linkPath="/pages/download/video"
        />

        {/* Raw Section */}
        <SwiperSection
          title="Raw"
          data={animeAudioData}
          CardComponent={Card}
          more={"/pages/search/raw"}
          linkPath="/pages/download/video"
        />

        {/* Flow Frame Section */}
        <SwiperSection
          title="Flow Frame"
          data={animeData}
          CardComponent={NewCard}
          more={"/pages/search/flowframe"}
          linkPath="/pages/download/video"
        />

        {/* Dialogues Section */}
        <SwiperSection
          title="Dialogues"
          data={animeAudioData}
          CardComponent={AudioCard}
          more={"/pages/search/audio"}
          linkPath="/pages/download/audio"
        />

        {/* Wallpapers Section */}
        <SwiperSection
          title="Wallpapers"
          data={animeData}
          CardComponent={WallpaperCard}
          more={"/pages/search/wallpaper"}
          linkPath="/pages/download/wallpaper"
        />
      </div>
    </div>
  );
};

export default Page;