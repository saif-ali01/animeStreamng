"use client";
import React, { useRef } from 'react';
import "../../globals.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TrendingCard from "../../component/trendingCard/TrendingCard"

const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    

    const slides = [{
        title: "jujutsu kaisen",
        date: "2024-02-09",
        src: "https://www.enjpg.com/img/2020/jujutsu-kaisen-18.jpg",
    },
    {
        title: "Dragonball ",
        date: "2024-02-10",
        src: "https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?rs=1&pid=ImgDetMain",
    },
    {
        title: "naruto ",
        date: "2024-02-10",
        src: "https://th.bing.com/th/id/OIP.zy1dYeNV4SXOnXRu6BC-OAHaHa?w=960&h=960&rs=1&pid=ImgDetMain",
    },
    {
        title: "Demon Slayer ",
        date: "2024-02-10",
        src: "https://th.bing.com/th/id/OIP.wFUWQKcZW-IVaPtFNvKL7QHaEo?rs=1&pid=ImgDetMain",
    }, {
        title: "Black Clover ",
        date: "2024-02-10",
        src: "https://th.bing.com/th/id/OIP.hZDsQTL-ZzDbVRvAw6ONGwHaEK?rs=1&pid=ImgDetMain",
    }, {
        title: "Tokyo Revengers ",
        date: "2024-02-10",
        src: "https://animeshelter.com/wp-content/uploads/2021/05/tokyo-revengers-episode-3-0922.jpg",
    }, {
        title: "spiderman",
        date: "2024-02-10",
        src: "https://th.bing.com/th/id/OIP.ZkQ1H_1e6RFWtFniZ0Od2QHaEK?rs=1&pid=ImgDetMain",
    },

    ];

    return (
        <>
            <div className="text-yellow-400 text-2xl font-bold tracking-wider ml-11 font-serif md:ml-8 sm:ml-4 sm:text-xl">
                TRENDING
            </div>
            <div className="flex mt-8 justify-center">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            effect:"card",
                            coverflowEffect: {
                                rotate: 20,
                                depth: 50,
                                stretch: 0,
                                modifier: 1,
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            coverflowEffect: {
                                rotate: 30,
                                depth: 80,
                                stretch: 0,
                                modifier: 1,
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            coverflowEffect: {
                                rotate: 50,
                                depth: 100,
                                stretch: 0,
                                modifier: 1,
                            }
                        }
                    }}
                    loop={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                        hiddenClass: 'swiper-button-hidden'
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="p-5 md:p-3 sm:p-1">
                            <TrendingCard data={slide} />
                        </SwiperSlide>
                    ))}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle} className="md:w-8 md:h-8 sm:w-6 sm:h-6">
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent} className="md:text-sm sm:text-xs"></span>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default Hero;