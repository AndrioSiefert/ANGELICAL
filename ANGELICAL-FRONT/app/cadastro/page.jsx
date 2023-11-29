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
        <div className="bg-black" >
            <div className='text-center'>
                <h2 className="text-white font-bold">CADASTRO DE VÍDEOS DO YOUTUBE</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className="container m-auto max-w-7xl py-8  my-4 w-full ">
                    <div className="my-2">
                        <label htmlFor="titulo" className="text-white">Título</label>
                        <input type="text" className="border w-full py-1 mb-1 rounded-md" id="titulo" {...register("titulo")} required />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="duracao" className="text-white">Data</label>
                        <input type="text" className="border w-full py-1 mb-1 rounded-md" id="duracao" {...register("data")} required />
                    </div>
                    <div className='' >
                        <label htmlFor="descricao" className="text-white">Descrição</label>
                        <textarea className="border w-full py-1 mb-1 rounded-md  row-auto" id="descricao"  {...register("descricao")} required></textarea>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 my-3">
                            <label htmlFor="imagem" className=" text-white">Imagem</label>
                            <input type="url" className="border w-full py-1 mb-1 rounded-md" id="imagem" {...register("imagem")} required />
                        </div>
                    </div>
                </div>


                <div className='text-white grid gap-x-8 gap-y-4 grid-cols-3 m-auto max-w-7xl '>
                    <input type="submit" className="bg-red-500 font-semibold rounded-full my-3 cursor-pointer " value="Salvar" />
                    <input type="reset" className="bg-blue-500 font-semibold rounded-full my-3 cursor-pointer" value="Limpar" />
                </div>
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