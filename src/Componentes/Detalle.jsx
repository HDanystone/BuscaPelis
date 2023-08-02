import { useSelector, useDispatch } from 'react-redux'
import { eliminarPeli } from '../redux/actions'

export function Detalle() {
    let detallePeli = useSelector((state) => state.peli)

    const { title, year, rated, runtime, genre, director, actors, image, language, awards } =
        detallePeli
    const dispatch = useDispatch()

    const handleClick = () => {
        const detalle = document.getElementById('detalle')
        detalle.classList.toggle('visible')
        dispatch(eliminarPeli())
        detallePeli = {}
    }

    const aunNoCargo = Object.keys(detallePeli).length === 0

    return (
        <div id='detalle' className='detalle' onClick={handleClick}>
            {aunNoCargo ? (
                <div className='spinner' />
            ) : (
                <div className='det'>
                    <img src={image} />
                    <div>
                        <h4>Título: {title}</h4>
                        <p>Año : {year}</p>
                        <p>Calificación: {rated}</p>
                        <p>Duración: {runtime}</p>
                        <p>Género: {genre}</p>
                        <p>Director: {director}</p>
                        <p>Actores: {actors}</p>
                        <p>Idiomas: {language}</p>
                        <p>Premios: {awards}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
