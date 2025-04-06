import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const asignacion = sequelize.define('asignacion', {
    Asignacion_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Asignacion_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Asignacion_descripcion: {
        type: DataTypes.TEXT,
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
    tableName: 'asignacion',
    timestamp: false
});

export default asignacion;
