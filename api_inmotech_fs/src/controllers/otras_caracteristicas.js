import otrasCaracteristicas from '../models/otras_caracteristicas.js';

// Obtener todas las otras características
export async function getAllOtrasCaracteristicas(req, res) {
    try {
        const allOtrasCaracteristicas = await otrasCaracteristicas.findAll();
        res.json(allOtrasCaracteristicas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener otra característica por ID
export async function getOtraCaracteristicaById(req, res) {
    try {
        const otraCaracteristicaItem = await otrasCaracteristicas.findByPk(req.params.id);
        if (otraCaracteristicaItem) {
            res.json(otraCaracteristicaItem);
        } else {
            res.status(404).json({ message: 'Otra característica no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva otra característica
export async function createOtraCaracteristica(req, res) {
    try {
        const newOtraCaracteristica = await otrasCaracteristicas.create(req.body);
        res.status(201).json(newOtraCaracteristica);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar otra característica
export async function updateOtraCaracteristica(req, res) {
    try {
        const updatedOtraCaracteristica = await otrasCaracteristicas.update(req.body, {
            where: { Otras_caracteristicas_id: req.params.id },
        });
        if (updatedOtraCaracteristica[0]) {
            res.json({ message: 'Otra característica actualizada' });
        } else {
            res.status(404).json({ message: 'Otra característica no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar otra característica
export async function deleteOtraCaracteristica(req, res) {
    try {
        const deletedOtraCaracteristica = await otrasCaracteristicas.destroy({
            where: { Otras_caracteristicas_id: req.params.id },
        });
        if (deletedOtraCaracteristica) {
            res.json({ message: 'Otra característica eliminada' });
        } else {
            res.status(404).json({ message: 'Otra característica no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
