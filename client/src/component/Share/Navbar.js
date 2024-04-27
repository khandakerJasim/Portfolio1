import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Navbar() {
  // const [open, setopen] = useState();

  // const handleopen = () => {
  //   setopen(!open);
  // };

  return (
    <div>
      <TypeAnimation
        sequence={["i am joshom", 1000, "i am Habib", 1000, "i am nasa", 1000]}
        speed={50}
        repeat={Infinity}
        wrapper="span"
      >
        Header joshim
      </TypeAnimation>
      <h1>joshim</h1>
      <p>lorem 10</p>
    </div>
  );
}
