import {
    HAY_BUSQUEDA,
    AGREGAR_PELIS,
    AGREGAR_PELI,
    ELIMINAR_PELI,
    ANTERIOR,
    SIGUIENTE,
    FILTRAR,
    ORDENAR
} from './actionTypes'

export function agregarPelis(pelis) {
    return {
        type: AGREGAR_PELIS,
        payload: pelis
    }
}

export function agregarPeli(peli) {
    return {
        type: AGREGAR_PELI,
        payload: peli
    }
}

export function eliminarPeli() {
    return {
        type: ELIMINAR_PELI
    }
}

export function filtrar(filtro) {
    return {
        type: FILTRAR,
        payload: filtro
    }
}

export function ordenar(orden) {
    return {
        type: ORDENAR,
        payload: orden
    }
}

export function anterior() {
    return {
        type: ANTERIOR
    }
}

export function siguiente() {
    return {
        type: SIGUIENTE
    }
}
export function hayBusqueda(busqueda) {
    return {
        type: HAY_BUSQUEDA,
        payload: busqueda
    }
}
