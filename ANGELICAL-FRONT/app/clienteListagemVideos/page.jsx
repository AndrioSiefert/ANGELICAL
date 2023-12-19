'use client'
import { useEffect, useState } from "react"
import ListaDeVideosPageCliente from "app/components/listaDeVideosDoCliente"


export default function Home() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function getVideos() {
            const response = await fetch('http://localhost:3004/video')
            const data = await response.json()
            setVideos(data)
        }
        getVideos()
    }, [])


    const listaVideos = videos.map(video => (
        ListaDeVideosPageCliente({
            key: video.id,
            videos: video,
        })

    ));




    return (



        <div className=' flex '>

            {listaVideos}

        </div>





    )
}