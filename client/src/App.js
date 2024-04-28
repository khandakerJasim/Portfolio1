import { RouterProvider } from "react-router-dom";
// import Footer from "./component/Share/Footer";
// import Navbar from "./component/Share/Navbar";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Project from "./pages/Project/Project";
// import Skill from "./pages/Skill/Skill";
// import Home from "./pages/Home/Home";
import router from "./routs/Router";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
