import { BsEnvelope } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn,  } from "react-icons/fa";

import { ContactItem } from "./ContactItem";

import "./style.css";


export const Contact = () => {
  return (
    <section className="contact">
      <div>
        <h2 className="contact__title">!hablemos!</h2>
        <article className="contact__contacts">
          <ContactItem href="" icon={<BsEnvelope />} user="eom3108@gmail.com" />
          <ContactItem
            icon={<FaGithub />}
            user="Github"
            href="https://github.com/edgarizagni31/"
          />
          <ContactItem
            icon={<FaInstagram />}
            user="Instagram"
            href="https://www.instagram.com/edgarochoa31/"
          />
          <ContactItem
            icon={<FaLinkedinIn />}
            user="Linkedin"
            href="https://www.linkedin.com/in/edgar-ochoa-madrid-0197581b4/"
          />
        </article>
      </div>
    </section>
  );
};
