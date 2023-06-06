// Importando el enrutador de express
import { Router } from 'express';

// Importando funciones del controlador
import { getError } from '../controllers/httpError.controller.js'

// Creando una instancia del enrutador de express
const router = Router();

// GET
router.use(getError);

// Exportando el enrutador admin
export default router;