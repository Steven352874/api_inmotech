import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const factura = sequelize.define('factura', {
    Factura_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Factura_numero: {
        type: DataTypes.STRING(255), // Ajusta la longitud según sea necesario
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Factura_fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Factura_total: {
        type: DataTypes.DECIMAL(10, 2), // Ajusta la precisión según sea necesario
        allowNull: false,
    },
    Factura_cliente_FK: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    Factura_metodo_pago_FK: {
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
    tableName: 'factura',
});

export default factura;
