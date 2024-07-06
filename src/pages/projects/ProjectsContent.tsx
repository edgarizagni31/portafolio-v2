import { Children } from "react";
import projects from "../../api/projects.json";
import { ProjectItem } from "./ProjectItem";

export const ProjectsContent = () => {
  return (
    <article className="projects__content">
      {Children.toArray(
        projects.map((project) => <ProjectItem {...project} />)
      )}
    </article>
  );
};
