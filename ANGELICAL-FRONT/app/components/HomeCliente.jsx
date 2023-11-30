'use client';
import Link from 'next/link';
import { PiPerson } from "react-icons/pi";
import { GiExitDoor } from "react-icons/gi";


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


        <div className="container bottom-2 lg:bottom-8 w-full z-50 mx-auto">

            <nav className="flex items-center ">
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

                <div className='text-end mx-auto'>
                    <h5 className="text-white flex ">
                        {clienteNome ? clienteNome : "Login"}
                        {clienteNome ? <i style={{ cursor: 'pointer' }} onClick={logout}> <GiExitDoor className='text-2xl' />  </i> :
                            <Link href="/login"><PiPerson className='text-2xl' /><i className=" text-white"></i></Link>
                        }
                    </h5>
                </div>
            </nav>
        </div >
    )
}