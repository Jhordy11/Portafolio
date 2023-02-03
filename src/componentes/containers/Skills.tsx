import "/public/Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiJava,SiMysql,SiMongodb} from "react-icons/si";
interface tecnologia {
  icono: JSX.Element;
  nombre: string;
  nivel: string;
}

export default function Skills() {
  const tecnologiasFrontend: tecnologia[] = [
    { icono: <AiFillHtml5 />,nombre:"HTML5", nivel: "Intermedio" },
    { icono: <IoLogoCss3 />,nombre:"CSS3", nivel: "Intermedio" },
    { icono: <IoLogoJavascript />, nombre:"Javascript",nivel: "Intermedio" },
    { icono: <FaReact />, nombre:"React",nivel: "Básico" },
    { icono: <SiTailwindcss />, nombre:"Tailwind",nivel: "Intermedio" },
  ];
  const tecnologiasBackend: tecnologia[] = [
    { icono: <FaNode />, nombre:"Node",nivel: "Básico" },
    { icono: <SiExpress />, nombre:"Express",nivel: "Básico" },
    { icono: <SiJava />, nombre:"Java",nivel: "Básico" },
    { icono: <SiMysql />, nombre:"MySQL",nivel: "Básico" },
    { icono: <SiMongodb />, nombre:"MongoDB",nivel: "Básico" }
  ];
  function iconos(tecnologia: tecnologia, index: number) {
    const { icono,nombre ,nivel } = tecnologia;

    return (
      <div
        className="skills__icons__detalles "
        data-aos="zoom-in"
        data-aos-delay={`${index}00`}
        key={index}
      >
        <div className="skills__icons__detalles__icon">
          {icono}
          {icono}
        </div>
        <div className="skills__icons__detalles__nombre">{nombre}</div>
        <h3 className="skills__icons__detalles__nivel">{nivel}</h3>
      </div>
    );
  }

  return (
    <div className="skills" id="skills" >
      <h1
        className="skills__tituloPrincipal"
        data-aos="flip-up"
        data-aos-delay="100"
      >
        SKILLS{" "}
      </h1>
      <h1
        className="skills__tituloSecundario"
        data-aos="zoom-in"
        data-aos-delay="100"
        
      >
        Frontend
      </h1>
      <section className="skills__icons">
        {tecnologiasFrontend.map((tecnologia, index) =>
          iconos(tecnologia, index)
        )}
      </section>
      <h1
        className="skills__tituloSecundario"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Backend
      </h1>
      <section className="skills__icons">
        {tecnologiasBackend.map((tecnologia, index) =>
          iconos(tecnologia, index)
        )}
      </section>
    </div>
  );
}
