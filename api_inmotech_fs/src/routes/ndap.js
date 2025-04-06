import express from 'express';
import {
    getAllNdaps,
    getNdapById,
    createNdap,
    updateNdap,
    deleteNdap
} from '../controllers/ndapController.js';

const router = express.Router();

router.get('/', getAllNdaps);
router.get('/:id', getNdapById);
router.post('/', createNdap);
router.put('/:id', updateNdap);
router.delete('/:id', deleteNdap);

export default router;
