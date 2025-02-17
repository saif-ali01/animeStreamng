"use client"
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
  const [isHovered, setIsHovered] = useState(false);
  
  const followStyle = {
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  };

  return (
    <div
      style={{ borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}
      className={`h-screen w-full border-white robo ${styles.nav}`}
    >
      <div className="w-46 flex">
        <ul className="ml-7 tracking-widest">
          <li>
            <h1 className="text-white mt-8 tracking-widest text-2xl">ℬ𝒶𝒹𝓍𝒷ℴ𝓎</h1>
          </li>
          <Link href={"/"}>
            <li className={styles.ulsidebar}>
              <IoHomeOutline className="text-2xl" />
              <h2 className="tracking-widest ml-4">Home</h2>
            </li>
          </Link>
          <Link href={"/pages/search/category"}>
            <li className={styles.ulsidebar}>
              <TbCategory2 className="tracking-widest text-2xl" />
              <h2 className="ml-4">Category</h2>
            </li>
          </Link>
          <Link href={"/pages/search/flowframe"}>
            <li className={styles.ulsidebar}>
              <MdOutlineSlowMotionVideo className="text-2xl" />
              <h2 className="ml-4">Flowframe</h2>
            </li>
          </Link>
          <Link href={"/pages/search/raw"}>
            <li className={styles.ulsidebar}>
              <CiVideoOn className="text-2xl" />
              <h2 className="ml-4">Raw</h2>
            </li>
          </Link>
          <Link href={"/pages/search/audio"}>
            <li className={styles.ulsidebar}>
              <LuMusic2 className="text-2xl" />
              <h2 className="ml-4">Anime Dialogue</h2>
            </li>
          </Link>
          <Link href={"/pages/search/wallpaper"}>
            <li className={styles.ulsidebar}>
              <LuWallpaper className="text-2xl" />
              <h2 className="ml-4">Anime Wallpaper</h2>
            </li>
          </Link>
        </ul>
      </div>
      <div className="ml7">
        <ul style={followStyle} className="mt-5 tracking-widest">
          <li className="text-slate-100 robo flex ml-7 items-center text-base mt-8">
            <h1>Follow Us</h1>
          </li>
          <li className="text-slate-100 robo flex ml-7 items-center text-base mt-8">
            <FaInstagram className="text-2xl" />
            <h2 className="ml-4 robo">Instagram</h2>
          </li>
          <li className="text-slate-100 ml-7 robo flex items-center text-base mt-8">
            <FaYoutube className="text-2xl" />
            <h2 className="ml-4 robo">Youtube</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
