import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const impuesto = sequelize.define('impuesto', {
    Impuesto_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Impuesto_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Impuesto_descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Impuesto_valor_FK: {
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
    tableName: 'impuesto',
});

export default impuesto;
