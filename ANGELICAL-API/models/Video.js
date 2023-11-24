import { DataTypes } from "sequelize";
import { sequelize } from '../database/data.js'

export const Video = sequelize.define('video',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    duracao: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    soma: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    num: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})