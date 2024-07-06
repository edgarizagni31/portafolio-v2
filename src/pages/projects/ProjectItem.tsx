import { FaGlobeAmericas } from "react-icons/fa";
import technologies from "../../api/tecnologies.json";
import { Children } from "react";

export const ProjectItem = ({ name, description, link, tec, owner }: any) => {
  const tecImages = tec.map((t: string) => {
    const find = technologies.find(
      (tec) => tec.name.toUpperCase() === t.toUpperCase()
    );

    return find?.icon;
  });

  return (
    <article className="project__card">
      <h3 className="project__title">{name}</h3>
      <p className="project__desc"> {description} </p>
      <div className="project__tecs">
        {Children.toArray(
          tecImages.map((image: string) => <img src={image} />)
        )}
      </div>
      <div className="project__btns">
        {link && (
          <a href={link} className="project__repo" target="__blank">
            <div className="div">
              <FaGlobeAmericas className="div__icon" />
              <p> Proyecto </p>
            </div>
          </a>
        )}
      </div>
      <div className="project__owner">
        <img width={32} height={32} src={owner.image} />
        <p> {owner.name} </p>
      </div>
    </article>
  );
};
