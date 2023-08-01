/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { eliminarPeli } from '../redux/actions'

export function Detalle() {
    let detallePeli = useSelector((state) => state.peli)

    const { title, year, rated, runtime, genre, director, actors, image, language, awards } =
        detallePeli
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate('/')
        dispatch(eliminarPeli())
        detallePeli = {}
    }

    const aunNoCargo = Object.keys(detallePeli).length === 0

    return (
        <div className='detalle' onClick={handleClick}>
            {aunNoCargo ? (
                <div className='spinner' />
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}
