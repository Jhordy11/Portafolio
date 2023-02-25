import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import useScreenSize from "../../hooks/useScreenSize";
export default function Desplegable() {
  const [activoUl, setActivoUl] = useState<boolean>(false);
  const { width } = useScreenSize();
  const refUl = useRef<any>(null);
  const refBtn = useRef<any>(null);
  //funcion animacion
  function animarEsconder(current: any, animacion: string) {
    current.style.animation = animacion;
  }

  function animarAparecer(current: any, display: string, animacion: string) {
    current.style.display = display;
    current.style.animation = animacion;
  }
  //animacion lista
  function handleBtn() {
    setActivoUl(!activoUl);
  }
  function handleLink(){
      if (width < 762) {
        desactivarTodasLasAnimaciones();
        setActivoUl(!activoUl);
      }
  }
  function animacionUl() {
    if (activoUl) {
      activarTodasLasAnimaciones();
    } else {
      desactivarTodasLasAnimaciones();
    }
  }

  function activarTodasLasAnimaciones() {
    animarAparecer(
      refUl.current,
      "flex",
      "aparecerUl 1s cubic-bezier(0,1, 1, 1)"
    );
    animacionLi();
    animarAparecer(refBtn.current, "block", "btnUl 500ms linear forwards");
    blurContenido(5);
  }
  function desactivarTodasLasAnimaciones() {
    animarEsconder(
      refUl.current,
      "desaparecerPadre 600ms cubic-bezier(0,1, 1, 1) forwards"
    );
    animarEsconder(refBtn.current, "btnUl2 500ms linear forwards");
    animacionLiRest();
    blurContenido(0);
  }
  //animacion li
  function animacionLi() {
    for (let i = 0; i < refUl.current.children.length; i++) {
      animarAparecer(
        refUl.current.children[i],
        "block",
        `aparecerLetra ${(i + 1) * 200}ms cubic-bezier(0,1, 1, 1) `
      );
    }
  }
  function animacionLiRest() {
    for (let i = 0; i < refUl.current.children.length; i++) {
      refUl.current.children[i].style.animation = "none";
    }
  }

  function evitarConflictoDeAnimacion(num: number) {
    refUl.current.children[num].style.animation = "";
  }
  //generar blur effect
  function blurContenido(pixeles: number) {
    for (
      let i = 1;
      i < refBtn.current.parentElement.parentElement.children.length;
      i++
    ) {
      refBtn.current.parentElement.parentElement.children[
        i
      ].style.filter = `blur(${pixeles}px)`;
    }
  }

  useEffect(() => {
    animacionUl();
  }, [activoUl]);
  useEffect(() => {
    if (width >= 762) {
      blurContenido(0)
    }
  }, [width]);
  
  
  return (
    <>
      <button ref={refBtn} className="nav__buttom" onClick={handleBtn} />

      <ul className="nav__desplegable" ref={refUl}>
        <Link
          to="inicio"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={handleLink}
          onMouseOut={(e) => evitarConflictoDeAnimacion(0)}
          className="nav__desplegable__li"
        >
          Inicio
        </Link>
        <Link
          to="sobreMi"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={handleLink}
          onMouseOut={(e) => evitarConflictoDeAnimacion(1)}
          className="nav__desplegable__li"
        >
          Sobre mí
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={handleLink}
          onMouseOut={(e) => evitarConflictoDeAnimacion(2)}
          className="nav__desplegable__li"
        >
          Skills
        </Link>
        <Link
          to="proyectos"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={handleLink}
          onMouseOut={(e) => evitarConflictoDeAnimacion(3)}
          className="nav__desplegable__li"
        >
          Proyectos
        </Link>
        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={handleLink}
          onMouseOut={(e) => evitarConflictoDeAnimacion(4)}
          className="nav__desplegable__li"
        >
          Contacto
        </Link>
      </ul>
    </>
  );
}
