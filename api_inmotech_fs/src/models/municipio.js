import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const municipio = sequelize.define('municipio', {
    Municipio_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Municipio_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Municipio_descripcion: {
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
    tableName: 'municipio',
    timestamp: false
});

export default municipio;
