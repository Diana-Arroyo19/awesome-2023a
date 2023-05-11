// Importar el modulo http
import http from 'http';

// importando express
import express from 'express';

// Crear instancia de express
// crear constante
const app = express();//(req,res)=> {MONTON DE CODIGO}

// creacion del servidor
// creacion de su constante
const server = http.createServer(app);

// definir puertos
const port = 3000;
const ip = "0.0.0.0";

// arrancar el servidor
server.listen(port, ip, (err)=>{
    console.log("📢 Sirviendo en http://localhost:3000");
}); //escuchar peticiones



