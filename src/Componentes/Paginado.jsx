 import {useDispatch } from "react-redux"
 import { anterior, hayBusqueda, siguiente } from "../redux/actions"


export function Paginado({ cantidadPaginas, deboBuscarPelis, paginaActual, yaSeBusco }) {
   
  const dispatch = useDispatch()
  const adelante = ' Siguiente > ' 
  const atras = ' < Anterior '

  const handleClick = (event)=>{
    const irAtras = event.target.getAttribute("name") === 'atras'
    if (irAtras) {    
      dispatch(anterior())
    } else {
      if (deboBuscarPelis) {
        dispatch(hayBusqueda({palabraClave: '', buscando:true}))
      } else {
        dispatch(siguiente())
      
      }   
      
    }

    window.scrollTo(0, 0)
  }
 const puedoVolver = paginaActual > 1
 const puedoAvanzar = paginaActual < cantidadPaginas 
 return(

    <div className="paginado">      
      {  puedoVolver?  (
        <div name = 'atras' className='botones activos'onClick =
        {() =>handleClick(event) } >{atras}</div> ) : (<div className="botones" ></div>)
      }

     {yaSeBusco?  <label className='pag'>Página {paginaActual} de {cantidadPaginas}</label> : null}

      {puedoAvanzar?  (
        <div name = 'adelante' className='botones activos' onClick={()=>handleClick(event) }>{adelante}</div>
         ):( <div className="botones"/>)
      }
  </div>

)
}
 


 