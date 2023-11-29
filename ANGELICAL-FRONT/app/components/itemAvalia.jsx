import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2'


export default function ItemAvalia(props) {

    function confirmaExclusao(id) {
        Swal.fire({
            title: `Confirma Exclusão desta Avaliação?`,
            text: "Esta operação não poderá ser desfeita",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim. Excluir!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.exclui(id)
                Swal.fire(
                    'Excluído!',
                    'Avaliação excluída com sucesso',
                    'success'
                )
            }
        })
    }



    return (
        <tr>
            <td>
                <img src={props.avalia.video.capa} alt={`Capa de ${props.avalia.video.titulo}`} width={60} />
            </td>
            <td>{props.avalia.video.titulo}</td>
            <td>{props.avalia.cliente.nome}</td>
            <td>{props.avalia.comentario}</td>
            <td>
                <i className="bi bi-x-circle text-danger" style={{ fontSize: 24, cursor: 'pointer' }}
                    onClick={() => confirmaExclusao(props.avalia.id)}
                    title="Excluir"
                ></i>
                <i className="bi bi-search text-success ms-2" style={{ fontSize: 24, cursor: 'pointer' }}
                    onClick={props.consulta}
                    title="Ver Detalhes"
                ></i>
            </td>
        </tr>
    )
}