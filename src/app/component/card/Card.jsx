"use client"
import React, { useEffect, useState, useRef } from 'react';
import "../../globals.css";
const Card = ({ dummyData }) => {
    const [hovered, setHovered] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        let timeoutId;

        if (hovered) {
            timeoutId = setTimeout(() => {
                setPlayVideo(true);
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }, 1000); // Adjust the timeout as needed
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [hovered]);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setPlayVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className=" rounded-2xl overflow-hidden ml-3 w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full h-3/4 rounded-2xl overflow-hidden bg-slate-400 relative" style={{ height: "216px" }}>
                {hovered ? (
                    <video ref={videoRef} autoPlay={playVideo} className="w-full h-full object-cover">
                        <source src={dummyData.videoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={dummyData.previewImage} alt="not" className="w-full h-full object-cover" />
                )}
            </div>
            <div className="p-4">
                <div className="desc whitespace-pre-line  line-clamp-2">
                    <p className='text-gray-500 Latotext leading-tight text-lg tracking-wider'>{dummyData.desc}</p>
                </div>
                <div className=" flex items-center justify-around">
                    <h1 className="text-yellow-400 text-xl uppercase cardNameText mt-2">{dummyData.title}</h1>
                    <h1 style={{ textShadow: "4px 4px 4px rgb(0 ,0 ,0, 0.6) " }} className="font-extrabold text-black textShadow rounded-lg text-lg uppercase bg-red-700 pl-2 pr-2 cardNameText mt-2">{dummyData.type}</h1>
                </div>

                <h2 className="text-end text-gray-500   Latotext tracking-wider">
                    {dummyData.date} <span>/badxboy350</span>
                </h2>
            </div>
        </div>
    );
};

export default Card;
