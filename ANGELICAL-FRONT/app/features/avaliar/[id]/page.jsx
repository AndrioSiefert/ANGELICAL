'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { ClienteContext } from "app/contexts/cliente"
import LikesHeart from "app/components/LikesHeart"

export default function Avaliar() {
    const params = useParams()
    const [videos, setVideos] = useState({})
    const { clienteId } = useContext(ClienteContext)

    const { register, handleSubmit, reset } = useForm({})

    useEffect(() => {
        async function getVideos() {
            const response = await fetch("http://localhost:3004/videos/" + params.id)
            const dado = await response.json()

            setVideos({
                id: dado.id,
                titulo: dado.titulo,
                data: dado.data,
                duracao: dado.duracao,
                visibilidade: dado.visibilidade,
                descricao: dado.descricao,
                imagem: dado.imagem,
                soma: dado.soma,
                num: dado.num
            })
        }
        getVideos()

    }, [])

    async function enviaComentario(data) {
        const avaliacao = { ...data, cliente_id: clienteId, videos_id: videos.id, data: new Date() }

        const avalia = await fetch("http://localhost:3004/avaliacoes",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(avaliacao)
            },
        )

        const altera = { soma: Number(videos.soma) + Number(data.heart), num: Number(videos.num) + 1 }
        const atualiza_heart = await fetch("http://localhost:3004/videos/" + videos.id,
            {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(altera)
            },
        )

        if (avalia.status == 201 && atualiza_heart.status == 200) {
            alert("Ok! Avaliação cadastrada com sucesso")
            reset()
        } else {
            alert("Erro no cadastro da avaliação...")
        }
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <div className="card">
                        <img src={videos.imagem} alt="videos" width={300} className="mx-auto d-block mt-1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                {videos.titulo}
                            </h5>
                            <p className="card-text">
                                {videos.genero} - {videos.duracao}
                            </p>
                            <p className="card-text small">
                                {videos.descricao}
                            </p>
                            <LikesHeart soma={videos.soma} num={videos.num} />
                            <span className="ms-2">{videos.num} avaliações</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <form className="card-body" onSubmit={handleSubmit(enviaComentario)}>
                            <h3 className="card-title">Cadastre o seu comentário sobre este videos</h3>
                            <hr />
                            <div className="my-4">
                                <label htmlFor="comentario" className="form-label fs-5">Seu Comentário:</label>
                                <textarea className="form-control form-control-lg" id="comentario" rows="3"
                                    {...register("comentario")}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="heart" className="form-label fs-5">Sua Avaliação (heart)</label>
                                <select className="form-select form-select-lg mb-3" {...register("heart")}>
                                    <option value="1">1 Coração</option>
                                    <option value="2">2 Corações</option>
                                    <option value="3">3 Corações</option>
                                    <option value="4">4 Corações</option>
                                    <option value="5">5 Corações</option>
                                </select>
                            </div>
                            <div className="d-grid gap-2 col-6 ms-auto">
                                <input type="submit" className="btn btn-primary btn-lg mt-3" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}