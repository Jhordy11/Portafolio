import { Link } from "react-scroll";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "/public/TopScroll.css";
import { useEffect, useState } from "react";

export default function TopScroll() {
  const [opacityButton, setOpacity] = useState(0)

  function animarSroll() {
    window.scrollY == 0
      ? setOpacity(0)
      : setOpacity(1);
  }
  function animarSrollClick() {
    setOpacity(0)
  }

  useEffect(() => {addEventListener("scroll", () => animarSroll());
  }, [])
  
  return (
    <Link
      to="inicio"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      className="topScroll"
      style={{opacity:opacityButton}}
      onClick={animarSrollClick}
    >
      <BsFillArrowUpSquareFill />
    </Link>
  );
}
