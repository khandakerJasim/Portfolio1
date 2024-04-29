import React from "react";
import { Link } from "react-router-dom";
import { TiArrowForward } from "react-icons/ti";

export default function Projectcard({ datas }) {
  return (
    <div className=" grid  justify-center mx-auto  ">
      <div className="relative w-full flex  ">
        <figure>
          <img
            className="object-cover bg-no-repeat h-[250px] w-[360px] rounded-md "
            src={datas.image}
            alt=""
          />
        </figure>
        <div className="absolute  items-center justify-center mx-auto top-20 left-[70px]  ">
          <h1 className="text-sm font-extrabold text-white text-center  p-2 rounded-full ">
            {datas.name}
          </h1>
          <p className="text-center w-[250px] ">{datas.des}</p>
          <div className="flex mt-9 gap-2 pr-5">
            <button
              data-aos="fade-up"
              className=" bg-gradient-to-r
           from-[#FA7070] to-[#9A4444] w-[100px] text-sm font-bold p-2 rounded-md shadow-5xl hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer flex items-center gap-1 "
            >
              <TiArrowForward className="text-sm rounded-full" />
              Link
            </button>

            <Link to="/Contact">
              <button
                data-aos="fade-right"
                className=" bg-gradient-to-r
              
           from-yellow-500 to-[#9A4444] text-sm font-bold p-2 rounded-md shadow-md hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer w-[100px]  "
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
