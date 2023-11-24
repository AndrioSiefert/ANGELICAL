'use client'
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Altera() {
    const params = useParams();


    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        async function getvideos() {
            const response = await fetch('http://localhost:3004/videos/' + params.id)
            const dado = await response.json()
            setValue("titulo", dado.titulo)
            setValue("data", dado.data)
            setValue("duracao", dado.duracao)
            setValue("visibilidade", dado.visibilidade)
            setValue("descricao", dado.descricao)
            setValue("imagem", dado.imagem)
            setValue("soma", dado.soma)
            setValue("num", dado.num)
        }
        getvideos()
    }, [])


    async function onSubmit(data) {
        const videos = await fetch("http://localhost:3004/videos/" + params.id,
            {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ ...data })
            },
        )
        if (videos.status == 200) {
            toast.success("Alteração concluída com sucesso!")
        } else {

            toast.error("Erro ao alterar o vídeo!")
        }
    }

    return (
        <div className="container">
            <h2 className="mt-3 font">CADASTRO DE VÍDEOS DO YOUTUBE</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <div className="col-sm-6 my-3">
                        <label htmlFor="titulo" className="col-sm-2 col-form-label">Título</label>
                        <input type="text" className="form-control" id="titulo" {...register("titulo")} required />
                    </div>
                    <div className="col-sm-6 my-3">
                        <label htmlFor="data" className="col-sm-2 col-form-label">Data</label>
                        <input type="date" className="form-control" id="data" {...register("data")} required />
                    </div>
                    <div className="col-sm-4 my-3">
                        <label htmlFor="duracao" className="col-sm-2 col-form-label">Duração</label>
                        <input type="text" className="form-control" id="duracao" {...register("duracao")} required />
                    </div>
                    <div className="col-sm-4 my-3">
                        <label htmlFor="soma" className="col-sm-2 col-form-label">Soma</label>
                        <input type="number" className="form-control" id="soma" {...register("soma")} required />
                    </div>
                    <div className="col-sm-4 my-3">
                        <label htmlFor="num" className="col-sm-2 col-form-label">Num</label>
                        <input type="number" className="form-control" id="num" {...register("num")} required />
                    </div>
                    <div className="col-sm-4 my-3">
                        <label htmlFor="visibilidade" className="col-sm-2 col-form-label">Visibilidade</label>
                        <select className="form-select" id="visibilidade" {...register("visibilidade")} required>
                            <option value>Escolha a Visibilidade Do Vídeo</option>
                            <option value="pendente">Pendente</option>
                            <option value="privado">Privado</option>
                            <option value="publico">Publico</option>
                        </select>
                    </div>
                    <div className="col-sm-4 my-3">
                        <label htmlFor="descricao" className="col-sm-2 col-form-label">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="10" {...register("descricao")} required></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 my-3">
                        <label htmlFor="imagem" className="col-sm-2 col-form-label">Imagem</label>
                        <input type="url" className="form-control" id="imagem" {...register("imagem")} required />
                    </div>
                </div>


                <input type="submit" className="btn btn-primary me-2" value="Salvar" />
                <input type="reset" className="btn btn-secondary" value="Limpar"
                />

            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )



}