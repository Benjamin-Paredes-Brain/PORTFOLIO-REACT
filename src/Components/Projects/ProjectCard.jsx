import { LangContext } from "../Context/LangContext.jsx";
import { useContext } from "react";

export const ProjectCard = () => {
    const { t } = useContext(LangContext);

    const projects = [
        {
            title: "Vurdertrend", img: "/Portada-VurderTrend.png",
            linkGitHub: "https://github.com/Benjamin-Paredes-Brain/ProyectoFinal-ReactJS-BenjaminParedesBrain",
            linkWeb: "https://vurdertrend.netlify.app/",
            descriptionKey: "projectCardDescVurdertrend"
        },
    ]

    return (
        <div className="main_projectCard_container">
            {projects.map((project, index) => (
                <div className="projectCard_container" key={index}>
                    <img className="projectCard_img" src={project.img} alt={project.title} />
                    <p className="projectCard_title">{project.title}</p>
                    <p className="projectCard_description">{t(project.descriptionKey)}</p>
                    <div className="projectCard_button_container">
                        <a className="projectCard_button" href={project.linkGitHub} target="blank">GITHUB</a>
                        <a className="projectCard_button" href={project.linkWeb} target="blank">WEB</a>
                    </div>
                </div>
            ))}


        </div>
    )
}