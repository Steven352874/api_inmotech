import express from 'express';
import {
    getAllOrganizacionesParqueadero,
    getOrganizacionParqueaderoById,
    createOrganizacionParqueadero,
    updateOrganizacionParqueadero,
    deleteOrganizacionParqueadero
} from '../controllers/organizacionParqueaderoController.js';

const router = express.Router();

router.get('/', getAllOrganizacionesParqueadero);
router.get('/:id', getOrganizacionParqueaderoById);
router.post('/', createOrganizacionParqueadero);
router.put('/:id', updateOrganizacionParqueadero);
router.delete('/:id', deleteOrganizacionParqueadero);

export default router;
