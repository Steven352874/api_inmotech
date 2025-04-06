import impuestoValor from '../models/impuesto_valor.js';

// Obtener todos los impuestos de valor
export async function getAllImpuestosValor(req, res) {
    try {
        const allImpuestosValor = await impuestoValor.findAll();
        res.json(allImpuestosValor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un impuesto de valor por ID
export async function getImpuestoValorById(req, res) {
    try {
        const impuestoValorItem = await impuestoValor.findByPk(req.params.id);
        if (impuestoValorItem) {
            res.json(impuestoValorItem);
        } else {
            res.status(404).json({ message: 'Impuesto de valor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo impuesto de valor
export async function createImpuestoValor(req, res) {
    try {
        const newImpuestoValor = await impuestoValor.create(req.body);
        res.status(201).json(newImpuestoValor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un impuesto de valor
export async function updateImpuestoValor(req, res) {
    try {
        const updatedImpuestoValor = await impuestoValor.update(req.body, {
            where: { Impuesto_valor_id: req.params.id },
        });
        if (updatedImpuestoValor[0]) {
            res.json({ message: 'Impuesto de valor actualizado' });
        } else {
            res.status(404).json({ message: 'Impuesto de valor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un impuesto de valor
export async function deleteImpuestoValor(req, res) {
    try {
        const deletedImpuestoValor = await impuestoValor.destroy({
            where: { Impuesto_valor_id: req.params.id },
        });
        if (deletedImpuestoValor) {
            res.json({ message: 'Impuesto de valor eliminado' });
        } else {
            res.status(404).json({ message: 'Impuesto de valor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
