import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Share/Navbar";
import Footer from "../component/Share/Footer";
import Skill from "../pages/Skill/Skill";
import About from "../pages/About/About";
import Project from "../pages/Project/Project";
import Contact from "../pages/Contact/Contact";

export default function Main() {
  return (
    <div
      className="bg-gradient-to-r border border-gray-400 from-gray-800
    to-[#141E46]    dark:text-white  mx-auto "
    >
      <Navbar />
      <Outlet />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
