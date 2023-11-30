import { Router } from "express"

import { cadastroCreate, cadastroDelete, cadastroIndex, videoShow } from "./controllers/controllerCadastro.js"
import { clienteLogin, createCliente } from "./controllers/clienteController.js"
import { avaliacaoCreate, avaliacaoDestroy, avaliacaoGraph, avaliacaoIndex, avaliacaoVideo, dadosGerais } from "./controllers/avaliacaoController.js"

const router = Router()


router

    // CADASTRO - VIDEOS
    .get('/video', cadastroIndex)
    .post('/video', cadastroCreate)
    .delete('/video/:id', cadastroDelete)
    .get('/video/:id', videoShow)




    // CLIENTE
    .post('/cliente', createCliente)
    .post('/login', clienteLogin)



    // AVALIAÇÃO
    .get('/avaliacoes', avaliacaoIndex)
    .post('/avaliacoes', avaliacaoCreate)
    .delete('/avaliacoes/:id', avaliacaoDestroy)
    .get('/avaliacoes/video/:video_id', avaliacaoVideo)
    .get('/avaliacoes/graph', avaliacaoGraph)


    // DADOS
    .get('/dados_gerais', dadosGerais)

export default router