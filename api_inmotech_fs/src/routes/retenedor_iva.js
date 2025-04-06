import express from 'express';
import {
    getAllRetenedoresIva,
    getRetenedorIvaById,
    createRetenedorIva,
    updateRetenedorIva,
    deleteRetenedorIva
} from '../controllers/retenedorIvaController.js';

const router = express.Router();

router.get('/', getAllRetenedoresIva);
router.get('/:id', getRetenedorIvaById);
router.post('/', createRetenedorIva);
router.put('/:id', updateRetenedorIva);
router.delete('/:id', deleteRetenedorIva);

export default router;
