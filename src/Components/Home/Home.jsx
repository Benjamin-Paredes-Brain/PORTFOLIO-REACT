import { Navbar } from "../Navbar/Navbar.jsx"
import { ArrowButton } from "./ArrowButton"

export const Home = () => {

    return (
        <div className="main_home_container">
            <div className="home_container">
                <div>
                    <h1 className="title_home">BENJAMIN MARTIN PAREDES BRAIN</h1>
                    <h2 className="subtitle_home">FULLSTACK DEVELOPER</h2>

                    <Navbar />
                </div>


                <div className="about_container">
                    <p className="about">Hi, I'm Benjamin Martin Paredes Brain, a programming enthusiast who embarked on this exciting journey in the year 2022. Since then, I have a deep admiration for this coding and programming art, also I consider myself as a person committed to constant learning.</p>
                    <p className="about">My current focus revolves around craft high-quality web applications and continuously improving my professional skills. My goal is to push my own every day, offering increasingly innovative and efficient results to technological challenges we confront.</p>
                    <p className="about">In the other hand, I enjoy nurturing my mind through books, exploring new worlds by reading and acquiring knowledge. In addition, I'm passionate about well-being and health. You'll regularly find me at the gym, working on my mind and body.</p>
                </div>

            </div>
            <ArrowButton />
        </div>
    )
}





