'use client'
import { createContext, useState, useEffect } from "react";

export const ClienteContext = createContext();

function ClienteProvider({ children }) {

    const [clienteId, setClienteId] = useState(null);
    const [clienteNome, setClienteNome] = useState("");

    useEffect(() => {
        if (localStorage.getItem("cliente_logado")) {
            const cliente = JSON.parse(localStorage.getItem("cliente_logado"));
            console.log('Cliente logado:', cliente);
            setClienteId(cliente.id);
            setClienteNome(cliente.nome);

        }
    }, []);


    function mudaId(id) {
        setClienteId(id);
    }

    function mudaNome(nome) {
        setClienteNome(nome);
    }



    return (
        <ClienteContext.Provider value={{ clienteId, clienteNome, mudaId, mudaNome }}>
            {children}
        </ClienteContext.Provider>
    )
}

export default ClienteProvider;