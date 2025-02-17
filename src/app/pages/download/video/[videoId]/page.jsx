"use client"
import React from 'react';
import styles from './video.module.css';
import "../../../../globals.css";

const Video = () => {
  return (
    <div className="sm:w-[full] w-full  sm:h-screen">
      <div className={`mt-4 flex flex-col md:flex-row h-full text-white ${styles.glass}`}>
        {/* Video Section */}
        <div className="w-full md:w-5/12 h-64 sm:h-5/6 border-b md:border-r border-zinc-900 overflow-hidden">
          <video 
            className="w-full h-full object-cover" 
            controls
            playsInline
            controlsList="nodownload" // Hides download button
            onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
          >
            <source src="/one.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-0 md:ml-11 w-full md:w-2/4 text-white">
          <div className="title">
            <h1 className='text-3xl md:text-5xl mt-2 md:mt-4 opacity-90 border-b-4 inline-block border-yellow-500 text-yellow-300 Latotext uppercase font-light'>
              ONE PIECE
            </h1>
            <h2 className='text-xl md:text-3xl mt-4 md:mt-6 uppercase text-yellow-600 Latotext font-light'>
              Twistor
            </h2>
            <p className='mt-6 md:mt-11 opacity-65 text-sm md:text-base line-clamp-5 md:line-clamp-none'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id fugit alias hic blanditiis similique omnis cum incidunt nesciunt, possimus inventore magnam excepturi atque aliquam magni recusandae, sint quidem aut?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quod deserunt ea quibusdam repellendus. Pariatur repellat incidunt dolor facilis sequi fugit! Praesentium quisquam possimus deleniti minus alias repellat expedita aliquid.
            </p>
          </div>
          <div className="mt-6 md:mt-8 cursor-pointer downloadbtn flex justify-center items-center">
            <a 
              href="/one.mp4" 
              download 
              className='text-lg md:text-2xl font-bold uppercase text-black px-6 py-3 md:px-8 md:py-4' 
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
