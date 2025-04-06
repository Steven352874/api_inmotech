import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const pago = sequelize.define('pago', {
    Pago_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Pago_monto: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
        allowNull: false,
    },
    Pago_fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Pago_metodo: {
        type: DataTypes.STRING(50), // Adjust length as needed
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
    tableName: 'pago',
});

export default pago;
