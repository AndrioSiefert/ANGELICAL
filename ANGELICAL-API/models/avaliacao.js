import { DataTypes } from sequelize;
import { sequelize } from './database/data.js;'

export const Avaliacao = sequelize.define('avaliacao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gostei: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: false
    }
})