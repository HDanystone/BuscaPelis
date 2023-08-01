import { Pelicula } from './Pelicula'

export function Peliculas({ peliculasAMostrar, buscando, yaSeBusco, totalResultados }) {
    return (
        <>
            {buscando === true ? (
                <>
                    <div className='spinnercontainer'>
                        <div className='spinner' />
                    </div>
                </>
            ) : yaSeBusco ? (
                <>
                    <label className='año'>{`Se encontraron ${totalResultados} resultados para esta búsqueda`}</label>

                    <div className='peliculas'>
                        {peliculasAMostrar?.map((peli, index) => {
                            return <Pelicula peli={peli} key={index} />
                        })}
                    </div>
                </>
            ) : null}
        </>
    )
}
