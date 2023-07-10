import { BarraBuscar } from "./BarraBuscar";
import fondo from './assets/header.jpg'

export function BarraNavegar( ){

return(
    <div className="barraNavegar" style={{ backgroundImage: `url(${fondo})` }}>
        <BarraBuscar />

    </div>
    
)
}