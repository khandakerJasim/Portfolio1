import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Share/Navbar";
import Footer from "../component/Share/Footer";

export default function Main() {
  return (
    <div className="bg-gradient-to-r from-[#141E46] to-[#030637] dark:text-white ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
