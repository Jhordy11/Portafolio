import { useEffect, useRef, useState } from "react";
import SvgAnimado from "./SvgAnimado";
import "/public/Inicio.css";
export default function Inicio() {
  const refSaludo = useRef<any>();
  const refNombre = useRef<any>();
  const refTra = useRef<any>();
  function numRam(): number {
    return (
      (0.5 - Math.round(Math.random())) *
      2 *
      (innerHeight > innerWidth ? innerHeight : innerWidth)
    );
  }

  function obtenerPosicionObjeto(refere: React.MutableRefObject<any>) {
    let tamaPosi = refere.current.getBoundingClientRect();
    for (let i = 0; i < refere.current.childNodes.length; i++) {
      let posicionChild =
        refere.current.childNodes[i].childNodes[1].getBoundingClientRect();
      refere.current.childNodes[i].childNodes[1].style.animation =
        "esconderLetra 2s linear forwards";
      refere.current.childNodes[i].childNodes[1].style.transition = "all 2s";
      refere.current.childNodes[i].childNodes[1].style.left = `${
        tamaPosi.width / 2 - (posicionChild.left - tamaPosi.left) - 10
      }px`;
      refere.current.childNodes[i].childNodes[0].style.left = `${
        tamaPosi.width / 2 - 5
      }px`;
      refere.current.childNodes[i].childNodes[0].style.animation =
        "aparecerBola 2s linear 400ms forwards";
      setTimeout(() => {
        refere.current.childNodes[i].style.animation = `initial`;
        refere.current.childNodes[i].childNodes[0].style.transition = "all 4s";
        refere.current.childNodes[i].childNodes[1].style.left = `0px`;
        refere.current.childNodes[i].childNodes[0].style.left = `${numRam()}px`;
        refere.current.childNodes[i].childNodes[0].style.top = `0px`;
        refere.current.childNodes[i].childNodes[0].style.top = `${numRam()}px`;
      }, 2200);
      setTimeout(() => {
        animarFrase(refere, 0);
      }, 4300);
      setTimeout(() => {
        refere.current.childNodes[i].childNodes[0].style.top = `initial`;
      }, 6300);
    }
  }

  function animarFrase(refere: React.MutableRefObject<any>, delay: number) {
    for (let i = 0; i < refere.current.childNodes.length; i++) {
      setTimeout(() => {
        refere.current.childNodes[i].childNodes[0].style.left = "initial";
      }, 220 * i + delay);
      refere.current.childNodes[i].childNodes[1].style.left = "1px";
      refere.current.childNodes[
        i
      ].childNodes[0].style.animation = `caerGota 2s linear ${
        200 * i + delay
      }ms forwards`;
      refere.current.childNodes[
        i
      ].childNodes[1].style.animation = `letrasSaludo 800ms linear ${
        200 * i + 800 + delay
      }ms forwards`;
      refere.current.childNodes[
        i
      ].style.animation = `rotardivXD 1400ms linear ${200 * i + delay}ms`;
    }
  }

  useEffect(() => {
    animarFrase(refSaludo, 400),
      animarFrase(refNombre, 1400),
      animarFrase(refTra, 400);
  }, []);
  return (
    <div className="inicio" id="inicio">
      <section className="letrasInicio">
        <section
          className="inicio__saludo "
          ref={refSaludo}
          onTouchStart={() => obtenerPosicionObjeto(refSaludo)}
        >
          <span>
            <span></span>
            <span className="animarMano"><div>👋</div></span>
          </span>
          <span>
            <span></span>
            <span>H</span>
          </span>
          <span>
            <span></span>
            <span>o</span>
          </span>
          <span>
            <span></span>
            <span>l</span>
          </span>
          <span>
            <span></span>
            <span>a</span>
          </span>
          <span>
            <span></span>
            <span>,</span>
          </span>
          <span>
            <span></span>
            <span>S</span>
          </span>
          <span>
            <span></span>
            <span>o</span>
          </span>
          <span>
            <span></span>
            <span>y</span>
          </span>
        </section>
        <section
          className="inicio__nombre"
          ref={refNombre}
          onTouchStart={() => obtenerPosicionObjeto(refNombre)}
        >
          <span>
            <span></span>
            <span>J</span>
          </span>
          <span>
            <span></span>
            <span>h</span>
          </span>
          <span>
            <span></span>
            <span>o</span>
          </span>
          <span>
            <span></span>
            <span>r</span>
          </span>
          <span>
            <span></span>
            <span>d</span>
          </span>
          <span>
            <span></span>
            <span>y</span>
          </span>
        </section>

        <section
          className="inicio__tra"
          ref={refTra}
          onTouchStart={() => obtenerPosicionObjeto(refTra)}
        >
          <span>
            <span></span>
            <span>T</span>
          </span>
          <span>
            <span></span>
            <span>r</span>
          </span>
          <span>
            <span></span>
            <span>a</span>
          </span>
          <span>
            <span></span>
            <span>i</span>
          </span>
          <span>
            <span></span>
            <span>n</span>
          </span>
          <span>
            <span></span>
            <span>e</span>
          </span>
          <span>
            <span></span>
            <span>e</span>
          </span>
          <span>
            <span></span>
            <span>F</span>
          </span>
          <span>
            <span></span>
            <span>u</span>
          </span>
          <span>
            <span></span>
            <span>l</span>
          </span>
          <span>
            <span></span>
            <span>l</span>
          </span>
          <span>
            <span></span>
            <span>s</span>
          </span>
          <span>
            <span></span>
            <span>t</span>
          </span>
          <span>
            <span></span>
            <span>a</span>
          </span>
          <span>
            <span></span>
            <span>c</span>
          </span>
          <span>
            <span></span>
            <span>k</span>
          </span>
        </section>
      </section>
      <SvgAnimado />
    </div>
  );
}
