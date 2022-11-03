import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (
      <ul>
        <li>
          <Link to ="/">Inicio</Link>
        </li>
        <li>
        <Link to ="/">Coleccion</Link>
        </li>
        <li>
        <Link to ="/">Contacto</Link>
        </li>
        <CartWidget/>
      </ul>
    );
}

export default NavBar