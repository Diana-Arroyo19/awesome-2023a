// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';
// importar ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();

// creando datos en la memoria volatil
export const products =[ ];

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  console.log("📢 Sirviendo formulario...");
  // res.sendFile(path.join(ROOT_DIR, "views", "add-product.html"));
  res.render('add-product');
});

// POST /add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la extracción de
  // "name" de la peticion
  const { title } = req.body;
  // agregar el dato en la base de datos
  products.push(title);
  // redireccionando
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;


