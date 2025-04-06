import express from 'express';
import {
    getAllDocumentIdentifications,
    getDocumentIdentificationById,
    createDocumentIdentification,
    updateDocumentIdentification,
    deleteDocumentIdentification
} from '../controllers/documentIdentificationController.js';

const router = express.Router();

router.get('/', getAllDocumentIdentifications);
router.get('/:id', getDocumentIdentificationById);
router.post('/', createDocumentIdentification);
router.put('/:id', updateDocumentIdentification);
router.delete('/:id', deleteDocumentIdentification);

export default router;
