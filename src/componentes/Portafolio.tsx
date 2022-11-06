import { useEffect, useState } from 'react'
import Navegador from './Navegador'
import SobreMi from './SobreMi'
import Skills from './Skills'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import "/public/Portafoli.css"
import Inicio from './Inicio'
export default function Portafolio() {
  const [pantallaTI, setPantallaTI] = useState<number>(0)
  const [pantallaTF, setPantallaTF] = useState<number>(0)
  const [diferencia, setDiferencia] = useState<number>(0)
  const [pantallaS, setPantallaS] = useState<number>(0)

  function actulizarDiferencia(){
    setDiferencia(pantallaTI - pantallaTF)
  }

  useEffect(()=>{
    actulizarDiferencia()
  },[pantallaTF])
  
  return (
    <div className="portafolio" onWheel={(e)=>setPantallaS(e.deltaY)} onTouchStart = {(e) =>{setPantallaTI(e.changedTouches[0].screenY)}} onTouchEnd= {(e) =>{setPantallaTF(e.changedTouches[0].screenY)}}>
      <Navegador moves={{diferencia ,pantallaS}} />
      <Inicio/>
      <SobreMi/>
      <Skills/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}