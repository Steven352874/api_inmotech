import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const barrioCiudadCorregimientoVereda = sequelize.define('barrio_ciudad_corregimiento_vereda', {
    Barrio_ciudad_corregimiento_vereda_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Barrio_ciudad_corregimiento_vereda_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Barrio_ciudad_corregimiento_vereda_descripcion: {
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
    tableName: 'barrio_ciudad_corregimiento_vereda',
    timestamp: false
});

export default barrioCiudadCorregimientoVereda;
