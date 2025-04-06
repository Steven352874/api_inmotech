import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const inmueble = sequelize.define('inmueble', {
    Inmueble_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Inmueble_matricula: {
        type: DataTypes.STRING(255), // Ajusta la longitud según sea necesario
        allowNull: false,
        collate: 'utf8_general_ci',
    },
    Inmueble_direccion_FK: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    Inmueble_area: {
        type: DataTypes.DECIMAL(10, 2), // Ajusta la precisión según sea necesario
        allowNull: false,
    },
    Inmueble_valor_catastral: {
        type: DataTypes.DECIMAL(10, 2), // Ajusta la precisión según sea necesario
        allowNull: false,
    },
    Inmueble_tipo_inmueble_FK: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    Inmueble_barrio_FK: {
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
    tableName: 'inmueble',
});

export default inmueble;
