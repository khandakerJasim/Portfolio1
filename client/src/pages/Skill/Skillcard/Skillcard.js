import React from "react";

export default function Skillcard({ datas }) {
  return (
    <div className="flex flex-col justify-center sm:py-5 py-0 items-center mx-auto ">
      <figure className="border-2 border-yellow-500 rounded-full hover:transition-all ease-in duration-500 ">
        <img
          data-aos="fade-left"
          className="h-[70px] w-[70px] rounded-full border shadow-2xl border-gray-200 p-1 object-cover animate-pulse   "
          src={datas.image}
          alt=""
        />
      </figure>
      <h1 className="pt-1 text-xl font-extrabold  ">{datas.name}</h1>
    </div>
  );
}
