// Importar el modulo http
import http from 'http';

// importando express
import express from 'express';

// Crear instancia de express
// crear constante
const app = express();//(req,res)=> {MONTON DE CODIGO}

// registarr mi primier middleware
app.use((req, res, next) => {
    console.log("⭐Ejecunatndo el Middleware 1");
    // invocando el siguiente middleware
    next();
});


app.use((req, res, next) => {
    console.log(`🎆${req.method} - ${req.url}`);
    // invocando el siguiente middleware
    next();
});

app.use((req, res, next) => {
    console.log("⭐Respondiendo al cliente");
    res.send(`
    <h1>Welcome to express</h1>
    <p>This is my awesome app</p>`
    );
});

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



