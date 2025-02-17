import React from 'react'
import "../../globals.css";
import AudioCard from './AudioCard'
const Dialogue = () => {
  const dummyData = {
    previewImage: '/m.jpg',
    audioSource: '/audio.mp',
    title: 'Luffy Dialouge',
    desc: "if I give up now Im going to regret it"
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mt-11  w-full">
       <div className="text-yellow-400  text-3xl uppercase inline-flex border-b-2 border-yellow-400 font-bold tracking-wider ml-11 font-serif">
        <h1 className='robo mb-2 '>#Dialogue</h1>
      </div>
      <div className=" mt-3 ml-4">
      <div className="mt-3 grid xl:grid-cols-3  sm:grid-cols-2 gap-4 ">
      {numbers.map((number) => (
          <AudioCard key={number} data={dummyData} />
        ))}
      </div>
      </div>
    
    </div>
  )
}

export default Dialogue