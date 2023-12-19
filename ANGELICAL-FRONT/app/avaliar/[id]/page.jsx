'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { ClienteContext } from "app/contexts/cliente"


export default function Avaliar() {
    const params = useParams()
    const [video, setVideo] = useState({})
    const { clienteId } = useContext(ClienteContext)

    const { register, handleSubmit, reset } = useForm({
    })

    useEffect(() => {
        async function getVideo() {
            const response = await fetch("http://localhost:3004/video/" + params.id)
            const dado = await response.json()
            setVideo({
                id: dado.id,
                titulo: dado.titulo,
                data: dado.data,
                imagem: dado.imagem,
                descricao: dado.descricao,
            })
        }
        getVideo()

    }, [])

    async function enviaComentario(data) {
        const avaliacao = { ...data, cliente_id: clienteId, video_id: video.id }


        const avalia = await fetch("http://localhost:3004/avaliacoes",

            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(avaliacao)
            },
        )


        if (avalia.status == 201) {
            alert("Ok! Avaliação cadastrada com sucesso")
            reset()
        } else {
            alert("Erro no cadastro da avaliação...")
        }
    }

    return (
        <div className=" relative w-full text-center  m-auto bg-white ">
            <div className="mt-5">
                <div className="">
                    <div>
                        <img src={video.imagem} alt="video" width={300} className="mx-auto  mt-1" />
                        <div className="flex flex-col">
                            <h5 className="text-xl">
                                {video.titulo}
                            </h5>
                            <p className="text-sm">
                                {video.data}
                            </p>
                            <p className="">
                                {video.descricao}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="mt-5">
                        <form className="" onSubmit={handleSubmit(enviaComentario)}>
                            <hr />
                            <div className="my-4 flex flex-col">
                                <label htmlFor="comentario" className="text-center">Deixe Algum Comentário:</label>
                                <textarea className="m-auto" id="comentario" rows="3"
                                    {...register("comentario")}></textarea>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="rounded-md font-bold  bg-red-600 cursor-pointer" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}