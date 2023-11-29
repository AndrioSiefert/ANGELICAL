import { Op } from "sequelize";
import { sequelize } from '../database/data.js'
import { Avaliacao } from '../models/Avaliacao.js';
import { Video } from '../models/Video.js';
import { Cliente } from '../models/Cliente.js';



export const avaliacaoIndex = async (req, res) => {

    try {
        const avaliacoes = await Avaliacao.findAll({
            include: [Cliente, Video],
            order: [['id', 'desc']]
        })
        res.status(200).json(avaliacoes)
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const avaliacaoVideo = async (req, res) => {

    const { video_id } = req.params

    try {
        const avaliacoes = await Avaliacao.findAll({
            where: { video_id },
            include: Cliente,
            order: [['id', 'desc']]
        });
        res.status(200).json(avaliacoes)
    } catch (error) {
        res.status(400).send(error)
    }
}


export const avaliacaoCreate = async (req, res) => {
    const { video_id, cliente_id, comentario } = req.body


    if (!video_id || !cliente_id || !comentario) {
        res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
        return
    }

    const t = await sequelize.transaction();

    try {

        const avaliacao = await Avaliacao.create({
            video_id, cliente_id, comentario
        }, { transaction: t });



        await t.commit();
        res.status(201).json(avaliacao)

    } catch (error) {

        await t.rollback();
        res.status(400).json({ "id": 0, "Erro": error })

    }
}

export const avaliacaoDestroy = async (req, res) => {
    const { id } = req.params

    const t = await sequelize.transaction();

    try {

        const avaliacao = await Avaliacao.findByPk(id)




        await Avaliacao.destroy({
            where: { id }
        });

        await t.commit();
        res.status(200).json({ msg: "Ok! Avaliação Excluída com Sucesso" })

    } catch (error) {

        await t.rollback();
        res.status(400).json({ "id": 0, "Erro": error })

    }
}
