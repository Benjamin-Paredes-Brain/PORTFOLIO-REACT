import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faSass, faReact, faNode, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Cards = () => {

    const skills = [
        { icon: faHtml5, color: "#fd490b", title: "HTML 5" },
        { icon: faCss3, color: "#2299f8", title: "CSS 3" },
        { icon: faJs, color: "#f6de1d", title: "JAVASCRIPT" },
        { icon: faSass, color: "#ce649b", title: "SASS" },
        { icon: faReact, color: "#62dafc", title: "REACT JS" },
        { icon: faNode, color: "#82cc29", title: "NODE" },
        { icon: faGitAlt, color: "#f05032", title: "GIT" },
        { icon: faGithub, color: "#000101", title: "GITHUB" },
      ];
      

    return (
        <div className="card_skill_container">
        {skills.map((skill, index) => (
          <div className="card_skill" key={index}>
            <div className="icon_skill">
              <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />
            </div>
            <p className="icon_skill_title">{skill.title}</p>
          </div>
        ))}
      </div>
    )
}