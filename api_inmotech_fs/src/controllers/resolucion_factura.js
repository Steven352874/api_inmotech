import resolucionFactura from '../models/resolucion_factura.js';

// Obtener todas las resoluciones de factura
export async function getAllResolucionesFactura(req, res) {
    try {
        const allResolucionesFactura = await resolucionFactura.findAll();
        res.json(allResolucionesFactura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una resolución de factura por ID
export async function getResolucionFacturaById(req, res) {
    try {
        const resolucionFacturaItem = await resolucionFactura.findByPk(req.params.id);
        if (resolucionFacturaItem) {
            res.json(resolucionFacturaItem);
        } else {
            res.status(404).json({ message: 'Resolución de factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva resolución de factura
export async function createResolucionFactura(req, res) {
    try {
        const newResolucionFactura = await resolucionFactura.create(req.body);
        res.status(201).json(newResolucionFactura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una resolución de factura
export async function updateResolucionFactura(req, res) {
    try {
        const updatedResolucionFactura = await resolucionFactura.update(req.body, {
            where: { Resolucion_factura_id: req.params.id },
        });
        if (updatedResolucionFactura[0]) {
            res.json({ message: 'Resolución de factura actualizada' });
        } else {
            res.status(404).json({ message: 'Resolución de factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una resolución de factura
export async function deleteResolucionFactura(req, res) {
    try {
        const deletedResolucionFactura = await resolucionFactura.destroy({
            where: { Resolucion_factura_id: req.params.id },
        });
        if (deletedResolucionFactura) {
            res.json({ message: 'Resolución de factura eliminada' });
        } else {
            res.status(404).json({ message: 'Resolución de factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
