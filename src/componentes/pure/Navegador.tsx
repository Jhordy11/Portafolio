import { useState, useEffect, useRef } from "react";
import "/public/Navegador.css";
import Desplegable from "./Desplegable";
import NoDesplegable from "./NoDesplegable";
import {moves} from "../../models/moves"
export interface Props {
  moves: moves;
}
export default function Navegador({ moves }: Props) {
  const [estadoS, setEstadoS] = useState(0);
  const [estadoT, setEstadoT] = useState<number>(0);
  const refNav = useRef<any>(null);

  //funcion animacion
  function animarEsconder(current: any, animacion: string) {
    current.style.animation = animacion;
  }

  function animarAparecer(current: any, display: string, animacion: string) {
    current.style.display = display;
    current.style.animation = animacion;
  }

  //animacion del nav entero

  function animacionNav() {
    if (estadoS !== moves.pantallaS) {
      animarPorScroll();
      return;
    }
    if (estadoT !== moves.diferencia) {
      animarPorTouch();
    }
    
  }

  function animarPorScroll() {
    if (estadoS === moves.pantallaS) {
      return;
    }
    if (determinarDireccionDeScroll()) {
      animarAparecer(
        refNav.current,
        "flex",
        "aparecer 1s cubic-bezier(0,1, 1, 1) forwards"
      );
      generarBlurPorUl()
    } else {
      animarEsconder(
        refNav.current,
        "desaparecer 1s cubic-bezier(0,1, 1, 1) forwards"
      );
      blurContenido(0);
    }
    setEstadoS(moves.pantallaS);
  }

  function animarPorTouch() {
    if (estadoT === moves.diferencia) {
      return;
    }
    if (determinarDireccionDeTouch()) {
      animarAparecer(
        refNav.current,
        "flex",
        "aparecer 1s cubic-bezier(0,1, 1, 1) forwards"
      );
      generarBlurPorUl()
    } else {
      animarEsconder(
        refNav.current,
        "desaparecer 1s cubic-bezier(0,1, 1, 1) forwards"
      );
      blurContenido(0);
    }
    setEstadoT(moves.diferencia);
  }

  function determinarDireccionDeScroll() {
    if (moves.pantallaS >= 0) {
      return false;
    }
    return true;
  }

  function determinarDireccionDeTouch() {
    if (moves.diferencia > 10) {
      return false;
    }
    return true;
  }

  
 
  //generar blur effect
  function blurContenido(pixeles: number) {
    for (let i = 1; i < refNav.current.parentNode.children.length; i++) {
      refNav.current.parentNode.children[i].style.filter = `blur(${pixeles}px)`;
    }
  }

  function generarBlurPorUl(){
    refNav.current.children[2].style.animationName =="aparecerUl" ? blurContenido(5):null;
  }

  useEffect(() => {
    animacionNav();
  }, [moves]);
  

  return (
    <nav className="nav" ref={refNav}>
      <div className="nav__part">
        <img className="nav__logo" src="/imagenes/logo.svg" alt="logo" />
        <h1 className="nav__nombre">Jhordy Aguas</h1>
      </div>  
      <Desplegable/>
      <NoDesplegable/>
    </nav>
  );
}
