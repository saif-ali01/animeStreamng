import React from 'react';
import "../../globals.css";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-32 pb-40 sm:mt-20 md:mt-28 bg-black text-white flex flex-col items-center px-4 sm:px-8 lg:px-16 py-12">
      {/* Logo */}
      <h1 className="textShadow1 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-center">
        ANIME TWISTORS
      </h1>

      {/* Description */}
      <p className="w-full sm:w-4/5 lg:w-3/5 text-gray-400 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 opacity-85 mt-5 sm:mt-7 text-center tracking-widest uppercase">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati autem architecto sint aut sequi, provident consectetur non facilis maxime ullam atque iste pariatur.
      </p>

      {/* Social Icons */}
      <div className="w-40 sm:w-60 mt-6 sm:mt-9 flex justify-center space-x-6 sm:space-x-10 text-3xl sm:text-4xl">
        <SlSocialYoutube className="hover:text-red-500 transition-all duration-300 cursor-pointer" />
        <SlSocialInstagram className="hover:text-pink-800 transition-all duration-300 cursor-pointer" />
        <SlSocialLinkedin className="hover:text-blue-800 transition-all duration-300 cursor-pointer" />
      </div>

      {/* Copyright & Developer Info */}
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center text-gray-500 uppercase text-xs sm:text-sm lg:text-lg mt-6 sm:mt-9">
        <div className="flex items-center">
          Copyright <FaRegCopyright className="ml-2 mr-2" /> 2024
        </div>
        <div className="flex items-center mt-3 sm:mt-0">
          Developed by 
          <span className="hover:text-blue-800 ml-2 cursor-pointer">Saif_Ali</span>
          <SlSocialLinkedin className="hover:text-blue-800 ml-2 mb-1 text-2xl sm:text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
