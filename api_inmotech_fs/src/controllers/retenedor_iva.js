import retenedorIva from '../models/retenedor_iva.js';

// Obtener todos los retenedores de IVA
export async function getAllRetenedoresIva(req, res) {
    try {
        const allRetenedoresIva = await retenedorIva.findAll();
        res.json(allRetenedoresIva);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un retenedor de IVA por ID
export async function getRetenedorIvaById(req, res) {
    try {
        const retenedorIvaItem = await retenedorIva.findByPk(req.params.id);
        if (retenedorIvaItem) {
            res.json(retenedorIvaItem);
        } else {
            res.status(404).json({ message: 'Retenedor de IVA no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo retenedor de IVA
export async function createRetenedorIva(req, res) {
    try {
        const newRetenedorIva = await retenedorIva.create(req.body);
        res.status(201).json(newRetenedorIva);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un retenedor de IVA
export async function updateRetenedorIva(req, res) {
    try {
        const updatedRetenedorIva = await retenedorIva.update(req.body, {
            where: { Retenedor_iva_id: req.params.id },
        });
        if (updatedRetenedorIva[0]) {
            res.json({ message: 'Retenedor de IVA actualizado' });
        } else {
            res.status(404).json({ message: 'Retenedor de IVA no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
