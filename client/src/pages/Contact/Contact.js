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
    <div>
      <h1>joshim uddin</h1>
    </div>
  );
}
