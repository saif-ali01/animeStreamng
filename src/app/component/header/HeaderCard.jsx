import Image from "next/image";
  const HeaderCard = ({ data }) => {
    return (
      <div className=" w-40 overflow-hidden flex flex-col mt-5 rounded-sm shadow-md shadow-slate-700 justify-center items-center overflow-x-hidden" >
        <div className="relative h-[40vh] w-full  bg-cover bg-center transition-opacity duration-500 ease-in-out">
          <Image src={data.previewImage} alt="not load" fill loading="lazy" />
        </div>
        <div className="absolute mt-[33vh] w-40 flex flex-col justify-between mx-2 font-serif  h-12 bg-[rgba(0,0,0,0.8)]">
          <div className=" text-gray-400 line-clamp-1 "><h1>{data.title}</h1></div>
          <div className="text-yellow-300 ">{data.type}</div>
        </div>
      </div>
    );
  };

  export default HeaderCard;
