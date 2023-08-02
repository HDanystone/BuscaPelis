import { useDispatch } from 'react-redux'
import { hayBusqueda } from '../redux/actions'
import { useState } from 'react'
import { buscarPrevia } from '../servicios/buscarPelis'

export function BarraBuscar() {
    const dispatch = useDispatch()
    const [queBuscar, setQueBuscar] = useState('')
    const [listaResultados, setListaResultados] = useState([])
    const handleChange = (event) => {
        let nuevoTexto = event.target.value
        let cambiaElTexto = nuevoTexto.length > 1 && nuevoTexto != queBuscar
        setQueBuscar(nuevoTexto)

        const aBuscarPrevia = async (nuevoTexto) => {
            let busquedaPrevia = await buscarPrevia(nuevoTexto)
            setListaResultados(busquedaPrevia)
        }

        if (cambiaElTexto) {
            aBuscarPrevia(nuevoTexto)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(hayBusqueda({ palabraClave: queBuscar, buscando: true }))
        setQueBuscar('')
        setListaResultados([])
    }

    return (
        <div className='barraBuscar'>
            <form className='buscar' onSubmit={handleSubmit}>
                <input
                    type='search'
                    className='search'
                    id='search'
                    onChange={handleChange}
                    value={queBuscar}
                    placeholder='Título de la película'
                />
                <button type='submit' className='submit'>
                    {' '}
                    Buscar{' '}
                </button>
            </form>
            <div className='contenedorLista'>
                <ul className='listaBusqueda'>
                    {listaResultados?.map((elem, index) => {
                        return (
                            <a
                                className='elemLista'
                                key={index}
                                onClick={() => {
                                    handleSubmit(event)
                                }}
                            >
                                {' '}
                                {elem.title}
                            </a>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
