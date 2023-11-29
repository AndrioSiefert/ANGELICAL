'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Avaliacoes() {
    const params = useParams()
    const [avaliacoes, setAvaliacoes] = useState([])
    const [video, setVideo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getAvalia() {
            const response = await fetch("http://localhost:3004/avaliacoes/video/" + params.video_id)
            const dados = await response.json()
            setAvaliacoes(dados)
        }
        getAvalia()

        async function getVideo() {
            const response = await fetch("http://localhost:3004/video/" + params.video_id)
            const dado = await response.json()
            setVideo(dado)
            setIsLoading(false)
        }
        getVideo()
    }, [])



    const listaAvaliacoes = avaliacoes.map(avalia => (
        <tr key={avalia.id}>
            <td>{avalia.cliente.nome}</td>
            <td>{avalia.comentario}</td>
        </tr>
    ))

    if (isLoading) {
        return (
            <div className="container">
                <h2>Listagem das Avaliações </h2>
                <h5>Aguarde... Carregando os dados</h5>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <h2 className="mt-2">
                <img src={video.imagem} alt="Capa" width={100} />
                <span className="ms-3">
                    Avaliações dos Clientes
                </span>
            </h2>
            <h3>
                <span className="ms-3">
                    video: {video.titulo}
                </span>
            </h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome do Cliente</th>
                        <th>Avaliação</th>
                        <th>Comentário</th>
                    </tr>
                </thead>
                <tbody>
                    {listaAvaliacoes}
                </tbody>
            </table>
        </div>
    )
}