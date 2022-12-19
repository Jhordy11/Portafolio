
import { Link } from 'react-scroll'
import { BsFillArrowUpSquareFill} from 'react-icons/bs';
import "/public/TopScroll.css";
import { useEffect, useState } from 'react';
import {moves} from "../../models/moves"
export interface Props {
  moves: moves;
  usoScroll: boolean;
}
export default function TopScroll( {moves ,usoScroll}: Props) {
    const{diferencia, pantallaS} = moves;
    const [activo, setActivo] = useState<boolean>(false);

    function handleOnclick(){
        setActivo(false)
    }

    useEffect(() => {
        diferencia !=0 || pantallaS !=0? setActivo(true):{};
      }, [diferencia,usoScroll]);

  return (
    <Link
          to="inicio"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="topScroll"
          style={{opacity:activo?"1":"0"}}
        onClick={handleOnclick}
        >
          <BsFillArrowUpSquareFill/>
        </Link>
  )
}
