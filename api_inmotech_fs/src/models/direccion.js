import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const direccion = sequelize.define('direccion', {
    Direccion_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Direccion_calle: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Direccion_numero: {
        type: DataTypes.STRING(50), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Direccion_complemento: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Direccion_ciudad: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Direccion_estado: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Direccion_pais: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
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
    tableName: 'direccion',
    timestamp: false
});

export default direccion;
