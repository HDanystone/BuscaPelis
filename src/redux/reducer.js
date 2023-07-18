/* eslint-disable no-case-declarations */

import { AGREGAR_PELIS, AGREGAR_PELI, ELIMINAR_PELI, ANTERIOR, SIGUIENTE, FILTRAR, ORDENAR, HAY_BUSQUEDA } from "./actionTypes";

const initialState = {
    peliculasFiltradas: [],
    peliculasTotales: [],
    totalResultados: 0,
    paginaActual: 0,
    palabraClave:'',
    peli: {},
    buscando : false
}

export default function reducer(state = initialState, { type, payload }) {
    let esNuevaBusqueda = Boolean
    switch (type) {
        case AGREGAR_PELIS: //inicio nueva busqueda
             esNuevaBusqueda = payload.resultados != null
            if (esNuevaBusqueda) {
                return {
                    ...state,
                    peliculasTotales: [...payload.peliculas],
                    totalResultados: Number(payload.resultados),
                    paginaActual: state.paginaActual + 1,
                    peliculasFiltradas: [...payload.peliculas]
                };
            }//o agrega resultados a busqueda existente
            return {
                ...state,
                peliculasTotales: [...state.peliculasTotales, ...payload.peliculas],
                peliculasFiltradas:[...state.peliculasFiltradas, ...payload.peliculas],
                paginaActual: state.paginaActual +1
            };
        case AGREGAR_PELI:
            return {...state,
                        peli: payload};
        case ELIMINAR_PELI:
            return {...state,
                        peli: {}
                    };    
        case HAY_BUSQUEDA:
            esNuevaBusqueda = payload.palabraClave != ''
            if (esNuevaBusqueda ) {                
                return {
                    ...state,
                    palabraClave: payload.palabraClave,
                    buscando: payload.buscando,
                    paginaActual: 0
                }
            }
            return {
                    ...state,
                    buscando: payload.buscando
            }

        case FILTRAR: //Aca ver condiciones de filtrado
            let filtradas = state.peliculasTotales.filter((pelicula) => pelicula.genero === payload);
            return {
                ...state, peliculasFiltradas: filtradas
                , paginaActual: (filtradas.length > 0) ? 1 : 0
            }
        case ORDENAR://Ver otras formas de ordenar
            let ordenadas = state.peliculasTotales.sort((a, b) => {
                if (payload === "A") return a.id - b.id;
                if (payload === "D") return b.id - a.id;
            });
            return { ...state, peliculasFiltradas: ordenadas }
        case ANTERIOR:
            return {
                ...state,
                paginaActual: state.paginaActual - 1,
            };
        case SIGUIENTE:
            return {
                ...state,
                paginaActual: state.paginaActual + 1,
            };
        default:
            return state; // caso por defecto
    }
}