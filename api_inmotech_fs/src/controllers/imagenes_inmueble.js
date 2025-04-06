import imagenesInmueble from '../models/imagenes_inmueble.js';

// Obtener todas las imágenes de inmueble
export async function getAllImagenesInmueble(req, res) {
    try {
        const allImagenesInmueble = await imagenesInmueble.findAll();
        res.json(allImagenesInmueble);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una imagen de inmueble por ID
export async function getImagenesInmuebleById(req, res) {
    try {
        const imagenesInmuebleItem = await imagenesInmueble.findByPk(req.params.id);
        if (imagenesInmuebleItem) {
            res.json(imagenesInmuebleItem);
        } else {
            res.status(404).json({ message: 'Imagen de inmueble no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva imagen de inmueble
export async function createImagenesInmueble(req, res) {
    try {
        const newImagenesInmueble = await imagenesInmueble.create(req.body);
        res.status(201).json(newImagenesInmueble);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una imagen de inmueble
export async function updateImagenesInmueble(req, res) {
    try {
        const updatedImagenesInmueble = await imagenesInmueble.update(req.body, {
            where: { Imagen_inmueble_id: req.params.id },
        });
        if (updatedImagenesInmueble[0]) {
            res.json({ message: 'Imagen de inmueble actualizada' });
        } else {
            res.status(404).json({ message: 'Imagen de inmueble no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una imagen de inmueble
export async function deleteImagenesInmueble(req, res) {
    try {
        const deletedImagenesInmueble = await imagenesInmueble.destroy({
            where: { Imagen_inmueble_id: req.params.id },
        });
        if (deletedImagenesInmueble) {
            res.json({ message: 'Imagen de inmueble eliminada' });
        } else {
            res.status(404).json({ message: 'Imagen de inmueble no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
