import React, { useEffect, useState } from "react";
import Aos from "aos";
import { FaAngleUp } from "react-icons/fa";

export default function Message() {
  const [visible, setvisible] = useState(false);

  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const btnlisten = () => {
    let tophidden = 250;
    const winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winscroll > tophidden) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", btnlisten);
    return window.removeEventListener("scroll", btnlisten);
  });

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-cubic", once: true });
  });

  return (
    <div
      data-aos="fade-up"
      className="fixed bottom-5 right-5 max-w-[1200px] text-gray-100  dark:text-white text-black md:right-[150px] "
    >
      {visible ? (
        <button onClick={() => gotobtn()}>
          <FaAngleUp className="text-2xl animate-bounce shadow-lg " />
        </button>
      ) : (
        <button onClick={() => gotobtn()}>
          <FaAngleUp className="text-2xl animate-bounce shadow-lg " />
        </button>
      )}
      <button></button>
    </div>
  );
}
