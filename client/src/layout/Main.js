import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Share/Navbar";
import Footer from "../component/Share/Footer";
import Message from "../component/message/Message";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Message />
      <Outlet />
      <Footer />
    </div>
  );
}
