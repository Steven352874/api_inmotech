import express from 'express';
import {
    getAllImpuestosValor,
    getImpuestoValorById,
    createImpuestoValor,
    updateImpuestoValor,
    deleteImpuestoValor
} from '../controllers/impuestoValorController.js';

const router = express.Router();

router.get('/', getAllImpuestosValor);
router.get('/:id', getImpuestoValorById);
router.post('/', createImpuestoValor);
router.put('/:id', updateImpuestoValor);
router.delete('/:id', deleteImpuestoValor);

export default router;
