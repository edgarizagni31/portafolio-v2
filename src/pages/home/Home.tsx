import { Link } from "react-router-dom";

import "./style.css";

export const Home = () => {
  return (
    <header className="header">
      <h1 className="header__title">Hola, soy Edgar Ochoa</h1>
      <p className="header__sub">Web Developer</p>
      <p className="header__desc">
        Soy una persona autodidacta, siempre me gusta aprender cosas nuevas, eso
        me lleva a estar en constante aprendizaje y crecimiento personal. Me gusta transformar ideas 
        en experiencias interactivas y funcionales.
      </p>
      <Link className="header__btn" to="./sobre-mi">
        saber más
      </Link>
    </header>
  );
};
