import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const tipoEdificacion = sequelize.define('tipo_edificacion', {
    Tipo_edificacion_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Tipo_edificacion_descripcion: {
        type: DataTypes.STRING(255),
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
    tableName: 'tipo_edificacion',
});

export default tipoEdificacion;
