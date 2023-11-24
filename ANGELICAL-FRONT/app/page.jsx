'use client'
import { useEffect, useState } from "react"
import ListaNoTitulo from "./components/HomeLista"

export default function Home() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function getVideos() {
      const response = await fetch('http://localhost:3004/videos')
      const data = await response.json()
      setVideos(data)
    }
    getVideos()
  }, [])


  const listaVideos = videos.map(videos => (
    <ListaNoTitulo
      key={videos.id}
      videos={videos}
    />
  ))






  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {listaVideos}
    </div>


  )
}