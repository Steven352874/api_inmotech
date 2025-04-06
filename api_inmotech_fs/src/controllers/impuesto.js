import impuesto from '../models/impuesto.js';

// Obtener todos los impuestos
export async function getAllImpuestos(req, res) {
    try {
        const allImpuestos = await impuesto.findAll();
        res.json(allImpuestos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un impuesto por ID
export async function getImpuestoById(req, res) {
    try {
        const impuestoItem = await impuesto.findByPk(req.params.id);
        if (impuestoItem) {
            res.json(impuestoItem);
        } else {
            res.status(404).json({ message: 'Impuesto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo impuesto
export async function createImpuesto(req, res) {
    try {
        const newImpuesto = await impuesto.create(req.body);
        res.status(201).json(newImpuesto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un impuesto
export async function updateImpuesto(req, res) {
    try {
        const updatedImpuesto = await impuesto.update(req.body, {
            where: { Impuesto_id: req.params.id },
        });
        if (updatedImpuesto[0]) {
            res.json({ message: 'Impuesto actualizado' });
        } else {
            res.status(404).json({ message: 'Impuesto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un impuesto
export async function deleteImpuesto(req, res) {
    try {
        const deletedImpuesto = await impuesto.destroy({
            where: { Impuesto_id: req.params.id },
        });
        if (deletedImpuesto) {
            res.json({ message: 'Impuesto eliminado' });
        } else {
            res.status(404).json({ message: 'Impuesto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
