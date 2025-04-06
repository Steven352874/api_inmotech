import organizacionParqueadero from '../models/organizacion_parqueadero.js';

// Obtener todas las organizaciones de parqueadero
export async function getAllOrganizacionesParqueadero(req, res) {
    try {
        const allOrganizacionesParqueadero = await organizacionParqueadero.findAll();
        res.json(allOrganizacionesParqueadero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una organización de parqueadero por ID
export async function getOrganizacionParqueaderoById(req, res) {
    try {
        const organizacionParqueaderoItem = await organizacionParqueadero.findByPk(req.params.id);
        if (organizacionParqueaderoItem) {
            res.json(organizacionParqueaderoItem);
        } else {
            res.status(404).json({ message: 'Organización de parqueadero no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva organización de parqueadero
export async function createOrganizacionParqueadero(req, res) {
    try {
        const newOrganizacionParqueadero = await organizacionParqueadero.create(req.body);
        res.status(201).json(newOrganizacionParqueadero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una organización de parqueadero
export async function updateOrganizacionParqueadero(req, res) {
    try {
        const updatedOrganizacionParqueadero = await organizacionParqueadero.update(req.body, {
            where: { Organizacion_parqueadero_id: req.params.id },
        });
        if (updatedOrganizacionParqueadero[0]) {
            res.json({ message: 'Organización de parqueadero actualizada' });
        } else {
            res.status(404).json({ message: 'Organización de parqueadero no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una organización de parqueadero
export async function deleteOrganizacionParqueadero(req, res) {
    try {
        const deletedOrganizacionParqueadero = await organizacionParqueadero.destroy({
            where: { Organizacion_parqueadero_id: req.params.id },
        });
        if (deletedOrganizacionParqueadero) {
            res.json({ message: 'Organización de parqueadero eliminada' });
        } else {
            res.status(404).json({ message: 'Organización de parqueadero no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
