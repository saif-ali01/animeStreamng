"use client";
import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { LuMusic2, LuWallpaper } from "react-icons/lu";

const Bottombar = () => {
  return (
    <div className="w-[100vw]  fixed bottom-0 h-16  bg-black/30 backdrop-blur-md border-t border-white/20 shadow-lg flex items-center justify-around z-[111] sm:hidden">
      <BottomBarLink href="/" icon={<IoHomeOutline />} label="Home" />
      <BottomBarLink href="/pages/search/category" icon={<TbCategory2 />} label="Category" />
      <BottomBarLink href="/pages/search/flowframe" icon={<MdOutlineSlowMotionVideo />} label="Flowframe" />
      <BottomBarLink href="/pages/search/raw" icon={<CiVideoOn />} label="Raw" />
      <BottomBarLink href="/pages/search/audio" icon={<LuMusic2 />} label="Audio" />
      <BottomBarLink href="/pages/search/wallpaper" icon={<LuWallpaper />} label="Wallpaper" />
    </div>
  );
};

// Bottom Bar Link Component
const BottomBarLink = ({ href, icon, label }) => {
  return (
    <Link href={href} className="flex flex-col items-center text-white hover:text-teal-400 transition-all">
      <span className="text-2xl">{icon}</span>
      <span className="text-[10px] mt-1">{label}</span>
    </Link>
  );
};

export default Bottombar;
