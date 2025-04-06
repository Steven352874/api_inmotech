import express from 'express';
import {
    getAllResolucionesFactura,
    getResolucionFacturaById,
    createResolucionFactura,
    updateResolucionFactura,
    deleteResolucionFactura,
} from '../controllers/resolucionFacturaController.js';

const router = express.Router();

router.get('/', getAllResolucionesFactura);
router.get('/:id', getResolucionFacturaById);
router.post('/', createResolucionFactura);
router.put('/:id', updateResolucionFactura);
router.delete('/:id', deleteResolucionFactura);

export default router;
