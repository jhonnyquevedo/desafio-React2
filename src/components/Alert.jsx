import "./Formulario.css";


function Alert ({error, succes}) {
    return (
        <>
            {error.length>0 &&  <h3 className="error">{error}</h3>}
            {succes.length>0 &&  <h3 className="succes">{succes}</h3>}
        </>
    )
}

export default Alert