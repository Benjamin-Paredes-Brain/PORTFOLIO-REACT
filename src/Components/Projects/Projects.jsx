import { ProjectCard } from "./ProjectCard"
import { LangContext } from "../Context/LangContext.jsx";
import { useContext } from "react";

export const Projects = () => {
    const { t } = useContext(LangContext);

    return (
        <div className="projects_container" id="projects">
            <h1 className="title">{t("titleSectionProjects")}</h1>

            <ProjectCard />
        </div>
    )
}