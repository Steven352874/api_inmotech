
import tipoEdificacion from '../models/tipo_edificacion.js';

// Obtener todos los tipos de edificación
export async function getAllTiposEdificacion(req, res) {
    try {
        const allTiposEdificacion = await tipoEdificacion.findAll();
        res.json(allTiposEdificacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un tipo de edificación por ID
export async function getTipoEdificacionById(req, res) {
    try {
        const tipoEdificacionItem = await tipoEdificacion.findByPk(req.params.id);
        if (tipoEdificacionItem) {
            res.json(tipoEdificacionItem);
        } else {
            res.status(404).json({ message: 'Tipo de edificación no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo tipo de edificación
export async function createTipoEdificacion(req, res) {
    try {
        const newTipoEdificacion = await tipoEdificacion.create(req.body);
        res.status(201).json(newTipoEdificacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un tipo de edificación
export async function updateTipoEdificacion(req, res) {
    try {
        const updatedTipoEdificacion = await tipoEdificacion.update(req.body, {
            where: { Tipo_edificacion_id: req.params.id },
        });
        if (updatedTipoEdificacion[0]) {
            res.json({ message: 'Tipo de edificación actualizado' });
        } else {
            res.status(404).json({ message: 'Tipo de edificación no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un tipo de edificación
export async function deleteTipoEdificacion(req, res) {
    try {
        const deletedTipoEdificacion = await tipoEdificacion.destroy({
            where: { Tipo_edificacion_id: req.params.id },
        });
        if (deletedTipoEdificacion) {
            res.json({ message: 'Tipo de edificación eliminado' });
        } else {
            res.status(404).json({ message: 'Tipo de edificación no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
