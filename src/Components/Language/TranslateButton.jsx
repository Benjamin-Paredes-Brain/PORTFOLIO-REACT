import { LangContext } from "../Context/LangContext.jsx";
import { useContext } from "react";

export const TranslateButton = () => {
    const { t } = useContext(LangContext);

    const { handleChangeLanguage } = useContext(LangContext);

    return (

        <div className="translate_container">
            <button className="translate_button" onClick={() => handleChangeLanguage('en')}>{t("buttonES")}</button>
            <button className="translate_button" onClick={() => handleChangeLanguage('es')}>{t("buttonEN")}</button>
        </div>

    )
}