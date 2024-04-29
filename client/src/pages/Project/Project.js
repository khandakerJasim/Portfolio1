import React, { useState } from "react";
import ecommerc from "./../../Assets/Project/ecommerce.jpg";
import food from "./../../Assets/Project/food.jpg";
import medical from "./../../Assets/Project/medical.jpg";
import tour from "./../../Assets/Project/tour.jpg";
import portfolio from "./../../Assets/Project/portfolio.jpg";
import Projectcard from "./Projectcard";

export default function Project() {
  // const [data, setdata] = useState({ username: "", email: "" });

  // const handlechange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setdata((e) => {
  //     return {
  //       ...(data[name] = value),
  //     };
  //   });
  // };

  // const handleclick = async (e) => {
  //   e.preventDefault();
  //   const { username, email } = data;
  //   const fetchdata = await fetch("http://localhost:4000/api/post1", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //     }),
  //   });
  //   const res = await fetchdata.json();
  //   console.log(res);
  //   console.log("registered successfull");
  // };

  const data = [
    {
      id: 1,
      image: portfolio,
      name: "Portfolio Project ",
      des: "It is very useful project every persons everyday ",
    },
    {
      id: 2,
      image: medical,
      name: "Medical Appoinment Project ",
      des: "It is very useful project every persons everyday ",
    },
    {
      id: 3,
      image: tour,
      name: "Tours Project",
      des: "It is very useful project every persons everyday ",
    },
    {
      id: 4,
      image: food,
      name: "Food Delivery Project",
      des: "It is very useful project every persons everyday ",
    },
    {
      id: 5,
      image: ecommerc,
      name: "Ecommerce project",
      des: "It is very useful project every persons everyday ",
    },
  ];
  return (
    <div className="max-w-[1200px] bg-gradient-to-r from-[#1A2438] to-[#212C40] mx-auto text-white ">
      <div className="py-10 pb-16 pt-12 ">
        <h1
          data-aos="fade-down"
          className="text-3xl text-center m-auto  w-[270px] uppercase font-extrabold relative before:absolute before:block before:left-0 before:top-9 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:ease-in-out before:origin-top-middle before:content-[' ']  "
        >
          My Projects
        </h1>

        <div className="grid sm:grid-cols-2 mt-10 md:grid-cols-3 grid-cols-1 gap-5 ">
          {data.map((datas) => (
            <div key={datas.id}>
              <Projectcard datas={datas} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
