import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "/public/Contacto.css"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Swal from 'sweetalert2'
export default function Navegador() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [envia, setEnvia] = useState("Enviar")
  const refForm = useRef<any>();

  const patt:string="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  const patt2:string ="[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*"
  
  const sendEmail = (e: any) => {
    e.preventDefault();
    setEnvia("Enviando...")
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE}`,
        `${import.meta.env.VITE_TEMPLATE}`,
        refForm.current,
        `${import.meta.env.VITE_PUBLIC}`
      )
      .then(
        (result) => {
          alertaExito()
          resetearValues()
          setEnvia("Enviar")
        },
        (error) => {
          alertaError()
          setEnvia("Enviar")
        }
      )
  }

  function resetearValues() {
    setName("");
    setEmail("");
    setMensaje("");
  }

  function alertaExito(){
    Swal.fire({
      icon:"success",
      width:"280px",
      html: '<h3 class="contato__textAlerta">Mensaje enviado exitosamente!</h3>',
      background:"rgb(32, 26, 26)",
      position: "center",
      showConfirmButton: false,
      timer: 2000
      });
  }
  function alertaError(){
    Swal.fire({
      icon:"error",
      width:"280px",
      html: '<h3 class="contato__textAlerta2">Lo siento algo salio mal, inténtalo más tarde</h3>',
      background:"rgb(32, 26, 26)",
      position: "center",
      showConfirmButton: false,
      timer: 2000
      });
  }
  return (
    <>
    <form className="contacto" id="contacto" ref={refForm} onSubmit={sendEmail} autoComplete="off">
      <h1 className="contacto__titulo" data-aos="flip-up"
        data-aos-delay="100">Contáctame</h1>
      <p className="contacto__p" data-aos="zoom-in"
        data-aos-delay="100">Si deseas ponerte en contacto conmigo o simplemente hablarme, puedes dejarme un mensaje.</p>
      
      <input type="text" name='contacto__inputName' className="contacto__inputName" required maxLength={25} pattern={patt2} value={name} onChange={(e)=>setName(e.target.value)}/>
      <label className="contacto__name">Nombre</label>
      
      <input type="email" name='contacto__inputEmail' className="contacto__inputEmail" required maxLength={25} pattern={patt}  value={email} onChange={(e)=>setEmail(e.target.value)} />
      <label className="contacto__email" >Email</label>
      
      <textarea className="contacto__inputMensaje" name='contacto__inputMensaje' required cols={22} rows={5} value={mensaje} onChange={(e)=>setMensaje(e.target.value)} />
      <label className="contacto__mensaje">Mensaje</label>
      <input type="submit" value={envia} className="contacto__submit"/>
    </form>
    <footer className="pieDePagina">
      <h3 className="pieDePagina__copy">©Copyright - Jhordy Aguas</h3>
      <div
          className="pieDePagina__iconos"
        >
          <a
            className="pieDePagina__iconos__a"
            href="https://github.com/Jhordy11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="pieDePagina__iconos__icon" />
          </a>
          <a
            className="pieDePagina__iconos__a"
            href="https://www.linkedin.com/in/jhordy-aguas-333937249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="pieDePagina__iconos__icon" />
          </a>
          </div>
    </footer>
    </>
  );
}
