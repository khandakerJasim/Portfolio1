import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About/About";
import Skill from "../pages/Skill/Skill";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";
import Home from "./../pages/Home/Home";
import Message from "../component/message/Message";
import Hero from "../pages/Hero/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Skill",
        element: <Skill />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Message",
        element: <Message />,
      },
      {
        path: "/Hero",
        element: <Hero />,
      },
    ],
  },
]);

export default router;
