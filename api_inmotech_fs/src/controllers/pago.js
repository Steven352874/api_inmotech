import pago from '../models/pago.js';

// Obtener todos los pagos
export async function getAllPagos(req, res) {
    try {
        const allPagos = await pago.findAll();
        res.json(allPagos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un pago por ID
export async function getPagoById(req, res) {
    try {
        const pagoItem = await pago.findByPk(req.params.id);
        if (pagoItem) {
            res.json(pagoItem);
        } else {
            res.status(404).json({ message: 'Pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo pago
export async function createPago(req, res) {
    try {
        const newPago = await pago.create(req.body);
        res.status(201).json(newPago);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un pago
export async function updatePago(req, res) {
    try {
        const updatedPago = await pago.update(req.body, {
            where: { Pago_id: req.params.id },
        });
        if (updatedPago[0]) {
            res.json({ message: 'Pago actualizado' });
        } else {
            res.status(404).json({ message: 'Pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un pago
export async function deletePago(req, res) {
    try {
        const deletedPago = await pago.destroy({
            where: { Pago_id: req.params.id },
        });
        if (deletedPago) {
            res.json({ message: 'Pago eliminado' });
        } else {
            res.status(404).json({ message: 'Pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
