import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About/About";
import Skill from "../pages/Skill/Skill";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
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
    ],
  },
]);

export default router;
