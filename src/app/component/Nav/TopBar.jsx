"use client";

import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";

const TopBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const searchContainerRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    inputRef.current?.focus(); // Focus immediately, no delay
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search submitted:", searchQuery);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="flex-1 w-full sm:w-[82vw] z-[111] bg-white/10 backdrop-blur-lg border-b border-white/20 sm:rounded-lg shadow-lg fixed top-0 py-2 flex items-center justify-between">
      {/* Name */}
      <div className="text-lg font-bold ml-5 w-full flex justify-between items-center">
        <h1 className="sm:text-2xl text-lg text-blue-600 font-grey-qo underline">
          Ispase~Anime
        </h1>
        {/* Search */}
        <div
          className="relative flex items-center pr-5 sm:pr-10"
          ref={searchContainerRef}
        >
          {!isSearchOpen && (
            <CiSearch
              className="w-10 sm:h-10 h-9 text-blue-700 cursor-pointer z-[113]"
              onClick={handleSearchClick}
            />
          )}
          <form
            onSubmit={handleSubmit}
            className={`absolute right-14 sm:right-16 z-[112] ${
              isSearchOpen ? "block" : "hidden"
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search anime..."
              className={`${
                isSearchOpen
                  ? "w-[calc(90vw-4rem)] max-w-[16rem] sm:max-w-[20rem]"
                  : "w-0"
              } transition-width duration-150 sm:duration-300 ease-in-out bg-black text-white placeholder-gray-400 border border-white/30 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopBar;