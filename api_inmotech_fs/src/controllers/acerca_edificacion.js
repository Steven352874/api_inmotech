import acercaEdificacion from '../models/acerca_edificacion.js';

// Obtener todas las descripciones de edificaciones
export async function getAllAcercaEdificaciones(req, res) {
    try {
        const allAcercaEdificaciones = await acercaEdificacion.findAll();
        res.json(allAcercaEdificaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una descripción de edificación por ID
export async function getAcercaEdificacionById(req, res) {
    try {
        const acercaEdificacionItem = await acercaEdificacion.findByPk(req.params.id);
        if (acercaEdificacionItem) {
            res.json(acercaEdificacionItem);
        } else {
            res.status(404).json({ message: 'Descripción de edificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva descripción de edificación
export async function createAcercaEdificacion(req, res) {
    try {
        const newAcercaEdificacion = await acercaEdificacion.create(req.body);
        res.status(201).json(newAcercaEdificacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una descripción de edificación
export async function updateAcercaEdificacion(req, res) {
    try {
        const updatedAcercaEdificacion = await acercaEdificacion.update(req.body, {
            where: { Acerca_edificacion_id: req.params.id },
        });
        if (updatedAcercaEdificacion[0]) {
            res.json({ message: 'Descripción de edificación actualizada' });
        } else {
            res.status(404).json({ message: 'Descripción de edificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una descripción de edificación
export async function deleteAcercaEdificacion(req, res) {
    try {
        const deletedAcercaEdificacion = await acercaEdificacion.destroy({
            where: { Acerca_edificacion_id: req.params.id },
        });
        if (deletedAcercaEdificacion) {
            res.json({ message: 'Descripción de edificación eliminada' });
        } else {
            res.status(404).json({ message: 'Descripción de edificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
