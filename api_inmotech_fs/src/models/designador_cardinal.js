import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const designadorCardinal = sequelize.define('designador_cardinal', {
    Designador_cardinal_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Designador_cardinal_nombre: {
        type: DataTypes.STRING(255), // Adjust length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Designador_cardinal_descripcion: {
        type: DataTypes.TEXT,
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
    tableName: 'designador_cardinal',
    timestamp: false
});

export default designadorCardinal;
