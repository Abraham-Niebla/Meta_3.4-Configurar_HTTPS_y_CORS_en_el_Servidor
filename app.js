/***** Configurando el puerto de escucha *****/
process.env.port = 4000;

/***** Importando paquetes necesarios para crear el servidor HTTPS *****/
const express = require("express");
const cors = require('cors');
const https = require("https");

/***** Importando paquete para lectura de archivos *****/
const fs = require("fs");

/***** Creando aplicación con Express, CORS, y JSON *****/
const app = express();
app.use(cors());
app.use(express.json());

/***** Importando funciones para aplicar los métodos HTTP *****/
const activosRouter = require("./routers/activosRouter");
const responsablesRouter = require('./routers/responsablesRouter');
const ubicacionesRouter = require('./routers/ubicacionesRouter');

/***** Configurar la aplicación para usar los routers de cada recurso *****/
app.use('/activos', activosRouter);
app.use('/responsables', responsablesRouter);
app.use('/ubicaciones', ubicacionesRouter);

/***** Obteniendo Llave y Certificado *****/
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");

/***** Creando Credenciales *****/
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "abc123ABC"
};

/***** Creando servidor HTTPS *****/
const httpsServer = https.createServer(credenciales, app);

/***** Poner al servidor en escucha *****/
httpsServer.listen(process.env.port, () => {
    console.log('Servidor https escuchando por el puerto:', process.env.port);
    console.log('https://localhost:' + process.env.port);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});