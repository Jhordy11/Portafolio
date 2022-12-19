import { useEffect, useRef, useState } from "react";
import "/public/com.css";
export default function SvgAnimado() {
  const [cambiar, setCambiar] = useState(false);
  const [pDeCambio, setPDeCambio] = useState(0);
  useEffect(() => {
    innerWidth > innerHeight ? setCambiar(true): setCambiar(false);
  }, [innerWidth, innerHeight]);

  return (
    <div className="svgAnimado" style={{ height: cambiar?"":"120vh",width: cambiar? `150%`:""}}>
      <img className="fondo__svg" src={`/compa/pa1.svg`} alt="pa1" style={{ height: cambiar?"":"100%",width: cambiar? "100%":""}}/>
    </div>
  );
}
