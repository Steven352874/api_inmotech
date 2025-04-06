import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const imagenImpuesto = sequelize.define('imagen_impuesto', {
    Imagen_impuesto_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Imagen_impuesto_url: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Imagen_impuesto_descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Impuesto_FK: {
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
    tableName: 'imagen_impuesto',
});

export default imagenImpuesto;
