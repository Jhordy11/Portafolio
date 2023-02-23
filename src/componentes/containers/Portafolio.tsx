import { useEffect, useState } from "react";
import Navegador from "../pure/Navegador";
import SobreMi from "./SobreMi";
import Skills from "./Skills";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import "/public/Portafoli.css";
import Inicio from "./Inicio";
import useScreenSize from "../../hooks/useScreenSize";
import TopScroll from "../pure/TopScroll";
export default function Portafolio() {
  const [pantallaTI, setPantallaTI] = useState<number>(0);
  const [pantallaTF, setPantallaTF] = useState<number>(0);
  const [diferencia, setDiferencia] = useState<number>(0);
  const [pantallaS, setPantallaS] = useState<number>(0);
  const [usoScroll, setUsoScroll] = useState(false);
  const { width } = useScreenSize();
  function actulizarDiferencia() {
    setDiferencia(pantallaTI - pantallaTF);
  }

  useEffect(() => {
    actulizarDiferencia();
  }, [pantallaTF]);
  
  return (
    <div
      className="portafolio"
      onWheel={(e) => {setPantallaS(e.deltaY),setUsoScroll(!usoScroll)}}
      onTouchStart={(e) => {
        setPantallaTI(e.changedTouches[0].screenY);
      }}
      onTouchEnd={(e) => {
        setPantallaTF(e.changedTouches[0].screenY);
      }}
    >
      <Navegador moves={{ diferencia, pantallaS }} />
      <TopScroll/>
      <Inicio />
      {width < 1920 ? <SobreMi /> : ""}
      <Skills />
      <Proyectos />
      <Contacto />
    </div>
  );
}
