import React from "react";
import About from "./../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

export default function Home() {
  return (
    <>
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
