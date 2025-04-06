import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const retenedorIva = sequelize.define('retenedor_iva', {
    Retenedor_iva_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Retenedor_iva_name: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Retenedor_iva_percentage: {
        type: DataTypes.DECIMAL(5, 2), // Example: 10.00
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
    tableName: 'retenedor_iva',
});

export default retenedorIva;
