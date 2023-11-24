import React, { useContext } from "react";
import { ClienteContext } from "app/contexts/cliente";
import Link from "next/link";
import LikesHeart from "./LikesHeart";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/HomeLista.css";

export default function HomeLista({ videos }) {
    const { clienteId } = useContext(ClienteContext);

    return (
        <div className="zzk card-group">
            <div className="card">
                <img src={videos.imagem} className="card-img-top" alt="videos" />
                <div className="card-body">
                    <h5 className="card-title">{videos.titulo}</h5>
                    <p className="card-text">
                        {videos.data} - {videos.duracao}
                    </p>
                    <p className='small'>
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
                                <i className="bi bi-patch-plus text-danger fs-3 me-2" style={{ cursor: "pointer" }}></i>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
