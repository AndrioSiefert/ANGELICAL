'use client';
import Link from 'next/link';
import { PiPerson } from "react-icons/pi";
import { BsPersonWheelchair } from "react-icons/bs";

import { useContext } from 'react';
import { ClienteContext } from 'app/contexts/cliente';





export default function HomeCliente() {

    const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext);

    function logout() {
        if (confirm('Deseja realmente sair?')) {
            mudaId(null)
            mudaNome("")
            localStorage.removeItem("cliente_logado")
        }
    }


    return (

        <div className="container  px-28 relative">
            <nav className="flex items-center">
                <Link href='/'>
                    <img className='cursor-pointer w-20' src="angeloface.png" />
                </Link>
                <ul className="flex-1 text-center ">
                    <li className="list-none inline-block px-5">
                        <Link className="no-underline text-white" href='#'></Link>
                    </li>
                    <li className="list-none inline-block px-5" >
                        <Link className="no-underline text-white" href='#'></Link>
                    </li>
                </ul>

                <div className='text-end'>
                    <h5 className="text-white">
                        {clienteNome ? clienteNome : "Login"}
                        {clienteNome ?
                            <i style={{ cursor: 'pointer' }} onClick={logout}> <BsPersonWheelchair />  </i> :
                            <Link href="/pages/login">
                                <PiPerson className='text-7xl' />
                                <i className=" text-white"></i>
                            </Link>
                        }
                    </h5>
                </div>

            </nav>
        </div >
    )
}