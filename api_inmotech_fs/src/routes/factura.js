import express from 'express';
import {
    getAllFacturas,
    getFacturaById,
    createFactura,
    updateFactura,
    deleteFactura
} from '../controllers/facturaController.js';

const router = express.Router();

router.get('/', getAllFacturas);
router.get('/:id', getFacturaById);
router.post('/', createFactura);
router.put('/:id', updateFactura);
router.delete('/:id', deleteFactura);

export default router;
