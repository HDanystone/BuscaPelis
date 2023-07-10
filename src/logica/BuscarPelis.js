
const APIKEY = '7d0a55da'
const URLBASE = 'http://www.omdbapi.com/?apikey='
const ID = '&i='
const TITULO = '&t='
const BUSQUEDA = '&s='

export const buscar = async (queBuscar) => {
  if (queBuscar === '') return null

  try {
    const respuesta = await fetch(`${URLBASE + APIKEY}&s=${queBuscar}`)
    const json = await respuesta.json()

    const resultado = json.Search

    return resultado?.map(peli => ({
      id: peli.imdbID,
      title: peli.Title,
      year: peli.Year,
      image: peli.Poster
    }))
  } catch (error) {
    throw new Error('Hubo un error al realizar la petición')
  }
}