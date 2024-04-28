import React, { useEffect } from "react";
import Aos from "aos";
import { FaAngleUp } from "react-icons/fa";

export default function Message() {
  useEffect(() => {
    Aos.init({ duration: 700, easing: "ease-in-cubic", once: true });
  });
  return (
    <div
      data-aos="fade-up"
      className="fixed bottom-5 right-5 max-w-[1200px] md:block dark:text-white text-black md:right-[150px] "
    >
      <button>
        <FaAngleUp className="text-2xl animate-bounce shadow-lg " />
      </button>
    </div>
  );
}
