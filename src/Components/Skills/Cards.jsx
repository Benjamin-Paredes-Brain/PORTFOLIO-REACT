import { FaHtml5, FaCss3, FaJs, FaSass, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiHandlebarsdotjs  } from "react-icons/si";

export const Cards = () => {

  const skills = [
    { icon: FaHtml5, color: "#fd490b", title: "HTML 5" },
    { icon: FaCss3, color: "#2299f8", title: "CSS 3" },
    { icon: FaJs, color: "#f6de1d", title: "JAVASCRIPT" },
    { icon: FaSass, color: "#ce649b", title: "SASS" },
    { icon: FaReact, color: "#62dafc", title: "REACT JS" },
    { icon: FaNode, color: "#82cc29", title: "NODE" },
    { icon: FaGitAlt, color: "#f05032", title: "GIT" },
    { icon: FaGithub, color: "#000101", title: "GITHUB" },
    { icon: DiMongodb, color: "#58ac44", title: "MONGODB" },
    { icon: SiExpress, color: "#00000", title: "EXPRESSJS" },
    { icon: SiSocketdotio, color: "#00000", title: "SOCKETIO" },
    { icon: SiHandlebarsdotjs, color: "#ffffff", title: "HANDLEBARS" },
  ];
  


  return (
    <div className="card_skill_container">
      {skills.map((skill, index) => (
        <div className="card_skill" key={index}>
          <div className="icon_skill">
            <skill.icon style={{ color: skill.color }} />
          </div>
          <p className="icon_skill_title">{skill.title}</p>
        </div>
      ))}
    </div>
  )
}