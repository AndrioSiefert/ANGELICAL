import 'bootstrap-icons/font/bootstrap-icons.css'
import Swal from 'sweetalert2'


export default function Lista(props) {

    function confirmaExclusao(id, titulo) {
        Swal.fire({
            title: 'Você tem certeza excluir esse vídeo?',
            text: `${titulo}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtontext: 'Sim, excluir!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.delete(id)
                Swal.fire(
                    'Excluído!',
                    'O vídeo foi excluído.',
                    'success'
                )
            }
        })
    }


    return (
        <tr>
            <td>
                <img src={props.videos.imagem} width={200} />
            </td>
            <td>{props.videos.titulo}</td>
            <td>{props.videos.data}</td>
            <td>{props.videos.duracao}</td>
            <td>{props.videos.visibilidade}</td>
            <td>{props.videos.descricao}</td>
            <td>
                <i className="bi bi-x-circle text-danger" style={{ fontSize: 24, cursor: 'pointer' }}
                    onClick={() => confirmaExclusao(props.videos.id, props.videos.titulo)}
                    title="Excluir">
                </i>
                <i className="bi bi-pencil-square text-warning ms-2" style={{ fontSize: 24, cursor: 'pointer' }}
                    onClick={props.altera}
                    title="Alterar"
                ></i>
            </td>
        </tr>
    )
}