export const ProjectCard = () => {

    const projects = [
        { title: "Vurdertrend", img: "/Portada-VurderTrend.png", linkGitHub: "https://github.com/Benjamin-Paredes-Brain/ProyectoFinal-ReactJS-BenjaminParedesBrain", linkWeb: "https://vurdertrend.netlify.app/", description: "Vurdertrend is an e-commerce website developed entirely with React and utilizing Firebase as the database backend. It features responsive design and various functionalities." },
    ]

    return (
        <div className="main_projectCard_container">
            {projects.map((project, index) => (
                <div className="projectCard_container" key={index}>
                    <img className="projectCard_img" src={project.img} alt={project.title} />
                    <p className="projectCard_title">{project.title}</p>
                    <p className="projectCard_description">{project.description}</p>
                    <div className="projectCard_button_container">
                        <a className="projectCard_button" href={project.linkGitHub} target="blank">GITHUB</a>
                        <a className="projectCard_button" href={project.linkWeb} target="blank">WEB</a>
                    </div>
                </div>
            ))}


        </div>
    )
}