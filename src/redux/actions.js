import { AGREGAR_PELI, QUITAR_PELI, ANTERIOR, SIGUIENTE, FILTRAR, ORDENAR } from "./actionTypes";

export function  agregarPeli(peli) {
    return {
      type: AGREGAR_PELI,
      payload: peli
    }
  }

  export function  quitarPeli(id) {
    return {
      type: QUITAR_PELI,
      payload: id
    }
  } 

  export function  filtrar(filtro) {
    return {
      type: FILTRAR,
      payload: filtro
    }
  }

  export function  ordenar(orden) {
    return {
      type: ORDENAR,
      payload: orden
    }
  }

  export function  anterior() {
    return {
      type: ANTERIOR,
    }
  }
  
  export function  siguiente() {
    return {
      type: SIGUIENTE
    }
  }