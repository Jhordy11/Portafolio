import { useState, useEffect, useRef } from "react";
import "/public/Navegador.css";
import Desplegable from "./Desplegable";
import useScreenSize from "../../hooks/useScreenSize";

export default function Navegador() {
  const [anteriorScroll, setAnteriorScroll] = useState(0)
  const ARRIBA= "arriba"
	const ABAJO ="abajo"
  const [direccionAnterior, setDirecionAnterior] = useState(ARRIBA)
  const refNav = useRef<any>(null);
  const { width } = useScreenSize();
  //funcion animacion
  function animarEsconder(current: any, animacion: string) {
    current.style.animation = animacion;
  }

  function animarAparecer(current: any, display: string, animacion: string) {
    current.style.display = display;
    current.style.animation = animacion;
  }

  //animacion del nav entero
  useEffect(() => {
    const handleScroll = () => {
      const actualScroll = window.scrollY;
      actualScroll  > anteriorScroll ? animarNav(ABAJO) : animarNav(ARRIBA) ;
      setAnteriorScroll(actualScroll );
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anteriorScroll]);

  function animarNav(direccionActual:string) {
    if(direccionActual == direccionAnterior){
			return;
		}
    if (direccionActual == ARRIBA) {
      animarAparecer(
        refNav.current,
        "flex",
        "aparecer 1s cubic-bezier(0,1, 1, 1) forwards"
      );
      generarBlurPorUl()
      setDirecionAnterior(ARRIBA) 
    } 
    if (direccionActual == ABAJO) {
      animarEsconder(
        refNav.current,
        "desaparecer 1s cubic-bezier(0,1, 1, 1) forwards"
      );
      blurContenido(0);
      setDirecionAnterior(ABAJO)
    }
  }

  //generar blur effect
  function blurContenido(pixeles: number) {
    for (let i = 1; i < refNav.current.parentNode.children.length; i++) {
      refNav.current.parentNode.children[i].style.filter = `blur(${pixeles}px)`;
    }
  }

  function generarBlurPorUl(){
    if (width < 762) {
      refNav.current.children[2].style.animationName =="aparecerUl" ? blurContenido(5):null;
    }
  }
  
  return (
    <nav className="nav" ref={refNav}>
      <div className="nav__part">
        <img className="nav__logo" src="/imagenes/logo.svg" alt="logo" />
        <h1 className="nav__nombre">Jhordy Aguas</h1>
      </div>  
      <Desplegable/>
    </nav>
  );
}
