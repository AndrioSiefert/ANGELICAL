import { Cliente } from '../models/Cliente.js'

export const clienteIndex = async (req, res) => {

    try {


        const clientes = await Cliente.findAll();
        res.status(200).json(clientes)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createCliente = async (req, res) => {
    const { nome, email, senha, tipo } = req.body

    if (!nome || !email || !senha) {
        return res.status(400).send({ message: 'Dados inválidos' })
    }

    try {
        const criarCliente = await Cliente.create({ nome, email, senha, tipo })
        res.status(201).json(criarCliente)
    } catch (error) {
        res.status(400).send(error)
    }

}
export const clienteLogin = async (req, res) => {

    const { email, senha } = req.body

    try {
        const cliente = await Cliente.findOne({ where: { email, senha } });


        if (cliente) {
            res.status(200).json({ id: cliente.id, nome: cliente.nome, tipo: cliente.tipo });
        } else {
            res.status(401).json({ msg: "Acesso Negado" });
            return
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
