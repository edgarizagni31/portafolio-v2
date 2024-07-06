import projects  from "../../api/projects.json";
import { ProjectItem } from "./ProjectItem";

export const ProjectsContent = () => {
  return (
    <article className="projects__content">
      {projects.map((project) => (
        <ProjectItem {...project}  />
      ))}
    </article>
  );
};
