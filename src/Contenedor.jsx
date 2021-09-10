import React  from 'react';
import Personaje from './Personajes';

const personajes = [
    {
        "id" : 1,
        "genero": "M"
    },
    {
        "id" : 2,
        "nombre": "Bruno Bergeron"
    },
    {
        "id" : 3,
        "nombre": "Merli Bergeron"
    },
    {
        "id" : 4,
        "nombre": "Pol Rubio"
    },
    {
        "id" : 5,
        "nombre": "Ivan blasco"
    },
    {
        "id" : 6,
        "nombre": "Oscar Rubio"
    }
]

const Contenedor = () => (
    <>
         {
            personajes.map ( c => <Personaje nombre = { c.nombre } id = {c.id}/>)
         }
    </>
);

export default Contenedor;