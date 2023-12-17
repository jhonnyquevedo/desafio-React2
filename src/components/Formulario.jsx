import { useState } from "react";

function Formulario() {
  //Expresión regular para validar que el campo de email contenga el formato adecuado
  const regexParaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //Expresión regular para validar el campo de contraseña solicita un mínimo de 8 caracteres y un máximo de 15 , al menos una letra minúscula, al menos una letra mayúscula, al menos 1 dígito (número), al menos 1 caracter especial, que no existan espacios en blanco y al menos 1 símbolo para más seguridad fuente https://es.stackoverflow.com/questions/4300/expresiones-regulares-para-contrase%C3%B1a-en-base-a-una-politica.
  const regexPas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.-])[A-Za-z\d$@$!%*?&.-]{8,15}$/;

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  const validarInput = (e) => {
    //   el botón de tipo submit por defecto ocasiona que el navegador realice una petición GET y recargue el sitio, aquí se previene este comportamiento 
    e.preventDefault()
    //Se elimina el mensaje de succes
    setSucces3("")

    // Se validan los input
    if (nombre === "") {
      setError("Ingrese su nombre")
      return
    } if (email === "") {
      setError("Ingrese su email")
      return
    } if (!regexParaEmail.test(email)) {
      setError("El email debe ser como el ejemplo")
      return
    } if (contraseña === "") {
      setError("Ingrese su contraseña")
      return
    } if (!regexPas.test(contraseña)) {
      setError("Ingrese una contraseña valida")
      return
    } if (confirmacion === "") {
      setError("Confirme su contraseña")
      return
    } if (confirmacion !== contraseña) {
      setError("Las contraseñas no coinciden")
      return
    } else {
      //Se elimina el mensaje de error
      setError("")
      setSucces("Registro exitoso")
      return
    }
  }
  return (
    <>
      <p className="card-text">O usa tu email para registrarte</p>
      <div >
        <form className="formulario d-flex flex-column gap-2" onSubmit={validarInput}>
          <input name="Nombre" type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
          <input name="Email" type="text" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} value={email} />
          <input name="Contraseña" type="text" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} value={contraseña} />
          <input name="Confirmacion" type="text" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmacion(e.target.value)} value={confirmacion} />
          <button type="submit" className="btn btn-success">Registrarse</button>
          
        </form>
      </div>
    </>
  )
}

export default Formulario