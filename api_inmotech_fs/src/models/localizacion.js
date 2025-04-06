import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const localizacion = sequelize.define('localizacion', {
    Localizacion_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Localizacion_latitud: {
        type: DataTypes.DECIMAL(10, 8), // Adjust precision and scale as needed
        allowNull: false,
    },
    Localizacion_longitud: {
        type: DataTypes.DECIMAL(11, 8), // Adjust precision and scale as needed
        allowNull: false,
    },
    Localizacion_descripcion: {
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
    tableName: 'localizacion',
});

export default localizacion;
