import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const inmueble = sequelize.define('inmueble', {
    Inmueble_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Valor: {
        type: DataTypes.DECIMAL(15, 2), // Adjust precision and scale as needed
        allowNull: false,
    },
    Area: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
        allowNull: false,
    },
    Descripcion_General: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Antiguedad: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
    Motivo_VoA: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Situacion_inmueble: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Tipo_edificacion_FK: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
    Otras_caracteristicas_FK: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
