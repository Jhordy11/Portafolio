import "/public/SobreMi.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
export default function SobreMi() {
  return (
    <div className="sobreMi" id="sobreMi">
      <img
        className="sobreMi__fotoYo"
        src="/imagenes/jhordy.jpg"
        alt="jhordyaguas"
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <div className="sobreMi__fondo" data-aos="zoom-in"
        data-aos-delay="0">
        <div className="sobreMi__fondo__mitad"></div>
        <div className="sobreMi__fondo__mitad"></div>
      </div>
      <div className="sobreMi__presentación">
        <div data-aos="fade-down" data-aos-delay="150">
          <h1 className="sobreMi__presentación__titulo">Un Poco Sobre Mí</h1>
        </div>

        <p
          className="sobreMi__presentación__palabras"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Soy de Ecuador. Estudio Ingeniería en Desarrollo de Software en la Escuela Politécnica Nacional (EPN). Ahora por iniciativa propia me encuentro como Trainee Fullstack tomando como base el stack MERN, además de apoyarme  con el programa Oracle Next Education (ONE). Mis hobbies son los videojuegos, jugar básquet y programar.  
        </p>

        <div
          className="sobreMi__presentacion__iconos"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <a
            className="sobreMi__presentacion__iconos__a"
            href="https://github.com/Jhordy11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="sobreMi__presentacion__iconos__icon" />
          </a>
          <a
            className="sobreMi__presentacion__iconos__a"
            href="https://www.linkedin.com/in/jhordy-aguas-333937249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="sobreMi__presentacion__iconos__icon" />
          </a>
          <a
            className="sobreMi__presentacion__iconos__a"
            href="/Curriculum-Jhordy-Aguas.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImProfile className="sobreMi__presentacion__iconos__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
