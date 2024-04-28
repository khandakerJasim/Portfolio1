import React, { useState } from "react";

export default function Contact() {
  // const [data, setdata] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   message: "",
  //   mobile: "",
  // });
  // const handlechange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setdata(() => {
  //     return {
  //       ...(data[name] = value),
  //     };
  //   });
  // };
  // const handleclick = async (e) => {
  //   e.preventDefault();
  //   const { name, username, email, message, mobile } = data;

  //   //console.log("registration successfull");
  //   const fetchdata = await fetch("http://localhost:4000/api/post", {
  //     method: "Post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       username: username,
  //       email: email,
  //       mobile: mobile,
  //       message: message,
  //     }),
  //   });
  //   const res = await fetchdata.json();
  //   console.log(res);
  // };

  return (
    <div className="max-w-[1200px] dark:text-white bg-gradient-to-r from-slate-900 to-slate-700  mx-auto ">
      <div className="py-10">
        <p
          className="text-2xl font-extrabold uppercase w-[200px] mx-auto text-center text-base-2  bg-transparent  relative
         before:content-[''] before:absolute before:block before:w-full before:h-[3px] 
        before:bottom-0 before:left-0 before:bg-red-500
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
        before:transition before:ease-in-out before:duration-300 "
        >
          Contact me
        </p>
        <div className="mx-auto flex  justify-center mt-4  pb-4 ">
          <form className="flex flex-col py-2 " action="">
            <input
              type="text"
              placeholder="enter your name"
              className="md:w-[600px] w-full bg-transparent border-b-2  border-gray-400 hover:outline-none focus:outline-none p-2 "
              name="name"
            />
            <input
              type="email"
              name="email"
              placeholder="md.example@gmail.cpm"
              className="md:w-[600px] w-[300px]  bg-transparent  pt-3 border-b-2 border-gray-400 hover:outline-none focus:outline-none p-2  "
            />
            <input
              type="phone"
              name="email"
              placeholder=" enter your phone"
              className="md:w-[600px] w-full bg-transparent  pt-3 border-b-2 border-gray-400 hover:outline-none focus:outline-none p-2  "
            />
            <textarea
              className="md:w-[600px]w-full bg-transparent h-[100px]  pt-3 border-b-2 border-gray-400 hover:outline-none focus:outline-none p-2  "
              name="message"
              id=""
              placeholder=" your  message"
            ></textarea>

            <div className="mt-10">
              <button
                className=" bg-gradient-to-r w-full
           from-[#FA7070] to-[#9A4444] text-md font-bold p-2 rounded-md shadow-md hover:bg-gradient-to-l
            from-[#9A4444] to-[#9A4444] cursor-pointer "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
