import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const otrasCaracteristicas = sequelize.define('otras_caracteristicas', {
    Otras_caracteristicas_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Otras_caracteristicas_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Otras_caracteristicas_descripcion: {
        type: DataTypes.TEXT, // Use TEXT for potentially longer descriptions
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
}, {
    tableName: 'otras_caracteristicas',
});

export default otrasCaracteristicas;
