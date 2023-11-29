import React, { useContext } from "react";
import { ClienteContext } from "app/contexts/cliente";
import Link from "next/link";
import LikesHeart from "./LikesHeart";

import { LuHeartHandshake } from "react-icons/lu";


export default function ListaDeVideosPageCliente({ videos }) {
    const { clienteId } = useContext(ClienteContext);

    return (
        <div className="p-2 bg-white">


            <div className="w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
                <img src={videos.imagem} className=' w-full h-full object-cover' alt="videos" />
                <div>
                    <h5 className="font-semibold overflow-ellipsis overflow-hidden">{videos.titulo}</h5>
                    <p className="items-center gap-2 px-3 py-3 rounded-full text-xs bg-gradient-to-l">
                        {videos.data}
                    </p>
                    <p className='text-sm  font-bold rounded-sm bg-gradient-to-t '>
                        {videos.descricao}
                    </p>
                </div>

                {clienteId &&
                    <div>
                        <LikesHeart videoId={videos.id} gostei={videos.gostei} />
                        <div className="">
                            <Link href={"/avaliar/" + videos.id}>
                                <i className="" style={{ cursor: "pointer" }}> <LuHeartHandshake className="text-red-500 text-3xl" /></i>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
