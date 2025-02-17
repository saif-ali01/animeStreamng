import React from 'react'
import styles from "./wallpaper.module.css"
import "../../../../globals.css";

const Page = () => {
    return (
        <div className={`ml-60 w-screen flex flex-col items-center   `}>


            <div className={`${styles.boxShadow} h-3/4 w-4/5   overflow-hidden rounded-3xl bg-slate-50 mt-14 relative`}>
                <img
                    src={"/m.jpg"}
                    className={`w-full h-full object-cover`}
                    alt=""
                />
                <div className={`absolute justify-around items-center flex bottom-0 h-20 w-full ${styles.blurBackground}  `} >
                    <h1 className=' text-yellow-400 flex '><span style={{ textShadow: "4px 4px 4px rgb(250 ,204 ,21, 0.3) " }} className={` text-yellow-400  ${styles.textShadow} w-full text-3xl tracking-widest opacity-80  `}> ONE PIECE</span></h1>
                    <h2 className={`text-3xl  ${styles.textShadow}`}> <span style={{ textShadow: "4px 4px 4px rgb(250 ,204 ,21, 0.3) " }} className='text-yellow-400 opacity-80  tracking-widest'>Luffy</span></h2>
                    <h2 className={` text-2xl  ${styles.textShadow}`}> <span style={{ textShadow: "4px 4px 4px rgb(250 ,204 ,21, 0.3) " }} className='  text-yellow-400  opacity-60' tracking-widest>12-02-2012</span></h2>
                </div>
            </div>
            <div className="div w-96  flex  justify-center">
                <div className="cursor-pointer downloadbtn relative bottom-10 right-28  flex justify-center items-center">
                    <a href="/m1.jpg" download className='text-2xl font-bold uppercase  text-black' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Download</a>
                </div>

            </div>

        </div>
    )
}

export default Page;
