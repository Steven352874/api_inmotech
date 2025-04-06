import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const impuestoValor = sequelize.define('impuesto_valor', {
    Impuesto_valor_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Impuesto_valor_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Impuesto_valor_porcentaje: {
        type: DataTypes.DECIMAL(5, 2), // Adjust precision and scale as needed
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
    tableName: 'impuesto_valor',
});

export default impuestoValor;
