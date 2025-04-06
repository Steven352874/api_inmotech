import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js'; // Importa la instancia de Sequelize

const sexo = sequelize.define('sexo', {
    Sexo_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Sexo_sex: {
        type: DataTypes.STRING(20),
        allowNull: false,
        collate: 'utf8_general_ci',
        unique: true,
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
    tableName: 'sexo',
});

export default sexo;
