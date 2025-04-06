import express from 'express';
import {
    getAllSuscripciones,
    getSuscripcionById,
    createSuscripcion,
    updateSuscripcion,
    deleteSuscripcion,
} from '../controllers/suscripcionController.js';

const router = express.Router();

router.get('/', getAllSuscripciones);
router.get('/:id', getSuscripcionById);
router.post('/', createSuscripcion);
router.put('/:id', updateSuscripcion);
router.delete('/:id', deleteSuscripcion);

export default router;
