import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Share/Navbar";
import Footer from "../component/Share/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
