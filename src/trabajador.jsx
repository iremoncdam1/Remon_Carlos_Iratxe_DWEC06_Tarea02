import Boton from './boton.jsx'

//Creamos el componente Trabajador
function Trabajador({id, nombre, email, tel, despedido}) {
    // Mediante este componente se muestran los datos del trabajador
    return (
        <article className="person">
            <img src={"https://randomuser.me/api/portraits/men/"+(id-1)+".jpg"} alt={"Foto de " + nombre}></img>
            <div>
                <h4>{nombre}</h4>
                <p>{email}</p>
                <p>{tel}</p>
            </div>
            <Boton index={id} despedido={despedido}/>
        </article>
    )
  }
  
  export default Trabajador