'use client'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";






export default function Cadastro() {
    const { register, handleSubmit, reset } = useForm({});


    async function onSubmit(data) {
        //    console.log(data);
        const video = await fetch("http://localhost:3004/cadastro", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ ...data }),
        },
        );
        if (video.status == 201) {
            // alert("Ok! video cadastrado com sucesso")
            toast.success("Ok! video cadastrado com sucesso");
            reset();
        } else {
            console.log(error);
            toast.error("Erro... Não foi possível concluir o cadastro");
        }
    }


    return (
        <div className="container bg-gradient-to-r">
            <h2 className="mt-3 font">CADASTRO DE VÍDEOS DO YOUTUBE</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <div className="col-sm-6 my-3">
                        <label htmlFor="titulo" className="col-sm-2 col-form-label">Título</label>
                        <input type="text" className="form-control" id="titulo" {...register("titulo")} required />
                    </div>
                    {/* <div className="col-sm-6 my-3">
                        <label htmlFor="data" className="col-sm-2 col-form-label">Data</label>
                        <input type="date" className="form-control" id="data" {...register("data")} required />
                    </div> */}
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
                <input type="reset" className="btn btn-secondary" value="Limpar" />
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