import { Router } from 'express';
import { getDescription } from '../controllers/calculadora.controller.js';

const router = Router();

router.get('', getDescription);

export default router;