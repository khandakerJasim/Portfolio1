import React from "react";
import joshim from "./../../Assets/joshim2.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto bg-gradient-to-r from-slate-700 to-slate-900 text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-7 ">
        <div className="grid justify-center">
          <figure className="bg-[#F16C6C] hover:bg-yellow-500 rounded-full shadow-md overflow-hidden ">
            <img
              src={joshim}
              className="h-[350px] w-[350px] rounded-full object-cover p-2 hover:scale-125 duration-500 "
              alt=""
            />
          </figure>
        </div>
        <div className=" grid p-3  ">
          <h1 className="text-3xl  w-[180px] uppercase font-extrabold relative before:absolute before:block before:left-0 before:top-9 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:ease-in-out before:origin-top-middle before:content-[' '] ">
            about me
          </h1>
          <h1 className="mt-2 text-xl font-bold text-[#F16C6C] ">
            {" "}
            I'Am Fullstack Webdeveloper
          </h1>
          <p className="sm:mt-3 mt-1  text-extabold md:w-[500px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            illum facere! Ducimus provident non praesentium aut culpa illo
            totam? Cupiditate, eius quidem! Harum perspiciatis itaque, ratione
            magnam commodi atque accusamus fuga eos, excepturi voluptatibus ea
            nam. Iure illo tempore quisquam.
          </p>
          <div className="flex mt-7 gap-10">
            <Link>
              <button
                data-aos="fade-left"
                className=" bg-gradient-to-r
           from-yellow-400 to-[#9A4444] h-10 text-md font-bold p-2 rounded-md shadow-5xl hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer flex items-center  "
              >
                know more
              </button>
            </Link>

            <Link to="/Contact">
              <button
                data-aos="fade-down"
                className=" bg-gradient-to-r
              
           from-[#FA7070] to-[#9A4444] text-md font-bold p-2 rounded-md shadow-md hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer "
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
