'use client'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import Lista from 'app/components/Lista';



export default function Listagem() {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();



    useEffect(() => {
        async function loadVideos() {
            const response = await fetch('http://localhost:3004/cadastro');
            const data = await response.json();
            setVideos(data);
            setIsLoading(false);
        }
        loadVideos();
    }, []);

    async function deleteVideo(id) {
        const responde = await fetch('http://localhost:3004/cadastro/' + id, {
            method: 'DELETE'
        })
        const atualizar = videos.filter(videos => videos.id !== id)
        setVideos(atualizar)
    }


    const listaVideos = videos.map(videos => (
        <Lista
            key={videos.id}
            videos={videos}
            exclui={() => deleteVideo(videos.id)}
            altera={() => router.push('altera/' + videos.id)}
        />

    ))






    // adicionar animação de carregamento
    if (isLoading) {
        return (
            <div className="container">
                <h2 className="mt-3">LISTA DOS VIDEOS</h2>
                <h4>Aguarde... Carregando</h4>
            </div>
        )
    }


    return (
        <div className="p-5 h-screen bg-gray-500">
            <h2 className="text-center mb-2 text-xl font-bold">GERENCIAR VÍDEOS</h2>
            <table className="w-full">
                <thead className='border-b-2 border-gray-200'>
                    <tr className='text-black'>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>IMAGEM</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>TÍTULO</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>DURAÇÃO</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>DESCRIÇÃO</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>ADMINISTRAR</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVideos}
                </tbody>
            </table>
        </div>

    )
}

