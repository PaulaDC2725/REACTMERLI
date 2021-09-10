import React from "react";

const personajes = [
    {
        
        "edad" : 23,
        "genero": "M",
        "imagen": "Sin imagen"
    },
    {
        "id" : 2,
        "nombre": "Bruno Bergeron",
        "edad" : 20,
        "genero": "M",
        "imagen": "http://pm1.narvii.com/7127/e0c076d014ce5d2de1417d5e669217b91cf888ear1-732-488v2_uhq.jpg"
    },
    {
        "id" : 3,
        "nombre": "Merli Bergeron",
        "edad" : 63,
        "genero": "M",
        "imagen": "https://pbs.twimg.com/profile_images/1382010057097887747/cSens_Ok.jpg"
    },
    {
        "id" : 4,
        "nombre": "Pol Rubio",
        "edad" : 20,
        "genero": "M",
        "imagen": "https://images.clarin.com/2019/07/12/el-nino-mimado-de-merli___2xwDYzuJ8_640x361__1.jpg"
    },
    {
        "id" : 5,
        "nombre": "Ivan Blasco",
        "edad" : 19,
        "genero": "M",
        "imagen": "https://pbs.twimg.com/media/DmchkkfX0AYjG-_.jpg"
    },
    {
        "id" : 6,
        "nombre": "Oscar Rubio",
        "edad" : 30,
        "genero": "M",
        "imagen": "data:image/jpeg;base64,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"
    }
]

const PersonajeDetalle = ({match}) => {
    const personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <>
            {
                personaje ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {personaje.nombre}
                            </h5>
                            <p className="card-text">Edad: {personaje.edad}.</p>
                            <p className="card-text">Genero: {personaje.genero}.</p>
                            <img src={personaje.imagen} alt="No se encuentra imagen"/>
                        </div>
                    </div>
                ):
                <h1>El Id no esta registrado.</h1>
            }
            <a href={`/personajes`}>Ver todos</a>
        </>
    );
};

export default PersonajeDetalle;