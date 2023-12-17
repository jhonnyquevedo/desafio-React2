import "./Formulario.css";


function Alert ({error, succes}) {
    return (
        <>
            {error.length>0 &&  <h3 className="error m-2">{error}</h3>}
            {succes.length>0 &&  <h3 className="succes m-2">{succes}</h3>}
        </>
    )
}

export default Alert