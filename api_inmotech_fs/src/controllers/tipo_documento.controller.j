import tipoDocumento from '../models/tipo_documento.js'; // Importa el modelo

// Obtener todos los tipos de documento
export async function getAllTipoDocumentos(req, res) {
    try {
        const allTipoDocumentos = await tipoDocumento.findAll();
        res.json(allTipoDocumentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un tipo de documento por ID
export async function getTipoDocumentoById(req, res) {
    try {
        const tipoDocumentoItem = await tipoDocumento.findByPk(req.params.id);
        if (tipoDocumentoItem) {
            res.json(tipoDocumentoItem);
        } else {
            res.status(404).json({ message: 'Tipo de documento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo tipo de documento
export async function createTipoDocumento(req, res) {
    try {
        const newTipoDocumento = await tipoDocumento.create(req.body);
        res.status(201).json(newTipoDocumento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un tipo de documento
export async function updateTipoDocumento(req, res) {
    try {
        const updatedTipoDocumento = await tipoDocumento.update(req.body, {
            where: { Tipo_documento_id: req.params.id },
        });
        if (updatedTipoDocumento[0]) {
            res.json({ message: 'Tipo de documento actualizado' });
        } else {
            res.status(404).json({ message: 'Tipo de documento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un tipo de documento
export async function deleteTipoDocumento(req, res) {
    try {
        const deletedTipoDocumento = await tipoDocumento.destroy({
            where: { Tipo_documento_id: req.params.id },
        });
        if (deletedTipoDocumento) {
            res.json({ message: 'Tipo de documento eliminado' });
        } else {
            res.status(404).json({ message: 'Tipo de documento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
