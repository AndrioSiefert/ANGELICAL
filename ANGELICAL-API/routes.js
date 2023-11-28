import { Router } from "express"

import { cadastroCreate, cadastroIndex } from "./controllers/controllerCadastro.js"
import { clienteLogin, createCliente } from "./controllers/clienteController.js"

const router = Router()


router
    .get('/cadastro', cadastroIndex)
    .post('/cadastro', cadastroCreate)

    .post('/cliente', createCliente)
    .post('/login', clienteLogin)






export default router