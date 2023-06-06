// Importando el enrutador de express
import { Router } from 'express';

// Importando el gestor de rutas
import path from 'path';

// importar ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Importando funciones del controlador
import { getAddProduct, postAddProduct } from '../controllers/products.controller.js'
import { getError } from '../controllers/httpError.controller.js';


// Creando una instancia del enrutador de express
const router = Router();

// creando datos en la memoria volatil
export const products =[ ];

// GET /admin/add-product
router.get('/add-product', getAddProduct);

// POST /add-product
router.post('/add-product', postAddProduct);



// Exportando el enrutador admin
export default router;

