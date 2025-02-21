import React from 'react'
import { CiSearch } from 'react-icons/ci'

const TopBar = () => {
    return (
        <div className="w-[100vw]  z-[111] bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg  fixed top-0 py-2 flex items-center  justify-between ">
            {/* Name */}
            <div className="text-lg font-bold ml-5 w-full flex justify-between  ">
                <h1 className='sm:text-2xl text-lg text-blue-600 font-grey-qo underline '>
                    Ispase~Anime
                </h1>
                {/* Search */}
                <CiSearch className="w-10 sm:h-10 h-9  absolute right-10 sm:left-[70vw] text-gray-300" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default TopBar
