import express from 'express';
import {
    getAllInmuebles,
    getInmuebleById,
    createInmueble,
    updateInmueble,
    deleteInmueble
} from '../controllers/inmuebleController.js';

const router = express.Router();

router.get('/', getAllInmuebles);
router.get('/:id', getInmuebleById);
router.post('/', createInmueble);
router.put('/:id', updateInmueble);
router.delete('/:id', deleteInmueble);

export default router;
