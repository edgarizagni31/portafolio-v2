import { Children } from "react";
import technologies from "../../api/tecnologies.json";

export const TechnologiesContent = () => {
  return (
    <div className="tecs">
      {Children.toArray(
        technologies.map(({ icon, name }) => (
          <div className="tec">
            <img src={icon} className="tec__img" alt={name} />
            <p className="tec__text"> {name}</p>
          </div>
        ))
      )}
    </div>
  );
};
