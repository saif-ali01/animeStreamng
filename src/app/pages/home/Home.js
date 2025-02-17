
import React from 'react'
import Cards from "../../component/card/cards"
import Header from '../../component/header/header';
import Hero from "../../component/hero/hero"
import Wallpaper from "../../component/wallpaper/wallpaper"
import Dialog from "../../component/Dialog/Dialog"
import Footer from "../../component/footer/footer"


const Home = () => {
    return (
        <div className="sm:w-[full] w-full  flex justify-center flex-col">
            <Header />
            <Hero/>
            <Cards/>
            <Wallpaper />
            <Dialog />
            <Footer/>
        </div>

    )
}

export default Home