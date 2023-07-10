
import { useSelector } from "react-redux"

function ListaPeliculas ({ peliculas }) {
    return (
      <ul className='peliculas'>
        {
          peliculas.map(peli => (
            <li className='pelicula' key={peli.id}>
              <h3>{peli.title}</h3>
              <p>{peli.year}</p>
              <img src={peli.image} alt={peli.title} />
            </li>
          ))
        }
      </ul>
    )
  }
  
  function NoHayResultados () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }
  export function Peliculas (){
  const peliculas = useSelector((state) => state.peliculasTotales)
   
  console.log(peliculas)
    const hayPeliculas = peliculas?.length > 0
  
    return (
      hayPeliculas? <ListaPeliculas className = 'peliculas' peliculas={peliculas} />
        : <NoHayResultados />
    )
  }
