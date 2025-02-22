"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../globals.css";
import Card from "./Card";
import animeData from "../../data/animeData";

const Cards = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observers = animeData.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
            observer.disconnect(); // Stop observing once visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the card is visible
      );

      if (cardRefs.current[index]) {
        observer.observe(cardRefs.current[index]);
      }

      return observer;
    });

    // Cleanup observers on unmount or when animeData changes
    return () => observers.forEach((observer) => observer.disconnect());
  }, [animeData]);

  return (
    <div className="pt-12 px-2 md:px-3 sm:px-2">
      <div className="text-yellow-400 text-2xl md:text-xl sm:text-lg font-bold tracking-wider ml-11 md:ml-8 sm:ml-4 font-serif">
        <h1>Twistors</h1>
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 sm:gap-3 justify-center items-center">
        {animeData.map((item, index) => (
          <div
            key={item.id || index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-full"
          >
            <Card data={item} isVisible={visibleCards.has(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;