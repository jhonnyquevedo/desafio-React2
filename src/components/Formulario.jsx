import { useState } from "react";




function Formulario() {
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  
  return (
    <>
      <p className="card-text">O usa tu email para registrarte</p>
      <div >
        <form className="formulario d-flex flex-column gap-2">
          <input name="Nombre" type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
          <input name="Email" type="text" placeholder="tuemail@ejemplo.com" onChange={(e)=>setEmail(e.target.value)} value={email} />
          <input name="Contraseña" type="text" placeholder="Contraseña" onChange={(e)=>setContraseña(e.target.value)} value={contraseña} />
          <input name="Confirmacion" type="text" placeholder="Confirma tu contraseña" onChange={(e)=>setConfirmacion(e.target.value)} value={confirmacion} />
        </form>
      </div>
    </>
  )
}

  export default Formulario