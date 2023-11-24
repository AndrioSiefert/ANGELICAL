import { Router } from "express"

import { cadastroCreate, cadastroIndex } from "./controllers/controllerCadastro.js"

const router = Router()


router
    .get('/cadastro', cadastroIndex)
    .post('/cadastro', cadastroCreate)






export default router