'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { ClienteContext } from 'app/contexts/cliente';
import { BsPersonWheelchair, PiPerson } from 'react-icons/all';

export default function HomeAdm() {
    const { clienteNome, isAdmin, mudaId, mudaNome } = useContext(ClienteContext);

    function logout() {
        if (confirm('Deseja realmente sair?')) {
            mudaId(null);
            mudaNome("");
            localStorage.removeItem("cliente_logado");
        }
    }

    return (
        <div className="container px-28 relative">
            <nav className="flex items-center">
                <Link href='/'>
                    <img className='cursor-pointer w-20' src="angeloface.png" />
                </Link>
                <ul className="flex-1 text-center">
                    <li className="list-none inline-block px-5">
                        <Link className="no-underline text-white" href='#'></Link>
                    </li>
                    <li className="list-none inline-block px-5">
                        <Link className="no-underline text-white" href='#'></Link>
                    </li>
                </ul>

                <div className='text-end'>
                    {isAdmin && clienteNome ? (
                        // Mostra este bloco apenas se o usuário for um administrador e estiver logado
                        <h5 className="text-white flex">
                            {clienteNome}
                            <i style={{ cursor: 'pointer' }} onClick={logout}>
                                <BsPersonWheelchair className='text-2xl' />
                            </i>
                        </h5>
                    ) : (
                        // Mostra este bloco se o usuário não for um administrador ou não estiver logado
                        <h5 className="text-white flex">
                            {clienteNome ? (
                                <i style={{ cursor: 'pointer' }} onClick={logout}>
                                    <BsPersonWheelchair className='text-2xl' />
                                </i>
                            ) : (
                                <Link href="/pages/login">
                                    <PiPerson className='text-2xl' />
                                    <i className=" text-white"></i>
                                </Link>
                            )}
                        </h5>
                    )}
                </div>
            </nav>
        </div>
    );
}
