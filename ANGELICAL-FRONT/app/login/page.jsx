'use client'
import { TfiEmail } from "react-icons/tfi";
import { TbLock } from "react-icons/tb";
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import { ClienteContext } from 'app/contexts/cliente';

import { useRouter } from 'next/navigation';


export default function Login() {
    const { mudaId, mudaNome } = useContext(ClienteContext);
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    async function verificarLogin(data) {
        const response = await fetch("http://localhost:3004/login",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email: data.email, senha: data.senha })
            },
        )

        if (response.status == 401) {
            alert("Não está cadastrado")
        } else {
            alert("Ok!")
            const cliente = await response.json()
            console.log(cliente)
            mudaId(cliente.id)
            mudaNome(cliente.nome)
            localStorage.setItem("cliente_logado", JSON.stringify({ id: cliente.id, nome: cliente.nome }))
            router.push("/")
        }
    }




    return (


        <section className="bg-gradient-to-tl from-[#f28383]  via-[#9d6cd2]  to-90% flex items-center justify-center h-screen">
            <div className="max-w-[960px]">
                <div className="w-80 py-4 text-center">
                    <h1 className="text-5xl font-bold  py-2">LOGIN</h1>
                    <p className="text-black font-bold ml-4 ">FAÇA LOGIN PARA TER ACESSO AOS RECURSOS DO SITE</p>
                </div>

                <form onSubmit={handleSubmit(verificarLogin)} className="space-y-6">
                    <div className="relative">
                        <div className="absolute top-3 left-2 text-gray-500">
                            <TfiEmail />
                        </div>
                        <input type="email" id="email" placeholder='E-mail' className="w-80 py-2 px-7 rounded-full focus:bg-gray-500 focus:outline-none focus:ring" {...register("email")} required />
                    </div>

                    <div className="relative">
                        <div className="absolute top-3 left-2 text-gray-500">
                            <TbLock />
                        </div>
                        <input type="password" id="senha" placeholder="Senha" className="w-80 py-2 px-7 rounded-full focus:bg-gray-500 focus:outline-none focus:ring" {...register("senha")} required />
                    </div>


                    <button type="submit" className=" bg-gradient-to-br via-[#d26c6c] w-80 font-semibold rounded-full py-5">Entrar</button>


                    <div role="button" className="text-center w-80 bg-gradient-to-br via-[#d26c6c] font-semibold rounded-full py-5">
                        <Link href="/novocliente">
                            CADASTRE-SE
                        </Link>
                    </div>
                </form>
            </div >
        </section >

    )
}
