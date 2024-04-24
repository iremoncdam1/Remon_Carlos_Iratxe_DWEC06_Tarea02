import { useState } from 'react';
import Trabajador from './trabajador';
import data from './data.js';

function App() {
    //Con el hook useState añadimos los datos de los trabajadores
    let [trabajadores, anadirTrabajadores] = useState(data);

    //Esta función nos servirá para eliminar el trabajador deseado actualizando el array de los trabajadores sin el id del trabajador a eliminar
    let despedido = (id) => {
        anadirTrabajadores(trabajadores.filter(trabajador => trabajador.id !== id));
    };

    return (
        <main>
            {
            //Se crea el cuerpo de la página donde se mostrará cuantos trabajadores hay. Después se recorre el array de trabajadores y utilizando el componente "Trabajador" se van mostrando.
            }
            <section className="container">
                <h3>Tenemos una plantilla de {trabajadores.length} trabajadores</h3>
                {
                    trabajadores.map(({id, name, email, phone}) => (
                        <Trabajador key={id} id={id} nombre={name} email={email} tel={phone} despedido={despedido} />
                    ))
                }
            </section>
        </main>
    );
}

export default App;