import { ReactNode } from "react";
import { NavLink, To } from "react-router-dom";

type Props = {
  to: To;
  children: ReactNode;
};

export const NavItem = ({ to, children }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `navbar__item ${isActive ? "navbar__item--active" : ""}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
