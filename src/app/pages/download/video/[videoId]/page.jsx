import React from 'react';
import styles from './video.module.css';
import "../../../../globals.css";

const Video = () => {
  return (
    <div className={`ml-60 h-screen`}>
      <div className={`ml-4 mt-4 flex text-white ${styles.glass}`}>
        <div className={`w-5/12 h-full border-r border-zinc-900 overflow-hidden`}>
          <video className="w-full h-full object-cover" controls>
            <source src="/one.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" ml-11 w-2/4  text-white">
          <div className="title">
            <h1 className='text-5xl mt-4  overflow-hidden  opacity-90 border-b-4 flex w-fit border-yellow-500 text-yellow-300 Latotext uppercase font-light  '>ONE PIECE</h1>
            <h2 className='text-3xl mt-6 uppercase  overflow-hidde flex w-fit  text-yellow-600 Latotext font-light '>Twistor</h2>
            <p className=' h-48 mt-11 overflow-hidden  text-ellipsis opacity-65 text-wrap'>... (your content)</p>
          </div>
          <div className="cursor-pointer downloadbtn flex justify-center items-center">
            <a href="/one.mp4" download className='text-2xl font-bold uppercase  text-black' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Download</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
