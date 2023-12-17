import Formulario from "./Formulario"
import Alert from "./Alert"
import SocialButton from "./SocialButton"
import React from 'react'
// Se importan los 3 íconos utilizados
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Registro() {

    return (
        <>
            <div className="iconos">
                {/* Se envían los íconos mediante props  */}
                <SocialButton icono={faFacebook}/>
                <SocialButton icono={faGithub}/>
                <SocialButton icono={faLinkedin}/>
            </div>

            <Formulario  />
            <Alert />
        </>
    )
}

export default Registro