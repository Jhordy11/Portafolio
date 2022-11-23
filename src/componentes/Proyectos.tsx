import "/public/Proyectos.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { AiOutlineLine } from "react-icons/ai";
import CardProyecto from "./CardProyecto";
import { useEffect, useRef, useState } from "react";
interface card {
  name: string;
  imgs: string[];
  iconos: JSX.Element[];
  linkGit: string;
  linkVis: string;
}
export default function Proyectos() {

  const proyectos: card[] = [
    { name: "Encriptador",
      imgs: ["p11.jpg", "p12.jpg", "p13.jpg", "p14.jpg", "p12.jpg"],
      iconos: [<AiFillHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
      linkGit: "https://lnkd.in/efsCaepv",
      linkVis: "https://lnkd.in/e37fnhWF",
    },
    { name: "Hanged Game",
      imgs: ["p21.jpg", "p22.jpg", "p23.jpg", "p24.jpg", "p25.jpg"],
      iconos: [<AiFillHtml5 />, <IoLogoCss3 />, <IoLogoJavascript />],
      linkGit: "https://github.com/Jhordy11/Reto2",
      linkVis: "https://jhordy11.github.io/Reto2/",
    },
    { name:"Mini Web Service",
      imgs: ["p31.jpg", "p32.jpg", "p33.jpg", "p34.jpg", "p35.jpg"],
      iconos: [<FaReact />, <SiTailwindcss />, <FaNode />, <SiExpress />],
      linkGit: "https://github.com/Jhordy11/cliente",
      linkVis: "https://cliente-ten.vercel.app/",
    },
    { name: "Portafolio",
      imgs: ["p41.jpg", "p42.jpg", "p43.jpg", "p44.jpg", "p45.jpg"],
      iconos: [<FaReact />,<FaNode /> , <IoLogoCss3 />],
      linkGit: "https://github.com/Jhordy11/Portafolio",
      linkVis: "https://jhordyaguas.vercel.app/",
    },
    { name: "Ecommerce",
      imgs: ["p51.jpg", "p52.jpg", "p53.jpg", "p54.jpg", "p55.jpg"],
      iconos: [<FaReact />,<FaNode /> , <IoLogoCss3 />],
      linkGit: "https://github.com/Jhordy11/ecommerce",
      linkVis: "https://jh-shop.vercel.app/",
    },
  ];




  return (
    <div className="proyectos" id="proyectos">
      <h1 className="proyectos__titulo" data-aos="flip-up" data-aos-delay="100">
        Proyectos
      </h1>
      <section
        className="proyectos__proyecto"
      >
        {proyectos.map((pro,index)=><CardProyecto card={pro} key={index}/>)}
      </section>
    </div>
  );
}
