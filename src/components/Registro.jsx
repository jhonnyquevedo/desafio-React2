import Formulario from "./Formulario"
import Alert from "./Alert"
import SocialButton from "./SocialButton"

function Registro() {

    return (
        <>
            <div className="iconos">
                
                <SocialButton />
                <SocialButton />
                <SocialButton />
            </div>

            <Formulario  />
            <Alert />
        </>
    )
}

export default Registro