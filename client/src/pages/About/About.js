import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaAddressBook } from "react-icons/fa";

export default function About() {
  // const [data, setdata] = useState([]);
  // const url = "http://localhost:4000/api/email";

  // const getdata = async () => {
  //   const fetthdata = await fetch(url);
  //   const result = await fetthdata.json();
  //   setdata(result);
  // };

  // useEffect(() => {
  //   getdata(url);
  // }, []);
  return (
    <div className="   max-w-[1200px] mx-auto  ">
      <div className="md:flex  md:flex-row  flex-row-reverse py-10 items-center justify-between ">
        <div className="p-3">
          <p className="text-3xl font-bold">
            Hey, <br />
          </p>
          <TypeAnimation
            className="md:text-5xl text-2xl mt-2 font-extrbold text-[#FA7070]"
            sequence={[
              "i am web designer",
              1000,
              "i am ui/UX Designer",
              1000,
              "i am web developer ",
              1000,
              "i am App Developer",
              1000,
            ]}
            wrapper="span"
            repeat={Infinity}
            speed={50}
          />
          <p className="md:w-[400px]  text-sm font-semi-extrabold mt-3 pr-2 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            nobis facere incidunt debitis provident neque aspernatur aliquam
          </p>
          <div className="flex gap-10">
            <button className=" flex items-center gap-2   bg-gradient-to-r mt-7 from-[#FA7070] to-[#9A4444] text-md font-bold p-2 rounded-full shadow-md hover:bg-gradient-to-l from-[#9A4444] to-[#FA7070] w-[120px] text-center cursor-pointer ">
              <FaAddressBook className="text-xl rounded-full" />
              Hire me
            </button>

            <button
              className=" flex items-center gap-2   bg-gradient-to-l mt-7
             from-[#FA7070] to-[#9A4444] text-md font-bold p-2 rounded-full shadow-md hover:bg-gradient-to-r from-[#9A4444] to-[#FA7070]  cursor-pointer w-[120px] "
            >
              Let's Talk
            </button>
          </div>
        </div>
        <div className="px-2">
          <figure className="object-cover overflow-hidden ">
            <img
              className="md:w-[500px] md:h-[500px] w-full  object-cover bg-transparent rounded-2xl hover:scale-105 duration-300 "
              src="https://img.freepik.com/premium-psd/man-with-glasses-green-sweater-stands-front-photo-that-says-company_176841-36674.jpg?w=740"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div>joshim</div>
      <div>uddin</div>
    </div>
  );
}
