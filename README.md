# ej-Kubide

Tu jefe está loco, todos lo sabemos, porque si no, no es lógica la conversación que has tenido esta mañana con él.

Ha llegado con los pelos canosos, largos y revueltos y lo primero que te ha dicho es que tiene una gran idea innovadora: “quiere hacer un muro donde la gente pueda poner frases y que el resto de la gente las pueda ver”. Además de poder “marcar como favoritas las notas/frases” y poder listar las que están marcadas como favoritas.

Y te ha pedido a tí que te encargues de hacer el API del proyecto, es el momento de demostrarle que no eres un gallina!

Te has sentido como Marty Mcfly en Regreso al Futuro, y le has preguntado si conocía Twitter, pero él se ha negado a escucharte y ha seguido con lo suyo, así que te has resignado y has conseguido sacarle un listado de historias de usuario.

Como USUARIO quiero poder llamar al API, es decir, quiero poder tener un servidor local al que hacer una llamada HTTP y que me devuelva algo.
Como USUARIO quiero poder llamar al API para crear notas.
Como USUARIO quiero poder llamar al API para consultar las notas.
Como USUARIO quiero poder llamar al API para consultar una sóla nota.
Como USUARIO quiero poder llamar al API para marcar como favorita una nota.
Como USUARIO quiero poder llamar al API para consultar las notas marcadas como favoritas.

En cuanto a tecnologías, no presta ninguna atención a ese punto, pero sí que te ha pedido que sea en Node.js porque ha oído por ahí que existe un framework llamado NestJS que mola mucho, así que ya sabes que muchas veces es mejor hacer caso a sus “locuras”.

Para comprobar cómo has realizado el trabajo, tu jefe te pide que subas el proyecto a un sistema de control de versiones GIT (puede ser Github u otro) y que vayas haciendo subidas iteradas.

Y, por último, para no quedar mal delante del jefe, te recomendamos que realices pruebas unitarias sobre el proyecto. No es que sea obligatorio, pero ya sabes que siempre es bueno quedar bien con el jefe.

#Pasos para levantar el backend:

1)Posicionarse en la carpeta backend.
2)Instalar las dependencias (npm install).
3)Al trabajar con MySQL tienes que usar tus propios datos en el archivo ormconfig.json. Aquí esta un ejemplo del JSON que usé para establecer al conexión:
{
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 3303,
    "username": "root",
    "password": "",
    "database": "notes-nestjs",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
}
4)hacer npm start

Para hacer funcionar el front
1) Posicionarse en la carpeta frontend.
2) Instalar las dependencias (npm install).
3) Hacer npm start.
