import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Hero from "../Hero/Hero";

export default function Home() {
  return (
    <>
      <About />
      <Hero />
      <Skill />
      <Project />

      <Contact />
    </>
  );
}
