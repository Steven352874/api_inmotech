import express from 'express';
import {
    getAllOtrasCaracteristicas,
    getOtraCaracteristicaById,
    createOtraCaracteristica,
    updateOtraCaracteristica,
    deleteOtraCaracteristica
} from '../controllers/otrasCaracteristicasController.js';

const router = express.Router();

router.get('/', getAllOtrasCaracteristicas);
router.get('/:id', getOtraCaracteristicaById);
router.post('/', createOtraCaracteristica);
router.put('/:id', updateOtraCaracteristica);
router.delete('/:id', deleteOtraCaracteristica);

export default router;
