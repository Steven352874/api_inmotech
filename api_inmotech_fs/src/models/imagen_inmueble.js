import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const imagenInmueble = sequelize.define('imagen_inmueble', {
    Imagen_inmueble_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Imagen_inmueble_url: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Imagen_inmueble_descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Inmueble_FK: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
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
    tableName: 'imagen_inmueble',
});

export default imagenInmueble;
