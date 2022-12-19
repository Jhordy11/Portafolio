import { useEffect, useRef, useState } from "react";
import "/public/Card.css";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import {card} from "../../models/card"
interface Props {
  card: card
}
export default function CardProyecto({ card }: Props) {
  const [imgs, setImgs] = useState(card.imgs)
  const [iconos, setIconos] = useState(card.iconos)
  const [linkGit, setLinkGit] = useState(card.linkGit)
  const [linkVis , setLinkVis ] = useState(card.linkVis)
const [name, setName] = useState(card.name)
  const tAnimacion: number = 1000;
  const refCard = useRef<any>(null);
  const [anifinal, setAnifinal] = useState(true);
  const refSaberMas = useRef<any>(null);
  
  function cambiarParametros(){
    setImgs(card.imgs)
    setIconos(card.iconos)
    setLinkGit(card.linkGit)
    setLinkVis(card.linkVis)
    setName(card.name)
  }

  function animarCambioImgs() {
    animarAparecerImagen();
    cambiarImg();
    animarDesaparecerImagen();
  }

  function animarDesaparecerImagen() {
    for (let i = 0; i < imgs.length; i++) {
      setTimeout(
        () =>
          (refCard.current.style.animation = `animarImgR ${tAnimacion}ms linear forwards`),
        3 * tAnimacion * i
      );
    }
  }

  function animarAparecerImagen() {
    for (let i = 0; i < imgs.length; i++) {
      setTimeout(
        () =>
          (refCard.current.style.animation = `animarImg ${tAnimacion}ms linear forwards`),
        tAnimacion + 3 * tAnimacion * i
      );
    }
  }
  function cambiarImg() {
    for (let i = 0; i < imgs.length; i++) {
      if (i == imgs.length - 1) {
        setTimeout(() => {
          (refCard.current.style.bottom = `calc( var(--tamaño-card-y) * ${0})`),
            setAnifinal(true);
        }, tAnimacion + 3 * tAnimacion * i);

        return;
      }
      setTimeout(
        () =>
          (refCard.current.style.bottom = `calc( var(--tamaño-card-y) * ${
            i + 1
          })`),
        tAnimacion + 3 * tAnimacion * i
      );
    }
  }

  function determinarTamaños(){
    refCard.current.style.height =`calc(var(--tamaño-card-y) * ${imgs.length})`;
    refSaberMas.current.style.bottom = `calc((var(--tamaño-card-y) * ${(imgs.length -1)}) + var(--tamaño-card-y) / 4 )`;
  }

  useEffect(() => {
    cambiarParametros()
    determinarTamaños()
  },[card])
  return (
    <div className="card" id="proyectos" data-aos="zoom-in"
    data-aos-delay="100">
      <div
        className="card__imagenes"
        ref={refCard}
        onClick={() => {
          if (anifinal) {
            animarCambioImgs(), setAnifinal(false);
          }
        }}
      >
        {imgs.map((img, index) => (
          <img
            className="card__imagenes__imagen"
            src={`/imagenes/${img}`}
            alt="imagenesProyecto"
            loading="lazy"
            key={index}
          />
        ))}
      </div>
      <section className="card__saberMas" ref={refSaberMas}>
        <section className="card__saberMas__links">
          <a
            className="card__saberMas__links__link"
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            key={0}
          >
            <AiFillGithub className="card__saberMas__links__link_icon" />
          </a>
          <a
            className="card__saberMas__links__link"
            href={linkVis}
            target="_blank"
            rel="noopener noreferrer"
            key={1}
          >
            <BiWorld className="card__saberMas__links__link_icon" />
          </a>
        </section>
        <section className="card__saberMas__tecnologias">
          {iconos.map((icono,index) => 
            <li className="card__saberMas__tecnologias__icon" key={index}>{icono}</li>)}
        </section>
      </section>
      <div className="card__bg">
          hola
      </div>
      <h3 className="card__name">{name}</h3>
    </div>
  );
}
