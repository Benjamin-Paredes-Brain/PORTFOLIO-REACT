import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCode, faUser } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    return (
        <nav className="navbar_container" id='navbar'>
            <a className="navbar_link" href="#projects"> <FontAwesomeIcon className='navbar_icon' icon={faCode} /> <p className='navbar_link_txt'>Projects</p> </a>
            <a className="navbar_link" href="#skills"> <FontAwesomeIcon className='navbar_icon' icon={faBolt} /><p className='navbar_link_txt'>Skills</p></a>
            <a className="navbar_link" href="#contact"> <FontAwesomeIcon className='navbar_icon' icon={faUser} /><p className='navbar_link_txt'>Contact</p></a>
        </nav>
    )
}

