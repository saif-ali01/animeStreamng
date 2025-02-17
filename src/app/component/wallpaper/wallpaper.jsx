import React from 'react'
import "../../globals.css";
import WallpaperCard from "./WallpaperCard"
const Wallpaper = () => {
  const dummyData = {
    image: '/m.jpg',
    title: 'one piece',
    date: '2024-02-14',
    
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12];
  return (
    <div className='text-white mt-11'>
      <div className="text-yellow-400  text-3xl uppercase inline-flex border-b-2 border-yellow-400 font-bold tracking-wider ml-11 font-serif">
        <h1 className='robo mb-2 '>#Wallpaper</h1>
      </div>
      <div className="Wallpapercard">
       <div className="flex flex-wrap "> 
       {numbers.map((number) => (
          <WallpaperCard key={number} dummyData={dummyData} />
        ))}</div>
      </div>

    </div>
     
  )
}

export default Wallpaper