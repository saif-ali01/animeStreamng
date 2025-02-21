"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewCardWrapper from "./NewCardWrapper";
import animeData from "../../data/animeData";

const NewCards = () => {
    const swiperRef = useRef(null);
    const [slides, setSlides] = useState(5);
    const [slidesgap, setSlidegap] = useState(50);

    // Update slidesPerView on resize
    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth > 1100) {
                setSlides(5);
                setSlidegap(50)

            } else if (window.innerWidth > 800) {
                setSlides(4);
                setSlidegap(50)

            } else if (window.innerWidth > 600) {
                setSlides(3);
                setSlidegap(60)

            } else{
                setSlides(3)
                setSlidegap(100)

            }
        };

        if (typeof window !== "undefined") {
            updateSlides(); // Set on mount
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
            <div className="text-yellow-400 
                          font-bold tracking-wider ml-11 md:ml-8 sm:ml-4   font-roboto">
                <h1 className="sm:text-3xl md:text-4xl text-3xl underline leading-loose py-3 uppercase ">Anime</h1>
            </div>
            {/* Custom Navigation Buttons */}
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

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={false}
                scrollbar={{ draggable: true }}
                spaceBetween={slidesgap}
                slidesPerView={slides}
                loop={true} // Enable infinite scrolling
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="relative"
            >
                {animeData.map((data,index) => (
                    <SwiperSlide key={data.id} className="px-2">
                         <NewCardWrapper key={index} data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewCards;
