"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeaderSkeleton from "./HeaderSkeleton";

// Lazy load Header1
const Header1 = dynamic(() => import("./Header1"), {
  ssr: false,
  loading: () => <HeaderSkeleton />, // Show skeleton while loading
});

const HeaderWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <Header1 /> : <HeaderSkeleton />;
};

export default HeaderWrapper;
