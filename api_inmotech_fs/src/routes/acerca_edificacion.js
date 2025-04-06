import express from 'express';
import {
    getAllAcercaEdificaciones,
    getAcercaEdificacionById,
    createAcercaEdificacion,
    updateAcercaEdificacion,
    deleteAcercaEdificacion
} from '../controllers/acercaEdificacionController.js';

const router = express.Router();

router.get('/', getAllAcercaEdificaciones);
router.get('/:id', getAcercaEdificacionById);
router.post('/', createAcercaEdificacion);
router.put('/:id', updateAcercaEdificacion);
router.delete('/:id', deleteAcercaEdificacion);

export default router;
