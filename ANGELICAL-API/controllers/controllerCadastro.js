import { Video } from '../models/Video.js'

export const cadastroIndex = async (req, res) => {
    try {
        const videos = await Video.findAll()
        res.status(200).json(videos)
    } catch (error) {
        res.status(400).send(error.message)

    }
}


export const cadastroCreate = async (req, res) => {
    const { titulo, duracao, soma, num, descricao, imagem } = req.body

    if (!titulo || !duracao || !soma || !num || !descricao || !imagem) {
        res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
        return
    }

    try {
        const novoVideo = await Video.create({ titulo, duracao, soma, num, descricao, imagem })
        res.status(201).json(novoVideo)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const cadastroDelete = async (req, res) => {
    const { id } = req.params

    try {
        const video = await Video.findByPk(id)
        if (!video) {
            res.status(404).json({ id: 0, msg: "Erro... Video não encontrado" })
            return
        }
        await video.destroy()
        res.status(200).json({ id: 0, msg: "Video deletado com sucesso" })
    } catch (error) {
        res.status(400).send(error)
    }
}