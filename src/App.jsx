import './App.css'
import { BarraNavegar } from './BarraNavegar'
import { Peliculas } from './Peliculas'

function App() {

  return (
    <>

      <BarraNavegar />
      <main>
        <div className="contenido">
          {
            <Peliculas />
          }
        
      </div>
</main>


    </>
  )
}

export default App
