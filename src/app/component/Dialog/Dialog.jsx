"use client";
import React, { useState, useEffect, useRef } from "react";
import "../../globals.css";
import dynamic from "next/dynamic";
import animeAudioData from "../../data/animeAudioData";

// Lazy load AudioCard
const AudioCard = dynamic(() => import("./AudioCard"), { 
  
  ssr: false ,
  loading: () => <LoadingSkeleton />,
});

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="animate-pulse bg-white/20 rounded-md w-full h-14 flex items-center p-4 glass">
    <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
    <div className="ml-4 flex flex-col space-y-2 w-full">
      <div className="w-32 h-4 bg-gray-700 rounded"></div>
      <div className="w-24 h-3 bg-gray-700 rounded"></div>
    </div>
    <div className="w-10 h-10 bg-gray-700 rounded-xl"></div>
  </div>
);

const Dialogue = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.2 } // Load when 20% visible
    );

    const elements = containerRef.current?.querySelectorAll(".audio-card");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-11 w-[90%] mx-auto">
      <div className="text-yellow-400 text-3xl uppercase inline-flex font-bold tracking-wider ml-11 font-roboto">
        <h1 className="robo mb-2 underline">Dialogue</h1>
      </div>
      <div className="mt-3 grid xl:grid-cols-3 sm:grid-cols-2 gap-4" ref={containerRef}>
        {animeAudioData.map((data, index) => (
          <div key={index} data-index={index} className="audio-card">
            {visibleCards.has(index.toString()) ? <AudioCard data={data} /> : <LoadingSkeleton />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
