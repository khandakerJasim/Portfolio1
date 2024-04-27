import { delay, motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [open, setopen] = useState("");

  const varient = {
    open: {
      clipPath: "circle(1200)",
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="fixed md:top-2 md:left-[130px] top-2 left-2 bg-black   "
    >
      <div
        onClick={() => setopen(!open)}
        className="text-black text-md p-1 rounded-full bg-white  "
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div>
        <ul className={`${open && "border-b"}`}>
          <li>joshim</li>
          <li>joshim</li>
          <li>joshim</li>
          <li>joshim</li>
          <li>joshim</li>
        </ul>
      </div>
    </motion.div>
  );
}
