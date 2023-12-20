import { Navbar } from "../Navbar/Navbar.jsx";
import { ArrowButton } from "./ArrowButton";
import { useContext } from "react";
import { LangContext } from "../Context/LangContext.jsx";

export const Home = () => {
    const { t } = useContext(LangContext);

    return (
        <div className="main_home_container">
            <div className="home_container">
                <div>
                    <h1 className="title_home" id="home">{t('title')}</h1>
                    <h2 className="subtitle_home">{t('subtitle')}</h2>
                    <Navbar />
                </div>

                <div className="about_container">
                    <p className="about">{t('intro')}</p>
                    <p className="about">{t('focus')}</p>
                    <p className="about">{t('passion')}</p>
                </div>
            </div>
            <ArrowButton />
        </div>
    );
};



