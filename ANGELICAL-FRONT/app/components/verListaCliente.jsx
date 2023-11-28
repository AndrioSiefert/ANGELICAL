import React, { useContext } from "react";
import { ClienteContext } from "app/contexts/cliente";
import Link from "next/link";
import LikesHeart from "./LikesHeart";

import { LuHeartHandshake } from "react-icons/lu";


export default function verListaCliente({ videos }) {
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
                        <LikesHeart videoId={videos.id} soma={videos.soma} num={videos.num} />
                        <div className="float-end">
                            <Link href={"features/comentarios"}>
                                <i className="bi bi-chat-dots text-primary fs-3 me-2" style={{ cursor: "pointer" }}></i>
                            </Link>
                            <Link href={"features/avaliar/" + videos.id}>
                                <i className="bi bi-patch-plus text-danger fs-3 me-2" style={{ cursor: "pointer" }}> <LuHeartHandshake /></i>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
