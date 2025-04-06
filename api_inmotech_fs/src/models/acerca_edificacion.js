import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const acercaEdificacion = sequelize.define('acerca_edificacion', {
    Acerca_edificacion_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Acerca_edificacion_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Acerca_edificacion_descripcion: {
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
    tableName: 'acerca_edificacion',
    timestamp: false
});

export default acercaEdificacion;
