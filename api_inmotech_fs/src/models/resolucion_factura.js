import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const resolucionFactura = sequelize.define('resolucion_factura', {
    Resolucion_factura_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Resolucion_factura_numero: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Resolucion_factura_fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Resolucion_factura_fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Resolucion_factura_prefijo: {
        type: DataTypes.STRING(10), // Adjust length as needed
        allowNull: true,
        collate: 'utf8_general_ci',
    },
    Resolucion_factura_numero_inicial: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    Resolucion_factura_numero_final: {
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
    tableName: 'resolucion_factura',
});

export default resolucionFactura;
