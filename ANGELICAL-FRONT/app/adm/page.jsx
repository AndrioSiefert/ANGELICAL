'use client';
import Link from 'next/link';







export default function admin() {




    return (

        <div className="container  px-28 relative">

            <nav className="flex items-center">

                <ul className="flex-1 text-center ">
                    <li className="list-none inline-block px-5">
                        <Link className="no-underline text-white" href='/cadastro'>CADASTRAR</Link>
                    </li>
                    <li className="list-none inline-block px-5" >
                        <Link className="no-underline text-white" href='/admListagem'>GERENCIAR</Link>
                    </li>
                </ul>


            </nav>
        </div >
    )
}