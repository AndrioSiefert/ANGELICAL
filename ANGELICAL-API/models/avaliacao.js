import { DataTypes } from "sequelize";
import { sequelize } from "../database/data.js";
import { Video } from './Video.js';
import { Cliente } from './Cliente.js';

export const Avaliacao = sequelize.define('avaliacao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comentario: {
        type: DataTypes.STRING,
    }
}, {
    tableName: "avaliacoes"
});


Avaliacao.belongsTo(Video, {
    foreignKey: {
        name: 'video_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Video.hasMany(Avaliacao, {
    foreignKey: 'video_id'
})

Avaliacao.belongsTo(Cliente, {
    foreignKey: {
        name: 'cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Cliente.hasMany(Avaliacao, {
    foreignKey: 'cliente_id'
})