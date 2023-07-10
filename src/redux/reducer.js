import { AGREGAR_PELI, QUITAR_PELI, ANTERIOR, SIGUIENTE, FILTRAR, ORDENAR } from "./actionTypes";

const initialState = {
    peliculasFiltradas: [],
    peliculasTotales: [],
    paginaActual: 0,

}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case AGREGAR_PELI:
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    peliculasTotales: [...payload],
                };
            }
            return {
                ...state,
                peliculasTotales: [...state.peliculasTotales, payload]
            };
        case QUITAR_PELI:
            const pelisQueQuedan = state.peliculasTotales.filter((pelicula) => pelicula.id !== payload);
            return { ...state, peliculasTotales: pelisQueQuedan };
        case FILTRAR: //Aca ver condiciones de filtrado
            const filtradas = state.peliculasTotales.filter((pelicula) => pelicula.genero === payload);
            return {
                ...state, peliculasFiltradas: filtradas
                , paginaActual: (filtradas.length > 0) ? 1 : 0
            }
        case ORDENAR://Ver otras formas de ordenar
            const ordenadas = state.peliculasTotales.sort((a, b) => {
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