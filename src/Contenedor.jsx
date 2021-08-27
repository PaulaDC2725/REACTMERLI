import React  from 'react';
import Personajes from './Personajes';

const personajes = [
    {
        "edad" : 23,
        "genero": "M",
        "imagen": "Sin imagen"
    },
    {
        "nombre": "Bruno Bergeron",
        "edad" : 20,
        "genero": "M",
        "imagen": "http://pm1.narvii.com/7127/e0c076d014ce5d2de1417d5e669217b91cf888ear1-732-488v2_uhq.jpg"
    },
    {
        "nombre": "Merli Bergeron",
        "edad" : 63,
        "genero": "M",
        "imagen": "https://pbs.twimg.com/profile_images/1382010057097887747/cSens_Ok.jpg"
    },
    {
        "nombre": "Pol Rubio",
        "edad" : 20,
        "genero": "M",
        "imagen": "https://images.clarin.com/2019/07/12/el-nino-mimado-de-merli___2xwDYzuJ8_640x361__1.jpg"
    },
    {
        "nombre": "Ivan Blasco",
        "edad" : 19,
        "genero": "M",
        "imagen": "https://pbs.twimg.com/media/DmchkkfX0AYjG-_.jpg"
    },
    {
        "nombre": "Oscar Rubio",
        "edad" : 30,
        "genero": "M",
        "imagen": ""
    }
]

const Contenedor = () => (
    <>
         {
             personajes.map ( c => <Personajes nombre = { c.nombre } edad = { c.edad } genero = { c.genero } imagen = { c.imagen }/>)
         }
    </>
);

export default Contenedor;