'use client';
import Link from 'next/link';

import { useContext } from 'react';
import { ClienteContext } from 'app/contexts/cliente';




export default function HomeAdm() {

    const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext);

    function logout() {
        if (confirm('Deseja realmente sair?')) {
            mudaId(null)
            mudaNome("")
            localStorage.removeItem("cliente_logado")
        }
    }



    return (
        <nav className=" body navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./angeloface.png" alt="Logo" width="60" height="48" style={{ marginRight: '10px' }} />
                    <h2 style={{ margin: '0' }}>VÍDEOS DO ANGELO</h2>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-orange" href="/features/cadastro">CADASTRO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-orange" href="/features/listagem">LISTAGEM</Link>
                        </li>
                    </ul>
                    <div className="col input-group my-3">
                        <input type="text" className="form-control" placeholder="Título do Vídeo" />
                        <button className="btn btn-warning text-white" type="button">Pesquisar</button>
                    </div>
                </div>
                <div className='col'>
                    <h5 className="text-white text-end">
                        {clienteNome ? clienteNome : "Login"}
                        {clienteNome ?
                            <i className="ms-2 fs-4 bi bi-x-circle" style={{ cursor: 'pointer' }} onClick={logout}></i> :
                            <Link href="/features/login">
                                <i className="ms-2 fs-4 bi bi-person-circle text-white"></i>
                            </Link>
                        }
                    </h5>
                </div>
            </div>
        </nav >
    );
}
