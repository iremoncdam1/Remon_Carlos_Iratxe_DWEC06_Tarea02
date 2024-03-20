//Creamos el componente Info
function Info({id, nombre, email, tel}) {

    return (
        <article className="person">
            <img src={"https://randomuser.me/api/portraits/men/"+(id-1)+".jpg"} alt={"Foto de " + nombre}></img>
            <div>
                <h4>{nombre}</h4>
                <p>{email}</p>
                <p>{tel}</p>
            </div>
            <Boton />
        </article>
    )
  }
  
  export default Info