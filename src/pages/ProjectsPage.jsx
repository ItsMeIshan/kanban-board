import { useSelector } from "react-redux";
import ProjectCard from "../components/projects/ProjectCard";

function ProjectsPage() {
  const projectsState = useSelector(
    (store) => store?.projectsSlice?.projectsState
  );
  return (
    <div className="flex flex-wrap  justify-evenly">
      {projectsState?.projects?.map((item) => {
        return <ProjectCard key={item?.id} {...item} />;
      })}
    </div>
  );
}

export default ProjectsPage;
