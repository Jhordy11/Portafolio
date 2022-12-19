import { useEffect,Suspense,lazy} from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PantallaCarga from './componentes/pure/PantallaCarga';
const PortafolioC = lazy(()=>import ('./componentes/containers/Portafolio'))
function App() {

  useEffect(() => {AOS.init({once: true,delay:50,duration: 1500 })},[])
  return (
    
    <div  className="App">
      { <Suspense fallback={<PantallaCarga/>}>
      <PortafolioC/>
      </Suspense> }
      
    </div>
  )
}

export default App
