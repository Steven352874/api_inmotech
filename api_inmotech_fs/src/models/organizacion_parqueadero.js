import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const organizacionParqueadero = sequelize.define('organizacion_parqueadero', {
    Organizacion_parqueadero_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Organizacion_parqueadero_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Organizacion_parqueadero_direccion: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Organizacion_parqueadero_telefono: {
        type: DataTypes.STRING(20), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Organizacion_parqueadero_email: {
        type: DataTypes.STRING(255), // Adjust length as needed
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
    tableName: 'organizacion_parqueadero',
});

export default organizacionParqueadero;
