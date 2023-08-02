import { buscarDetalle } from '../servicios/buscarDetalle'
import { useDispatch } from 'react-redux'
import { agregarPeli } from '../redux/actions'

export function Pelicula({ peli }) {
    const { title, year, id, image } = peli
    const dispatch = useDispatch()

    const handleClick = async (id) => {
        const detalle = document.getElementById('detalle')
        detalle.classList.toggle('visible')
        window.scrollTo(0, 0)
        const detallePeli = await buscarDetalle(id)
        dispatch(agregarPeli(detallePeli))
    }

    return (
        <div
            className='pelicula'
            onClick={() => {
                handleClick(id)
            }}
        >
            <div className='info'>
                <label className='titulo'>{title}</label>
                <label className='año'>{year}</label>
            </div>
            <img className='img' src={image} alt={title} />
        </div>
    )
}
