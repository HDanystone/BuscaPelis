import { URLBASE, APIKEY, ID, ERROR_PETICION } from './constantes'

export const buscarDetalle = async (queBuscar) => {
    if (queBuscar === '') return null

    const url = `${URLBASE + APIKEY + ID + queBuscar}`

    try {
        const respuesta = await fetch(url)
        const peli = await respuesta.json()
        return {
            title: peli.Title,
            year: peli.Year,
            rated: peli.Rated,
            runtime: peli.Runtime,
            genre: peli.Genre,
            director: peli.Director,
            actors: peli.Actors,
            awards: peli.Awards,
            language: peli.Language,
            image: peli.Poster
        }
    } catch (error) {
        throw new Error(ERROR_PETICION)
    }
}
