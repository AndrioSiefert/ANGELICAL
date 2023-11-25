'use client'
import { useEffect, useState } from "react"
import ListaNoTitulo from "./components/verListaCliente"
import Link from "next/link"


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


  const listaVideos = videos.map(videos => (
    <ListaNoTitulo
      key={videos.id}
      videos={videos}
    />
  ))






  return (
    <div className="container min-h-screen bg-center bg-cover px-28 relative ">
      <div className="text-white mt-48 max-w-lg">
        <h1 className="text-6xl font-semibold leading-normal ">ASSISTA<br />MEUS VIDEOS!</h1>
        <p>Do conforta de sua casa ou da faculdade</p>
      </div>

      <div className="mt-10">
        <Link className='bg-orange-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-orange-400 hover:text-white duration-300
                hover:border border border-transparent' href='/pages/listagemVideos'>ASSISTA AGORA!</Link>
      </div>

      <div>
        <img src="login.png" className="w-full xl:w-1/3 xl:absolute bottom-64 right-52" />
      </div>

    </div>



  )
}