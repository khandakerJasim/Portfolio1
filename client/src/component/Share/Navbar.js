import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setopen] = useState("");
  const [Scroll, setscroll] = useState("");

  const handlescroll = () => {
    if (window.scrollY > 0) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  window.addEventListener("scroll", handlescroll);

  const handleopen = () => {
    setopen(!open);
  };

  return (
    <div
      className={`  
      dark:bg-[#141E46]  h-[80px]  sticky top-0 z-50  dark:text-white   max-w-[1200px] mx-auto ${
        Scroll ? "delay-200 duration-300 " : "bg-transparent text-black"
      } `}
    >
      <div className="flex justify-between items-center p-4   ">
        <div className="flex items-center justify-between gap-[300px] ">
          {/* <img src="" alt="" /> */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-bold hidden md:block text-[#FA7070]  "
          >
            joshim
          </motion.span>

          <ul className=" hidden md:flex gap-3 text-md font-extrabold  ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/Project">
              <li>Project</li>
            </Link>
            <Link to="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
          <div
            onClick={handleopen}
            className=" md:hidden absolute left-2 top-3 text-xl  "
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div>
          <div
            className={`${
              open
                ? " fixed left-0 top-5 mt-5 z-1 shadow-5xl h-[200px] rounded-lg mr-5 pl-3 bg-[#141E46]  w-[130px]  text-white transition-all  ease-in duration-300 "
                : " fixed left-[-1100px]  "
            }`}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className=" text-pink-500 text-2xl font-bold "
            >
              joshim
            </motion.span>

            <ul className=" text-white pb-10 mt-2   ">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/About">
                <li>About</li>
              </Link>
              <Link to="/Project">
                <li>Project</li>
              </Link>
              <Link to="/Contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <button className="border border-yellow-700 bg-gradient-to-r from-[#FA7070] to-[#9A4444] text-md font-bold p-2 rounded-md shadow-md hover:bg-gradient-to-l from-[#9A4444] to-[#FA7070] cursor-pointer ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
