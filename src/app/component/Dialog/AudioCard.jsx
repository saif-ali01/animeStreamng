"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "../../globals.css";
import Image from "next/image";

const AudioCard = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [pendingPlay, setPendingPlay] = useState(false);
    const audioRef = useRef(null);
    const cardRef = useRef(null);
    const pendingPlayRef = useRef(pendingPlay);

    useEffect(() => {
        pendingPlayRef.current = pendingPlay;
    }, [pendingPlay]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleBufferProgress = () => {
            if (audio.duration && pendingPlayRef.current) {
                const buffered = audio.buffered;
                if (buffered.length > 0) {
                    const bufferedEnd = buffered.end(0);
                    const bufferedPercent = (bufferedEnd / audio.duration) * 100;

                    if (bufferedPercent >= 20 && !isPlaying) {
                        audio.play()
                            .then(() => {
                                setIsPlaying(true);
                                setPendingPlay(false);
                            })
                            .catch(console.error);
                    }
                }
            }
        };

        const handleCanPlay = () => {
            if (pendingPlayRef.current && !isPlaying) {
                audio.play()
                    .then(() => {
                        setIsPlaying(true);
                        setPendingPlay(false);
                    })
                    .catch(console.error);
            }
        };

        audio.addEventListener('progress', handleBufferProgress);
        audio.addEventListener('canplay', handleCanPlay);

        return () => {
            audio.removeEventListener('progress', handleBufferProgress);
            audio.removeEventListener('canplay', handleCanPlay);
        };
    }, []);

    const handleTogglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            setPendingPlay(true);
            audioRef.current.play().catch(() => {
                // Automatic handling by progress/canplay events
            });
        }
    };

    return (
        <div ref={cardRef} className={`text-white cursor-pointer mt-5 mb-5 w-full py-2 glass bg-white`}>
            {isVisible && (
                <>
                    <div className="relative h-12">
                        <Image
                            src={data.previewImage.src}
                            alt={data.title}
                            className="w-16 mt-4 ml-4 h-full rounded-lg object-cover"
                            width={112}
                            height={111}
                            loading="lazy"
                        />
                        <div className="absolute w-16 ml-6 top-16 inset-x-0 bottom-0 h-2 bg-gradient-to-t from-transparent to-gray-400 filter blur-lg"></div>
                    </div>

                    <div className="w-40 text-sm leading-tight h-10 audioText">
                        <span className="whitespace-pre-line Latotext font-medium tracking-widest line-clamp-1 leading-1">
                            {data.title}
                        </span>
                        <span className="text-gray-500 text-xs Latotext whitespace-pre-line line-clamp-1">
                            {data.desc}
                        </span>
                    </div>

                    <div className="audio">
                        <div className="b-yellow-300 justify-center border-2 border-yellow-500 mt-1 w-10 rounded-xl h-10 mr-4 flex items-center">
                            {isPlaying ? (
                                <FaPause className="text-yellow-500 cursor-pointer text-xl" onClick={handleTogglePlay} />
                            ) : (
                                <FaPlay className="text-yellow-500 cursor-pointer text-xl" onClick={handleTogglePlay} />
                            )}

                            <audio
                                className="hidden"
                                ref={audioRef}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                preload="none"
                            >
                                <source src={data.audioSrc} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AudioCard;
