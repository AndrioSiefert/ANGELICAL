'use client';
import Link from 'next/link';
import { useEffect, useState } from "react";









export default function admin() {
    const [totalAvaliacoes, setVideo] = useState([])
    const [geral, setGeral] = useState({})

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };

    useEffect(() => {

        async function getDadosGerais() {
            const response = await fetch("http://localhost:3004/dados_gerais")
            const dados = await response.json()
            setGeral(dados)
        }
        getDadosGerais()
    }, [])




    return (

        <div className="container  px-28 relative">

            <nav className="flex items-center">

                <ul className="flex-1 text-center ">
                    <li className="list-none inline-block px-5">
                        <Link className="no-underline text-white" href='/cadastro'>CADASTRAR</Link>
                    </li>
                    <li className="list-none inline-block px-5" >
                        <Link className="no-underline text-white" href='/admAvaliacoes'>GERENCIAR</Link>
                    </li>

                </ul>


            </nav>
            <div className="containe bg-white">
                <h2 className="mt-3 mb-4">Visão Geral do Sistema</h2>

                <span className="flex flex-col">
                    <p>Nº de Clientes Cadastrados</p>
                    <p className="badge bg-danger">{geral.clientes}</p>
                </span>
                <span className="flex flex-col">
                    <p>Nº de videos Cadastrados</p>
                    <p className="badge bg-danger">{geral.video}</p>
                </span>

                <span className="flex flex-col">
                    <p>Nº de Comentarios</p>
                    <p className="">{geral.avaliacoes}</p>
                </span>


            </div>
        </div >

    )
}