"use client"
import React, { useState, useRef } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import "../../globals.css"; // Assuming you have your global styles

const AudioCard = ({ data }) => {
    const [play, setPlay] = useState(false);
    const audioRef = useRef(null);

    const handleTogglePlay = () => {
        if (play) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!play);
    };

    return (
        <div className={`text-white cursor-pointer mt-5 mb-5 w-full  glass bg-white `}>
            <div className="relative">
                <img src={data.previewImage} alt="Your Image" className="h-full w-16 mt-4 ml-4  rounded-lg object-cover" />

                <div className="absolute w-16 ml-6 top-16 inset-x-0 bottom-0 h-2 bg-gradient-to-t from-transparent to-gray-400 filter blur-lg"></div>
            </div>
         
            <div className=' w-40 text-sm leading-tight h-10 audioText'>
                <span className='whitespace-pre-line Latotext font-medium tracking-widest line-clamp-1 leading-1'>{data.title}</span>
                <span className='text-gray-500 text-xs  Latotext whitespace-pre-line line-clamp-1'>
                    {data.desc}
                </span>
            </div>
            <div className='audio'>
                <div className='b-yellow-300 justify-center  border-2 border-yellow-500 mt-1 w-10 rounded-xl h-10 mr-4 flex items-center'>

                    {play ? (
                        <FaPause
                            className='text-yellow-500  cursor-pointer text-xl'
                            onClick={handleTogglePlay}
                        />
                    ) : (
                        <FaPlay
                            className='text-yellow-500  cursor-pointer text-xl'
                            onClick={handleTogglePlay}
                        />
                    )}
                    <audio className='hidden' ref={audioRef} onPlay={() => setPlay(true)} onPause={() => setPlay(false)} controls>
                        <source src='./ajnabi.mp3' type='audio/mpeg' />
                        Your browser does not support the audio element.
                    </audio>

                </div>
            </div>
        </div>
    );
};

export default AudioCard;
