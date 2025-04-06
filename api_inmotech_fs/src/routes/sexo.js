import express from 'express';
import {
    getAllSexos,
    getSexoById,
    createSexo,
    updateSexo,
    deleteSexo,
} from '../controllers/sexoController.js';

const router = express.Router();

router.get('/', getAllSexos);
router.get('/:id', getSexoById);
router.post('/', createSexo);
router.put('/:id', updateSexo);
router.delete('/:id', deleteSexo);

export default router;
