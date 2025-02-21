"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegBookmark } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import animeData from "../../data/animeData";
import HeaderCard from "./HeaderCard";

const Header1 = () => {
  const carouselRef = useRef(null);
  const headerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Track previous index for background change
  const prevIndex = (currentIndex - 1 + animeData.length) % animeData.length;

  // Trigger animation when the slide changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % animeData.length;
    setCurrentIndex(newIndex);
    carouselRef.current?.moveTo(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + animeData.length) % animeData.length;
    setCurrentIndex(newIndex);
    carouselRef.current?.moveTo(newIndex);
  };

  return (
    <header ref={headerRef} className="relative h-[80vh] md:h-[100vh]">
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${isAnimating ? "animate-scaleUp" : ""}`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.3)), url(${animeData[prevIndex]?.previewImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className={`container mx-auto px-4 h-full flex flex-col justify-center pb-12 md:pb-8 sm:pb-6 relative z-20 ${isAnimating ? "opacity-0 animate-fadeInDelayed" : ""}`}>
          <div className="max-w-2xl flex items-center sm:items-start mt-auto sm:mb-0 flex-col sm:m-10">
            <Image
              src={animeData[prevIndex].titlepng}
              width={200}
              height={200}
              alt={animeData[prevIndex].title}
              className="object-contain mix-blend-multiply"
              loading="lazy"
            />
            <div className="flex items-center gap-4 mb-6">
              <span className="text-yellow-400 text-lg md:text-base sm:text-sm">{animeData[prevIndex].type}</span>
              <span className="text-gray-300 text-lg md:text-base sm:text-sm">{new Date(animeData[prevIndex].date).toLocaleDateString()}</span>
            </div>
            <div className="hidden sm:block">
              <p className="tracking-wide w-full sm:w-[60%] text-lg md:text-base sm:text-sm mb-8 line-clamp-4 font-serif text-gray-300">
                {animeData[currentIndex].desc}
              </p>
            </div>
            <div className="w-full flex">
              <button className="relative flex justify-center sm:w-64 w-[55vw] hover:bg-transparent text-black rounded-sm items-center gap-4 hover:text-red-700 hover:border-2 hover:border-red-700 bg-red-700 transition-colors duration-300 sm:text-xl text-sm tracking-widest md:text-base px-6 py-3 font-mono">
                <FiPlay className="w-8 h-8" />
                START WATCHING
              </button>
              <div className="w-12 flex justify-center items-center rounded-lg h-full border-2 border-red-600 ml-5">
                <FaRegBookmark className="h-[70%] w-[80%] text-red-600" />
              </div>
            </div>
          </div>
          <div className="absolute right-6 bottom-2 bg-black/60 px-4 py-2 rounded-full">
            <span className="text-gray-300 text-sm md:text-xs">Popular in India</span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="sm:ml-auto relative w-[40vw] h-full z-[100] sm:mr-20  overflow-visible">
        <Carousel
          ref={carouselRef}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true} // Always autoplay
          interval={5000}
          transitionTime={500}
          stopOnHover={true}
          axis="horizontal"
          centerMode={true}
          centerSlidePercentage={40}
          swipeable={false}
          emulateTouch={true}
          itemClass="px-[5px]"
          className="hidden md:block b-full mt-[50vh]"
          onChange={(index) => setCurrentIndex(index)}
        >
          {animeData.map((anime, index) => (
            <div
              key={index}
              className={`h-full flex justify-between transition-opacity duration-500 ${index === (currentIndex - 1 + animeData.length) % animeData.length
                ? "ease-in-out duration-150 transition-opacity scale-150 opacity-0 pointer-events-none"
                : "opacity-100"
              }`}
            >
              <HeaderCard data={anime} />
            </div>
          ))}
        </Carousel>

        {/* Custom Arrows */}
        <div className="relative top-[40%] sm:-top-[55%] z-[200] flex w-screen sm:w-[10vw] sm:-right-[30vw] justify-between gap-6 sm:opacity-80 opacity-50">
          <div
            onClick={prevSlide}
            className="h-14 w-14 border-2 border-red-600 rounded-lg flex justify-center items-center 
            bg-black/50 text-red-600 hover:bg-red-600 transition-colors duration-300 hover:text-black cursor-pointer"
          >
            <SlArrowLeft className="h-10 w-10" />
          </div>
          <div
            onClick={nextSlide}
            className="h-14 w-14 border-2 border-red-600 rounded-lg flex justify-center items-center 
            bg-black/50 text-red-600 hover:bg-red-600 transition-colors duration-300 hover:text-black cursor-pointer"
          >
            <SlArrowRight className="h-10 w-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
