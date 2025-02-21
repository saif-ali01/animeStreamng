import React from "react";
import Topbar from "../../component/Nav/TopBar";
import Cards from "../../component/card/cards";
import HeaderWrapper from "../../component/header/HeaderWrapper"; // Use the lazy-loaded wrapper
import Hero from "../../component/hero/hero";
import Wallpaper from "../../component/wallpaper/wallpaper";
import Dialog from "../../component/Dialog/Dialog";
import Footer from "../../component/footer/footer";
import NewCardsWrapper from "../../component/card/NewCardsWrapper";

const Home = () => {
  return (
    <div className="sm:w-[full] w-full flex justify-center flex-col">
      <Topbar />
      <HeaderWrapper />
      <NewCardsWrapper />
      <Wallpaper />
      <Dialog />
      <Footer />
    </div>
  );
};

export default Home;
