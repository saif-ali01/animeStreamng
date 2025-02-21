"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from "./audio.module.css";
import "../../../../globals.css";
import { FaPause, FaPlay, FaVolumeMute } from "react-icons/fa";
import { VscUnmute } from "react-icons/vsc";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
const Page = () => {
    const router = useRouter();
    const [anime, setAnime] = useState(null);
    const [audioTime, setAudioTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);
    const audioRef = useRef(null);
    const [play, setPlay] = useState(false);
    const [mute, setMute] = useState(false);

    const searchParams = useSearchParams();

    useEffect(() => {
        const animeParam = searchParams.get("anime"); // Get anime data from query
        if (animeParam) {
            try {
                setAnime(JSON.parse(animeParam)); // Parse JSON data
            } catch (error) {
                console.error("Error parsing anime data:", error);
            }
        }
    }, [searchParams]);
    const handleTogglePlay = () => {
        if (play) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!play);
    };
    const handleToggleMute = () => {
        // Toggle the mute state
        setMute(!mute);

        // Set the volume based on the mute state
        audioRef.current.volume = mute ? 1 : 0;
        // console.log(mute)
    };

    const handleRangeChange = (e) => {
        const currentTime = parseFloat(e.target.value);
        setAudioTime(currentTime);

        if (audioRef.current) {
            audioRef.current.currentTime = currentTime;
        }
    };

    const handleAudioTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime;
        setAudioTime(currentTime);
    };

    // useEffect(() => {
    //     if (audioRef.current) {
    //         audioRef.current.currentTime = audioTime;
    //     }
    // }, [audioTime]);

    useEffect(() => {
        if (audioRef.current) {
            setAudioDuration(audioRef.current.duration);
        }
    }, [audioRef.current]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

  if (!anime) return <p>Loading...</p>;
    return (
        <div className='text-white sm:w-[full] w-full  flex h-screen'>
            <div className="flex justify-center  items-center sm:w-1/2 w-full">


                <div className={` rounded-md ${styles.container}`}>  </div>

                <div className={`${styles.main} overflow-hidden pb-12`}>
                    <div className={`flex justify-center h-60 items-center`}>

                        <div className={`flex ${styles.audioImg}`}>
                            <div className="  h-44  ">
                                <Image   src={anime.previewImage.src} width={222} height={222} loading='lazy' className={`h-full w-48 ml-4 object-cover rounded-lg ${play && styles.duration}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`  justify-center w-full`}>
                        <div className={`${styles.boxContainer}  justify-center w-full`}>
                            <div className={`${styles.box} ${play && styles.box1} w-full`}>
                            </div>
                            <div className={`${styles.box} ${play && styles.box2} w-full`}>
                            </div>
                            <div className={`${styles.box} ${play && styles.box3} w-full`}>
                            </div>
                            <div className={`${styles.box} ${play && styles.box4} w-full`}>
                            </div>
                            <div className={`${styles.box} ${play && styles.box5} w-full`}>
                            </div>
                            <div className={`${styles.box} ${play && styles.box6} w-full`}>
                            </div>
                            <div className={`${styles.box} ${play && styles.box7} w-full`}>
                            </div>
                        </div>

                        <div className={`w-full justify-center flex flex-wrap`}>

                            <h1 className={`${styles.text} w-full text-purple-900`}> <span className="justify-center flex">{anime.title}</span></h1>
                            <p className={`${styles.p} w-full ml-4 mr-3`}><span className="justify-center h-8 line-clamp-2 flex">{anime.desc}</span></p>
                        </div>
                        <div className={`${styles.controls} mt-5 w-full`}>
                            <div className={`${styles.rangediv} flex items-center  justify-between w-full`}>
                                <h1 className='text-base ml-4  text-gray-500'>{formatTime(audioTime)}</h1>

                                <input
                                    type="range"
                                    name=""
                                    max={audioDuration}
                                    value={audioTime}
                                    onChange={handleRangeChange}
                                    className={` h-4 overflow-hidden w-3/5 outline-none ${styles.range}`}
                                />
                                <h1 className='text-base mr-4 text-gray-500'>{formatTime(audioDuration)}</h1>
                            </div>
                            <div className="btn  mt-9  flex justify-around">
                                {
                                    mute ? (<FaVolumeMute className='text-purple-900 cursor-pointer text-5xl' onClick={handleToggleMute} />
                                    ) : (<VscUnmute className='text-purple-900 cursor-pointer text-5xl' onClick={handleToggleMute} />)
                                }
                                {play ? (
                                    <FaPause
                                        className='text-purple-900 cursor-pointer text-5xl'
                                        onClick={handleTogglePlay}
                                    />
                                ) : (
                                    <FaPlay
                                        className='text-purple-900  cursor-pointer text-5xl '
                                        onClick={handleTogglePlay}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <audio className='hidden' autoPlay={true} controls ref={audioRef} onTimeUpdate={handleAudioTimeUpdate} onPlay={() => setPlay(true)} onPause={() => setPlay(false)}>
                        <source src={anime.audioSrc} type='audio/mpeg' />
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div className=" sm:hidden w-40 h-10 absolute z-[1000] bottom-5 mr-32  cursor-pointer downloadbtn flex justify-center items-center">
                <a href="/audio.mp3" download className='cursor-pointer  text-xl font-bold uppercase  text-black' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Download</a>
            </div>
            </div>
            <div className={` sm:w-[1/2] sm:flex hidden `}>
                <div className=" ">
                    <h1 className='flex justify-center Latotext text-blue-900  tracking-widest sm:text-xl md:text-3xl '><span className={`w-full ${styles.textShadow} text-7xl mt-16 `}> {anime.title}</span></h1>
                    <h2 className={` ${styles.textShadow} text-3xl mt-24 `}> <span className='text-blue-700 opacity-90'>Charater Name</span></h2>
                    <h2 className={`text-gray-900 ${styles.textShadow} opacity-75  text-xl w-96 mt-14 `}> <span className='text-gray-500'>{anime.desc}</span></h2>

                    <div className=" cursor-pointer downloadbtn flex justify-center items-center">
                        <a href="/audio.mp3" download className='cursor-pointer  text-2xl font-bold uppercase  text-black' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Download</a>
                    </div>
                </div>

            </div>
          


        </div>
    );
};

export default Page;
