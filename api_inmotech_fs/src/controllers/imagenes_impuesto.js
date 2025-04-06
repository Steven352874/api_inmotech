import imagenesImpuesto from '../models/imagenes_impuesto.js';

// Obtener todas las imágenes de impuesto
export async function getAllImagenesImpuesto(req, res) {
    try {
        const allImagenesImpuesto = await imagenesImpuesto.findAll();
        res.json(allImagenesImpuesto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener una imagen de impuesto por ID
export async function getImagenesImpuestoById(req, res) {
    try {
        const imagenesImpuestoItem = await imagenesImpuesto.findByPk(req.params.id);
        if (imagenesImpuestoItem) {
            res.json(imagenesImpuestoItem);
        } else {
            res.status(404).json({ message: 'Imagen de impuesto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear una nueva imagen de impuesto
export async function createImagenesImpuesto(req, res) {
    try {
        const newImagenesImpuesto = await imagenesImpuesto.create(req.body);
        res.status(201).json(newImagenesImpuesto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una imagen de impuesto
export async function updateImagenesImpuesto(req, res) {
    try {
        const updatedImagenesImpuesto = await imagenesImpuesto.update(req.body, {
            where: { Imagenes_impuesto_id: req.params.id },
        });
        if (updatedImagenesImpuesto[0]) {
            res.json({ message: 'Imagen de impuesto actualizada' });
        } else {
            res.status(404).json({ message: 'Imagen de impuesto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar una imagen de impuesto
export async function deleteImagenesImpuesto(req, res) {
    try {
        const deletedImagenesImpuesto = await imagenesImpuesto.destroy({
            where: { Imagenes_impuesto_id: req.params.id },
        });
        if (deletedImagenesImpuesto) {
            res.json({ message: 'Imagen de impuesto eliminada' });
        } else {
            res.status(404).json({ message: 'Imagen de impuesto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
