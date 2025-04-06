import inmueble from '../models/inmueble.js';

// Obtener todos los inmuebles
export async function getAllInmuebles(req, res) {
    try {
        const allInmuebles = await inmueble.findAll();
        res.json(allInmuebles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un inmueble por ID
export async function getInmuebleById(req, res) {
    try {
        const inmuebleItem = await inmueble.findByPk(req.params.id);
        if (inmuebleItem) {
            res.json(inmuebleItem);
        } else {
            res.status(404).json({ message: 'Inmueble no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo inmueble
export async function createInmueble(req, res) {
    try {
        const newInmueble = await inmueble.create(req.body);
        res.status(201).json(newInmueble);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un inmueble
export async function updateInmueble(req, res) {
    try {
        const updatedInmueble = await inmueble.update(req.body, {
            where: { Inmueble_id: req.params.id },
        });
        if (updatedInmueble[0]) {
            res.json({ message: 'Inmueble actualizado' });
        } else {
            res.status(404).json({ message: 'Inmueble no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un inmueble
export async function deleteInmueble(req, res) {
    try {
