import asignacion from '../models/asignacion.js';

// Obtener todas las asignaciones
export async function getAllAsignaciones(req, res) {
    try {
        const allAsignaciones = await asignacion.findAll();
        res.json(allAsignaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una asignación por ID
export async function getAsignacionById(req, res) {
    try {
        const asignacionItem = await asignacion.findByPk(req.params.id);
        if (asignacionItem) {
            res.json(asignacionItem);
        } else {
            res.status(404).json({ message: 'Asignación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva asignación
export async function createAsignacion(req, res) {
    try {
        const newAsignacion = await asignacion.create(req.body);
        res.status(201).json(newAsignacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una asignación
export async function updateAsignacion(req, res) {
    try {
        const updatedAsignacion = await asignacion.update(req.body, {
            where: { Asignacion_id: req.params.id },
        });
        if (updatedAsignacion[0]) {
            res.json({ message: 'Asignación actualizada' });
        } else {
            res.status(404).json({ message: 'Asignación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una asignación
export async function deleteAsignacion(req, res) {
    try {
        const deletedAsignacion = await asignacion.destroy({
            where: { Asignacion_id: req.params.id },
        });
        if (deletedAsignacion) {
            res.json({ message: 'Asignación eliminada' });
        } else {
            res.status(404).json({ message: 'Asignación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
