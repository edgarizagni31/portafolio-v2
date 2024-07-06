import { ReactNode } from "react";

type Props = {
  href: string;
  icon: ReactNode;
  user: String;
};

export const ContactItem = ({ href, icon, user }: Props) => {
  return (
    <div className="contact__item">
      <p className="contact__icon"> {icon} </p>
      <a href={href} className="contact__text" target="__blank">
        {" "}
        {user}{" "}
      </a>
    </div>
  );
};
