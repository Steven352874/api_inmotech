import express from 'express';
import {
    getAllAsignaciones,
    getAsignacionById,
    createAsignacion,
    updateAsignacion,
    deleteAsignacion
} from '../controllers/asignacionController.js';

const router = express.Router();

router.get('/', getAllAsignaciones);
router.get('/:id', getAsignacionById);
router.post('/', createAsignacion);
router.put('/:id', updateAsignacion);
router.delete('/:id', deleteAsignacion);

export default router;
