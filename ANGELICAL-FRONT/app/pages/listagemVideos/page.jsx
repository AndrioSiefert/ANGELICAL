'use client'
import { useEffect, useState } from "react"
import verListaCliente from "app/components/verListaCliente"


export default function Home() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function getVideos() {
            const response = await fetch('http://localhost:3004/cadastro')
            const data = await response.json()
            setVideos(data)
        }
        getVideos()
    }, [])


    const listaVideos = videos.map(video => (
        verListaCliente({
            key: video.id,
            videos: video,
        })
    ));




    return (
        <div className=' flex bg-gradient-to-tl from-[#ebe1e1]  via-[#f0b60a] '>

            {listaVideos}
        </div>


    )
}