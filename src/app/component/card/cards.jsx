import React from 'react'
import "../../globals.css";
import Card from "./Card"
const Cards = () => {
  const dummyData = {
    previewImage: '/m.jpg',
    videoSource: '/one.mp4',
    title: 'one piece',
    type: 'twistor',
    date: '2024-02-14',
    desc:"One of the defining characteristics of Monkey D. Luffy, the protagonist of One Piece, is his seemingly carefree and sometimes naive nature. Luffy is known for his impulsiveness, lack of strategic thinking at times, and a certain level of stupidity or innocence. However, it's essential to note that his seemingly foolish actions often stem from his genuine and straightforward personality rather than actual stupidity"
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='pt-12'>
      <div className="text-yellow-400  text-2xl font-bold tracking-wider ml-11 font-serif">
        <h1>Twistors</h1>
      </div>
      <div className="mt-3 grid xl:grid-cols-3  sm:grid-cols-2 gap-4">
      {numbers.map((number) => (
          <Card key={number} dummyData={dummyData} />
        ))}
      </div>

    </div>
  )
}

export default Cards