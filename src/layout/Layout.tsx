import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
