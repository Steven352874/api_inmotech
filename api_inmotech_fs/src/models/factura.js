import factura from '../models/factura.js';

// Obtener todas las facturas
export async function getAllFacturas(req, res) {
    try {
        const allFacturas = await factura.findAll();
        res.json(allFacturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una factura por ID
export async function getFacturaById(req, res) {
    try {
        const facturaItem = await factura.findByPk(req.params.id);
        if (facturaItem) {
            res.json(facturaItem);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva factura
export async function createFactura(req, res) {
    try {
        const newFactura = await factura.create(req.body);
        res.status(201).json(newFactura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una factura
export async function updateFactura(req, res) {
    try {
        const updatedFactura = await factura.update(req.body, {
            where: { Factura_id: req.params.id },
        });
        if (updatedFactura[0]) {
            res.json({ message: 'Factura actualizada' });
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una factura
export async function deleteFactura(req, res) {
    try {
        const deletedFactura = await factura.destroy({
            where: { Factura_id: req.params.id },
        });
        if (deletedFactura) {
            res.json({ message: 'Factura eliminada' });
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
