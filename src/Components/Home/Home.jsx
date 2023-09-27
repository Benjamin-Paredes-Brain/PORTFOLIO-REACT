import { Navbar } from "../NavBar/Navbar"
import { ArrowButton } from "./ArrowButton"

export const Home = () => {

    return (
        <div className="main_home_container">
            <div className="home_container">
                <div>
                    <h1 className="title_home">BENJAMIN MARTIN PAREDES BRAIN</h1>
                    <h2 className="title_home subtitle_home">FRONTEND DEVELOPER</h2>

                    <Navbar />
                </div>


                <div className="about_container">
                    <p className="about">Hi, I'm Benjamin Martin Paredes Brain, a programming enthusiast who embarked on this exciting journey in the year 2022. Since then, I've cultivated a deep admiration for the art of coding and immerse myself in a constant learning process.</p>
                    <p className="about">My current focus revolves around crafting high-quality web applications and continuously advancing my professional skills. My aim is to push my own boundaries every day, offering increasingly innovative and efficient solutions to the technological challenges we encounter.</p>
                    <p className="about">Outside the realm of programming, I relish diving into the pages of books, exploring new worlds through reading, and nurturing my mind. Additionally, I'm passionate about well-being and health, and you'll regularly find me at the gym, working on both my body and mind.</p>
                </div>


            </div>
            <ArrowButton />
        </div>
    )
}





