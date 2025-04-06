import sexo from '../models/sexo.js';

// Obtener todos los sexos
export async function getAllSexos(req, res) {
    try {
        const allSexos = await sexo.findAll();
        res.json(allSexos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un sexo por ID
export async function getSexoById(req, res) {
    try {
        const sexoItem = await sexo.findByPk(req.params.id);
        if (sexoItem) {
            res.json(sexoItem);
        } else {
            res.status(404).json({ message: 'Sexo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo sexo
export async function createSexo(req, res) {
    try {
        const newSexo = await sexo.create(req.body);
        res.status(201).json(newSexo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un sexo
export async function updateSexo(req, res) {
    try {
        const updatedSexo = await sexo.update(req.body, {
            where: { Sexo_id: req.params.id },
        });
        if (updatedSexo[0]) {
            res.json({ message: 'Sexo actualizado' });
        } else {
            res.status(404).json({ message: 'Sexo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un sexo
export async function deleteSexo(req, res) {
    try {
        const deletedSexo = await sexo.destroy({
            where: { Sexo_id: req.params.id },
        });
        if (deletedSexo) {
            res.json({ message: 'Sexo eliminado' });
        } else {
