import express from 'express';
import {
    getAllTiposEdificacion,
    getTipoEdificacionById,
    createTipoEdificacion,
    updateTipoEdificacion,
    deleteTipoEdificacion
} from '../controllers/tipoEdificacionController.js';

const router = express.Router();

router.get('/', getAllTiposEdificacion);
router.get('/:id', getTipoEdificacionById);
router.post('/', createTipoEdificacion);
router.put('/:id', updateTipoEdificacion);
router.delete('/:id', deleteTipoEdificacion);

export default router;
