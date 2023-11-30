'use client'
import { useEffect, useState } from "react"
import ItemAvalia from "app/components/itemAvalia"
import { useRouter } from "next/navigation"
import Link from "next/link"


export default function Avaliacoes() {
    const [avaliacoes, setAvaliacoes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        async function getAvalia() {
            const response = await fetch("http://localhost:3004/avaliacoes")
            const dados = await response.json()
            setAvaliacoes(dados)
            setIsLoading(false)
        }
        getAvalia()
    }, [])

    async function excluiAvaliacao(id) {
        const response = await fetch("http://localhost:3004/avaliacoes/" + id, {
            method: "DELETE"
        })
        const novosDados = avaliacoes.filter(avalia => avalia.id != id)
        setAvaliacoes(novosDados)
    }

    const listaAvaliacoes = avaliacoes.map(avalia => (
        <ItemAvalia key={avalia.id}
            avalia={avalia}
            exclui={() => excluiAvaliacao(avalia.id)}
        />
    ))

    if (isLoading) {
        return (
            <div className="container">
                <h2>Listagem de Avaliações</h2>
                <h5>Aguarde... Carregando os dados</h5>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <h2 className="mt-2 text-center font-bold">Listagem de Comentarios</h2>
            <Link href='/adm'> VOLTAR
            </Link>

            <table className="container m-auto">
                <thead>
                    <tr>
                        <th>imagem</th>
                        <th>Título</th>
                        <th>Nome do Cliente</th>
                        <th>Comentário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaAvaliacoes}
                </tbody>
            </table>
        </div>
    )
}