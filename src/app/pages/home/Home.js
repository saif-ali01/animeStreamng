
import React from 'react'
import Topbar from "../../component/Nav/TopBar"
import Cards from "../../component/card/cards"
import Header1 from '../../component/header/Header1';
import Hero from "../../component/hero/hero"
import Wallpaper from "../../component/wallpaper/wallpaper"
import Dialog from "../../component/Dialog/Dialog"
import Footer from "../../component/footer/footer"

const Home = () => {
   
    return (
        <div className="sm:w-[full] w-full  flex justify-center flex-col">
            <Topbar />
            <Header1 />
            {/* <Hero/> */}
            <Cards/>
            <Wallpaper />
            <Dialog />
            <Footer/>
        </div>

    )
}

export default Home