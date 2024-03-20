import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import data from './data.js'
import Trabajador from './trabajador.jsx'

//En el elemento con "id = root" del html añadimos nuestros elementos
ReactDOM.createRoot(document.getElementById('root')).render(
    <main>
        <section className="container">
            <h3>Tenemos una plantilla de {data.length} trabajadores</h3>
            {
                data.map(({id, name, email, phone}) => (
                    <Trabajador id={id} nombre={name} email={email} tel={phone}/>
                ))
            }
        </section>
    </main>
)