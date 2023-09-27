import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {

    return (
        <div className="footer_container">
            <p className='copy'>Copyright &copy; 2023 BENJAMIN PAREDES BRAIN</p>
            <div className='social'>
                <a className='social_icon' href="https://www.linkedin.com/in/benjamin-martin-paredes-brain/" target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className='social_icon' href="https://github.com/Benjamin-Paredes-Brain" target='blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a className='social_icon' href="https://wa.me/+543512252226" target='blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>

        </div>
    )
}