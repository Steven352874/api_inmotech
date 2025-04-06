import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const suscripcion = sequelize.define('suscripcion', {
    Suscripcion_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Suscripcion_fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Suscripcion_tipo: {
        type: DataTypes.STRING(50), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Suscripcion_descripcion: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Suscripcion_duracion: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    Factura_FK: {
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
    tableName: 'suscripcion',
});

export default suscripcion;
