import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre-mi",
        element: <About />,
      },
      {
        path: "/proyectos",
        element: <Projects />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);
