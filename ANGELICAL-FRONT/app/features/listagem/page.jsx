'use client'
import { useEffect, useState } from 'react';
import Lista from '../../components/Lista';
import { useRouter } from "next/navigation"



export default function Listagem() {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();



    useEffect(() => {
        async function loadVideos() {
            const response = await fetch('http://localhost:3004/videos');
            const data = await response.json();
            setVideos(data);
            setIsLoading(false);
        }
        loadVideos();
    }, []);

    async function deleteVideo(id) {
        const responde = await fetch('http://localhost:3004/videos/' + id, {
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
        <div className="container">
            <h2 className="mt-3">LISTA DOS VIDEOS</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Imagem</th>
                        <th scope="col">Título</th>
                        <th scope="col">Data</th>
                        <th scope="col">Duração</th>
                        <th scope="col">Visibilidade</th>
                        <th scope="col">Descrição</th>
                        <th scope='col'>Administrar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVideos}
                </tbody>
            </table>
        </div>

    )
}


