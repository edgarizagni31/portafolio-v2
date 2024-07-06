import { BsCardText, BsGrid, BsHouseDoor } from "react-icons/bs";
import { NavItem } from "./NavItem";
import { FaTelegramPlane } from "react-icons/fa";

import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo"> &lt;edgarizagni /&gt; </h1>
      <div className="navbar__list">
        <NavItem to="/"> Inicio </NavItem>
        <NavItem to="/sobre-mi">Sobre Mi</NavItem>
        <NavItem to="/proyectos"> Proyectos </NavItem>
        <NavItem to="/contacto"> Contacto </NavItem>
      </div>
      <div className="navbar__list--responsive">
        <NavItem to="/">
          <BsHouseDoor className="navbar__icon" />
        </NavItem>
        <NavItem to="/">
          <BsCardText className="navbar__icon" />
        </NavItem>
        <NavItem to="/">
          <BsGrid className="navbar__icon" />
        </NavItem>
        <NavItem to="/">
          <FaTelegramPlane className="navbar__icon" />
        </NavItem>
      </div>
    </nav>
  );
};
