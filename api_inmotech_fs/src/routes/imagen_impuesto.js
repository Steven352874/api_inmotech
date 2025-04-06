import express from 'express';
import {
    getAllImagenesImpuesto,
    getImagenesImpuestoById,
    createImagenesImpuesto,
    updateImagenesImpuesto,
    deleteImagenesImpuesto
} from '../controllers/imagenesImpuestoController.js';

const router = express.Router();

router.get('/', getAllImagenesImpuesto);
router.get('/:id', getImagenesImpuestoById);
router.post('/', createImagenesImpuesto);
router.put('/:id', updateImagenesImpuesto);
router.delete('/:id', deleteImagenesImpuesto);

export default router;
