
import {URLBASE, APIKEY, BUSQUEDA, PAGINA, ERROR_PETICION}from './constantes'

export const buscar = async (queBuscar, numPagina) => {

  if (queBuscar === '') return null

  const url =`${URLBASE + APIKEY + BUSQUEDA + queBuscar + PAGINA + numPagina}`

  try {
    const respuesta = await fetch(url)
    const json = await respuesta.json()
    const arrayPelisApi = json.Search
     const resultadosTotales = numPagina === 1? json.totalResults : null
    return { peliculas: arrayPelisApi?.map(peli => ({
      id: peli.imdbID,
      title: peli.Title,
      year: peli.Year,
      image: peli.Poster
    })), resultados: resultadosTotales,
        palabraClave: queBuscar}
  } catch (error) {
    throw new Error(ERROR_PETICION)
  }
 
}
export const buscarPrevia = async (queBuscar)=>{
  
  if (queBuscar === '') return null

  const url =`${URLBASE + APIKEY + BUSQUEDA + queBuscar}`

  try {
    const respuesta = await fetch(url)
    const json = await respuesta.json()
    const arrayPelisApi = json.Search
    return arrayPelisApi?.map(peli => ({
      title: peli.Title,
    }))
  } catch (error) {
    throw new Error(ERROR_PETICION)

  }
}