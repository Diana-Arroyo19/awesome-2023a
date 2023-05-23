// Importando expressjs
import express from 'express';

import httpStatus from 'http';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';

import shopRouter from './routes/shop.route.js';
import path from 'path';

// Crear una instancia de express
const app = express(); // (req, res)=>{ UN MONTO DE CODIGO }

// middleware fr parseo de datos del cliente
app.use(express.urlencoded({extended:true}));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

app.use((req,res) => {
    res.sendFile(path.resolve('views', 'evaluacion.html'));
});


// Creando el servidor
// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el server
app.listen(port, ip, () => {
    console.log( `📢 Sirviendo en http://localhost:${port}`);
});