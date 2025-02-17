import React from 'react';
import styles from "./header.module.css";
import { CiSearch } from "react-icons/ci";
import "../../globals.css";
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className=' mt-1 flex sm:flex-col  justify-center' >

        <div className=' w-screen sm:w-full text-white sm:h-[55vh]  '>
          <div className="text-white  z-50 sm:h-12 sm:w-12 w-6  text-4xl">
            <div className={`${styles.searchbox} z-50 flex justify-center sm:p-2 sm:w-16 w-10 sm:border-2 border-[#dddacd] items-center`}>
              <input type="text" className={`${styles.inputsearch} w-full h-full text-black  text-xl`} name="txt" />
              <div className={`${styles.search} `}>
                <CiSearch className='border-none text-gray-300 text-4xl font-bold' />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderLeft: "5px solid rgba(255,255,255,0.1)",
              borderBottom: "5px solid rgba(255,255,255,0.1)"
            }}
            className="h-5/6 w-full sm:flex hidden z-10 ml-12 rounded-3xl overflow-hidden "
          >
            <Image
              src='https://images.hdqwalls.com/download/goku-radiant-super-saiyan-form-qz-3840x2160.jpg'
              width={840}  // You can keep the width as it is, but we'll ensure it stretches correctly
              height={2160} // Same for height, it's just used as a reference
              className={`z-20 object-cover ${styles.bgImg}`}
              alt="Goku Super Saiyan"
              style={{
                width: '100%',  // Make the image take the full width of the parent div
                height: 'auto', // Ensure the aspect ratio is maintained
              }}
            />
          </div>

        </div>

        <div className={`sm:relative sm:bottom-24 z-50 left-32  flex sm:flex-col flex-row-reverse`}>
          <div className="  flex justify-end sm:justify-start ">
            <div className={`${styles.boxShadow} overflow-hidden rounded-full sm:h-44 sm:w-44 h-12 w-12 `}>
              <Image
                src='https://i.pinimg.com/originals/cb/e2/1b/cbe21b76cc9a301c49a13dbed70ff162.jpg'
                width={500}
                height={500}
                className={styles.profileImg}
                alt="Profile"
              />
            </div>
          </div>
          <div className='w-full flex flex-col-reverse sm:flex-row items-end sm:items-center gap-2'>
            <h1 className={`border-b-2 border-gray-500  sm:text-4xl text-base text-gray-300  mt-3 robo  `}>

              @badxboy350
            </h1>

          </div>

        </div>
      </div>
    </>
  );
}

export default Header;