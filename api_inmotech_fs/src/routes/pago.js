import express from 'express';
import {
    getAllPagos,
    getPagoById,
    createPago,
    updatePago,
    deletePago
} from '../controllers/pagoController.js';

const router = express.Router();

router.get('/', getAllPagos);
router.get('/:id', getPagoById);
router.post('/', createPago);
router.put('/:id', updatePago);
router.delete('/:id', deletePago);

export default router;
