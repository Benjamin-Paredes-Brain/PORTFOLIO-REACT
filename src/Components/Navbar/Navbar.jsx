import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { LangContext } from "../Context/LangContext.jsx";
import { useContext } from "react";
import { TranslateButton } from "../Language/TranslateButton.jsx"

export const Navbar = () => {
    const { t } = useContext(LangContext);

    return (
        <>
            <nav className="navbar_container" id='navbar'>
                <a className="navbar_link" href="#projects"> <FontAwesomeIcon className='navbar_icon' icon={faCode} /> <p className='navbar_txt'>{t("navPROJECTS")}</p> </a>
                <a className="navbar_link" href="#skills"> <FontAwesomeIcon className='navbar_icon' icon={faBolt} /><p className='navbar_txt'>{t("navSKILLS")}</p></a>
                <a className="navbar_link" href="#contact"> <FontAwesomeIcon className='navbar_icon' icon={faUser} /><p className='navbar_txt'>{t("navCONTACT")}</p></a>
            </nav>

            <TranslateButton />
        </>
    )
}

