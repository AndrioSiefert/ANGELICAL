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
    const { titulo, data, duracao, soma, num, descricao, imagem } = req.body

    if (!titulo || !data || !duracao || !soma || !num || !descricao || !imagem) {
        return res.status(400).send('Dados inválidos')
    }

    try {
        const novoVideo = await Video.create({
            titulo,
            data,
            duracao,
            soma,
            num,
            descricao,
            imagem
        })
        res.status(200).json(novoVideo)
    } catch (error) {
        res.status(400).send(error.message)
    }
}