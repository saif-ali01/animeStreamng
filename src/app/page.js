import React from 'react'
import Home from './pages/home/Home'
import NewCard from "./component/card/NewCard"
import WallpaperPage from './pages/download/wallpaper/[wallpaperId]/page'
import WallpaperCardSkeleton from "./component/wallpaper/WallpaperCardSkeleton"
const page = () => {
  return (
    <div className="overflow-x-hidden " ><Home /></div>
  )
}

export default page