//Se importan los iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialButton({icono}) {

    return (
      <>
        <FontAwesomeIcon className='icono' icon={icono} />
      </>
    )
  }

export default SocialButton