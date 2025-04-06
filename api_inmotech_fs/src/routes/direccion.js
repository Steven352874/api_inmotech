import express from 'express';
import {
    getAllDirecciones,
    getDireccionById,
    createDireccion,
    updateDireccion,
    deleteDireccion
} from '../controllers/direccionController.js';

const router = express.Router();

router.get('/', getAllDirecciones);
router.get('/:id', getDireccionById);
router.post('/', createDireccion);
router.put('/:id', updateDireccion);
router.delete('/:id', deleteDireccion);

export default router;
