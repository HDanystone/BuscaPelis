import { buscar } from './logica/BuscarPelis'
import { useDispatch } from 'react-redux'
import {agregarPeli} from './redux/actions'
export function BarraBuscar() {
const dispatch = useDispatch()

    const  handleSubmit = async (event) => {
        event.preventDefault()
        const miInput = document.getElementById('search')
        const valor=miInput.value
        console.log(valor)   
        const resultado = await buscar(valor)
  
        dispatch(agregarPeli(resultado))
           
          
        
        miInput.value = ''
     }

    return (
        <div>
            <form className="buscar" onSubmit={handleSubmit}>
                <input type="search" className="search" id='search' placeholder="Título de la película" />
                <button type="submit" className="submit"> Buscar </button>
            </form>
        </div>
    )
}