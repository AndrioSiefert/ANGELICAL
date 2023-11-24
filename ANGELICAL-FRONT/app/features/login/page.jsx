'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ClienteContext } from 'app/contexts/cliente';
import { useRouter } from 'next/navigation';
import '../../styles/login.css';

export default function Login() {
    const router = useRouter();
    const { mudaId, mudaNome } = useContext(ClienteContext);
    const { register, handleSubmit } = useForm();

    async function verificarLogin(data) {
        //    console.log(data)
        const login = `email=${data.email}&senha=${data.senha}`
        const response = await fetch(`http://localhost:3004/clientes?${login}`)
        const cliente = await response.json()
        if (cliente.length == 0) {
            alert("Não está cadastrado")
        } else {
            // alert("Ok!")
            mudaId(cliente[0].id)
            mudaNome(cliente[0].nome)
            localStorage.setItem("cliente_logado", JSON.stringify({ id: cliente[0].id, nome: cliente[0].nome }))
            router.push("/")
        }
    }



    return (
        <section className="row">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="../login.png" className="img-fluid" alt="angelical Imagem" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit(verificarLogin)}>

                            <div className="form-floating mb-4">
                                <input type="email" id="email" className="form-control form-control-lg" {...register("email")} required />
                                <label htmlFor="floatingInput">Email</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="password" id="senha" className="form-control form-control-lg" {...register("senha")} required />
                                <label className="form-label">Senha</label>
                            </div>




                            <button type="submit" className="btn-entrar btn-primary btn-lg btn-block">Entrar</button>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OU</p>
                            </div>

                            <div role="button">
                                <Link className="btn btn-primary btn-lg btn-block" href="/novocliente">
                                    CADASTRE-SE
                                </Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
