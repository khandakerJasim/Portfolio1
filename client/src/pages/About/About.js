import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
//import { FaAddressBook } from "react-icons/fa";
import joshim from "./../../Assets/joshim.jpg";
import { TiArrowForward } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-cubic", once: true });
  });
  return (
    <div className="   max-w-[1200px] mx-auto  dark:text-white bg-gradient-to-r from-slate-900 to-slate-700  ">
      <div className="md:flex  md:flex-row   flex-row-reverse py-10 items-center justify-between ">
        <div className="p-3 flex flex-col justify-center mx-auto">
          <p className="text-3xl font-bold">
            Hey, <br /> i am jasim uddin <br />
          </p>
          <TypeAnimation
            className="md:text-5xl text-2xl mt-2 font-extrbold text-[#FA7070]"
            sequence={[
              "Web designer",
              1000,
              " Ui/UX Designer",
              1000,
              "  Web developer ",
              1000,
              "  App Developer",
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
          <div className="flex mt-10 gap-10">
            <button
              data-aos="fade-up"
              className=" bg-gradient-to-r
           from-[#FA7070] to-[#9A4444] text-md font-bold p-2 rounded-md shadow-5xl hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer flex items-center gap-1 "
            >
              <TiArrowForward className="text-2xl rounded-full" />
              Hire me
            </button>

            <Link to="/Contact">
              <button
                data-aos="fade-right"
                className=" bg-gradient-to-r
              
           from-yellow-500 to-[#9A4444] text-md font-bold p-2 rounded-md shadow-md hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer "
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
        <div className="px-2">
          <figure className="object-cover overflow-hidden ">
            <img
              className="md:w-[500px] md:h-[500px] w-full  object-cover bg-transparent rounded-2xl hover:scale-105 duration-300 "
              src={joshim}
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
