import userStatus from '../models/user_status.js';

// Obtener todos los estados de usuario
export async function getAllUserStatuses(req, res) {
    try {
        const allUserStatuses = await userStatus.findAll();
        res.json(allUserStatuses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un estado de usuario por ID
export async function getUserStatusById(req, res) {
    try {
        const userStatusItem = await userStatus.findByPk(req.params.id);
        if (userStatusItem) {
            res.json(userStatusItem);
        } else {
            res.status(404).json({ message: 'Estado de usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo estado de usuario
export async function createUserStatus(req, res) {
    try {
        const newUserStatus = await userStatus.create(req.body);
        res.status(201).json(newUserStatus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un estado de usuario
export async function updateUserStatus(req, res) {
    try {
        const updatedUserStatus = await userStatus.update(req.body, {
            where: { User_status_id: req.params.id },
        });
        if (updatedUserStatus[0]) {
            res.json({ message: 'Estado de usuario actualizado' });
        } else {
            res.status(404).json({ message: 'Estado de usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un estado de usuario
export async function deleteUserStatus(req, res) {
    try {
        const deletedUserStatus = await userStatus.destroy({
            where: { User_status_id: req.params.id },
        });
        if (deletedUserStatus) {
            res.json({ message: 'Estado de usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Estado de usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
