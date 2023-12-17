
import './App.css'
import Registro from './components/Registro'
//se importa la librería de Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function App() {


  return (
    <>
      <div>
        <Registro />
     </div>
    </>
  )
}
// Se agregan los inocos de la librería a utilizar en la apliación
library.add(faFacebook, faGithub, faLinkedin)
export default App
