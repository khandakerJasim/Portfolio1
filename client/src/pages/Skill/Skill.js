import React from "react";
import Skillcard from "./Skillcard/Skillcard";
import html from "./../../Assets/Skill/html5.png";
import javscript from "./../../Assets/Skill/javascript.png";
import react from "./../../Assets/Skill/react.png";
import node from "./../../Assets/Skill/node-js.png";
import mongo from "./../../Assets/Skill/html5.png";
import github from "./../../Assets/Skill/github.png";

export default function Skill() {
  const data = [
    {
      id: 1,
      image: html,
      name: "Html And Css",
    },
    {
      id: 2,
      image: javscript,
      name: "Javascript",
    },
    {
      id: 3,
      image: react,
      name: "React js And Redux ",
    },
    {
      id: 4,
      image: node,
      name: "Node js And Express js",
    },
    {
      id: 5,
      image: mongo,
      name: "MongoDB",
    },
    {
      id: 6,
      image: github,
      name: "Git And GitHub",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto dark:text-white bg-gradient-to-r from-slate-700 to-slate-800   ">
      <div className="py-10">
        <h1
          data-aos="fade-down"
          className="text-3xl text-center m-auto  w-[180px] uppercase font-extrabold relative before:absolute before:block before:left-0 before:top-9 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:ease-in-out before:origin-top-middle before:content-[' ']  "
        >
          My Skills
        </h1>
        <div
          data-aos="fade-down"
          className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4   py-7 mt-5  "
        >
          {data.map((datas) => (
            <div key={datas.id}>
              <Skillcard datas={datas} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
