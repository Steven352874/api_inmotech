import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const tipoDocumento = sequelize.define('tipo_documento', {
    Tipo_documento_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Tipo_documento_name: {
        type: DataTypes.STRING(50), // Adjusted length as needed
        allowNull: false,
        collate: 'utf8_general_ci',
        unique: true,
    },
    Tipo_documento_acronym: {
        type: DataTypes.STRING(10), // Adjusted length as needed
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
    tableName: 'tipo_documento',
});

export default tipoDocumento;
