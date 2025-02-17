"use client";
import styles from "./sidebar.module.css";
import "../../globals.css";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { LuMusic2, LuWallpaper } from "react-icons/lu";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      className={`h-screen border-r border-white/20 bg-black fixed top-0 left-0 hidden sm:flex flex-col items-center transition-all duration-300  sm:w-[100px] lg:w-[200px]  `} // Adjusted width for Tablet & Desktop
    >
      {/* Logo (Hidden on Tablet) */}
      <div className="text-white text-2xl  flex text-center justify-center items-center sm:md:h-[10vh] font-bold tracking-widest  border-b border-white/20  md:block ">
        <h1 className="sm:md:text-base sm:md:mt-20">
          ℬ𝒶𝒹𝓍𝒷ℴ𝓎
        </h1>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col items-center w-full sm:h-[70vh] justify-evenly  mt-8 space-y-6">
        <SidebarLink href="/" icon={<IoHomeOutline />} text="Home" />
        <SidebarLink href="/pages/search/category" icon={<TbCategory2 />} text="Category" />
        <SidebarLink href="/pages/search/flowframe" icon={<MdOutlineSlowMotionVideo />} text="Flowframe" />
        <SidebarLink href="/pages/search/raw" icon={<CiVideoOn />} text="Raw" />
        <SidebarLink href="/pages/search/audio" icon={<LuMusic2 />} text="Anime Dialogue" />
        <SidebarLink href="/pages/search/wallpaper" icon={<LuWallpaper />} text="Anime Wallpaper" />
      </ul>

      {/* Social Links */}
      <div className="mt-auto mb-6 w-full border-t border-white/20">
        <h2 className="text-gray-300 text-sm mt-4 ml-4 hidden lg:block">Follow Us</h2>
        <ul className="flex flex-col items-center w-full space-y-4 mt-3">
          <SidebarLink href="#" icon={<FaInstagram />} text="Instagram" />
          <SidebarLink href="#" icon={<FaYoutube />} text="Youtube" />
        </ul>
      </div>
    </div>
  );
};

// Sidebar Link Component
const SidebarLink = ({ href, icon, text }) => {
  return (
    <Link href={href} className="flex items-center space-x-3 text-white text-lg hover:bg-white/10 p-2 rounded-lg w-[90%] justify-center lg:justify-start">
      <span className="text-2xl">{icon}</span>
      <span className="hidden lg:inline">{text}</span>
    </Link>
  );
};

export default Sidebar;
