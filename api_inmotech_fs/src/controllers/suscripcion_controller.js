import suscripcion from '../models/suscripcion.js';

// Obtener todas las suscripciones
export async function getAllSuscripciones(req, res) {
    try {
        const allSuscripciones = await suscripcion.findAll();
        res.json(allSuscripciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una suscripción por ID
export async function getSuscripcionById(req, res) {
    try {
        const suscripcionItem = await suscripcion.findByPk(req.params.id);
        if (suscripcionItem) {
            res.json(suscripcionItem);
        } else {
            res.status(404).json({ message: 'Suscripción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva suscripción
export async function createSuscripcion(req, res) {
    try {
        const newSuscripcion = await suscripcion.create(req.body);
        res.status(201).json(newSuscripcion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una suscripción
export async function updateSuscripcion(req, res) {
    try {
        const updatedSuscripcion = await suscripcion.update(req.body, {
            where: { Suscripcion_id: req.params.id },
        });
        if (updatedSuscripcion[0]) {
            res.json({ message: 'Suscripción actualizada' });
        } else {
            res.status(404).json({ message: 'Suscripción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una suscripción
export async function deleteSuscripcion(req, res) {
    try {
        const deletedSuscripcion = await suscripcion.destroy({
            where: { Suscripcion_id: req.params.id },
        });
        if (deletedSuscripcion) {
            res.json({ message: 'Suscripción eliminada' });
        } else {
            res.status(404).json({ message: 'Suscripción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
