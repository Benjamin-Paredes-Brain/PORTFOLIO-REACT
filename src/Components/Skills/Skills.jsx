import { Cards } from "./Cards"
import { LangContext } from "../Context/LangContext.jsx";
import { useContext } from "react";

export const Skills = () => {
    const { t } = useContext(LangContext);

    return (
        <div className="main_skills_container" id="skills">
            <h1 className="title">{t("titleSectionSkills")}</h1>

            <Cards />
        </div>

    )

}

