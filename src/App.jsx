import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { BarraNavegar } from './Componentes/BarraNavegar'
import { Detalle } from './Componentes/Detalle'
import { Peliculas } from './Componentes/Peliculas'
import { Paginado } from './Componentes/Paginado'
import { buscar } from './servicios/buscarPelis'
import { agregarPelis, hayBusqueda, anterior } from './redux/actions'
const pelisPorPag = 8

function App() {
    const { peliculasTotales, totalResultados, paginaActual, buscando, palabraClave } = useSelector(
        (state) => state
    )

    const dispatch = useDispatch()
    const desde = (paginaActual - 1) * pelisPorPag
    const hasta = paginaActual * pelisPorPag
    const cantidadPaginas = Math.ceil(totalResultados / pelisPorPag)
    const peliculasAMostrar = peliculasTotales?.slice(desde, hasta)
    if (cantidadPaginas < paginaActual) dispatch(anterior())
    const noAlcanzan = hasta + pelisPorPag > peliculasTotales.length
    const deboBuscarPelis = noAlcanzan && hasta < totalResultados

    let busquemos = buscando //flag local para ingresar a la función
    const nuevaPag = paginaActual + 1

    if (busquemos === true) aBuscar()
    async function aBuscar() {
        busquemos = false
        const nuevasPelis = await buscar(palabraClave, nuevaPag)
        dispatch(hayBusqueda({ palabraClave: '', buscando: false }))
        dispatch(agregarPelis(nuevasPelis))
    }

    const yaSeBusco = palabraClave != ''

    return (
        <>
            <BarraNavegar />
            <Peliculas
                peliculasAMostrar={peliculasAMostrar}
                buscando={buscando}
                yaSeBusco={yaSeBusco}
                totalResultados={totalResultados}
            />
            <Paginado
                cantidadPaginas={cantidadPaginas}
                deboBuscarPelis={deboBuscarPelis}
                paginaActual={paginaActual}
                yaSeBusco={yaSeBusco}
            />
            <Detalle />
        </>
    )
}

export default App
