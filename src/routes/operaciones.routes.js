import { Router } from 'express';
import { sumar, restar, multiplicar, dividir } from '../controllers/calculadora.controller.js';

const router = Router();

router.get('/sum', sumar);
router.get('/subtraction', restar);
router.get('/multiplication', multiplicar);
router.get('/division', dividir);

export default router;