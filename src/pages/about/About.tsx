import { TechnologiesContent } from "./TechnologiesContent";

import "./styles.css";

export const About = () => {
  return (
    <section className="about">
      <article className="about__interests">
        <h2 className="about__title">Intereses</h2>
        <p className="about__desc">
          Me encanta el desarrollo web ya que me permite crear aplicaciones 
          interactivas y  dinámicos que pueden impactar y mejorar la experiencia de usuario de manera significativa. 
          Es emocionante crear soluciones innovadoras que sean útiles y atractivas para los usuarios.<br />
          Soy una persona autodidacta, día a día me dedico tiempo en aprender
          nuevas habilidades que me ayuden a mejorar como desarrollador.
        </p>
      </article>
      <article className="about__technologies">
        <h2 className="about__title">Tecnologías</h2>
        <TechnologiesContent />
      </article>
    </section>
  );
};
