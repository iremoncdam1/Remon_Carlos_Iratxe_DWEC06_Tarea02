//Creamos el componente Botón
function Boton({index, despedido}) {
    //Este es el botón que se utiliza para eliminar a un trabajador. Cuando se pulsa el botón se llama al método de despedir pasando como parámetro el index del trabajador.
    return (
        <button type='button' className='delete-btn' onClick={() => despedido(index)}>
            <img src='./src/trash.png' />
        </button>
    )
  }
  
  export default Boton