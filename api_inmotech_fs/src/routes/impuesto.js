import express from 'express';
import {
    getAllImpuestos,
    getImpuestoById,
    createImpuesto,
    updateImpuesto,
    deleteImpuesto
} from '../controllers/impuestoController.js';

const router = express.Router();

router.get('/', getAllImpuestos);
router.get('/:id', getImpuestoById);
router.post('/', createImpuesto);
router.put('/:id', updateImpuesto);
router.delete('/:id', deleteImpuesto);

export default router;
