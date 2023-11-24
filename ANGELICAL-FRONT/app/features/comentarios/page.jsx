'use client'

import { useState, useEffect } from 'react';

export default function Comentarios() {

    const [comentariosEavaliacoes, setComentariosEavaliacoes] = useState([]);

    useEffect(() => {
        getComentariosEavaliacoes();
    }, []);

    async function getComentariosEavaliacoes() {
        const response = await fetch(`http://localhost:3004/avaliacoes`);
        const data = await response.json();

        setComentariosEavaliacoes(data);
    }

    const avaliacoes = comentariosEavaliacoes.map(avaliacao => (
        <div key={avaliacao.id}>
            <h4>{avaliacao.comentario}</h4>
            <span>{avaliacao.heart} coração(s)</span>
        </div>
    ));

    return (
        <div>
            <h1>Comentários e avaliações de usuários</h1>
            <ul>
                {avaliacoes}
            </ul>
        </div>
    );
}
