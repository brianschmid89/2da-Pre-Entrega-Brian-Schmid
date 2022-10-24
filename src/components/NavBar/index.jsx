import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#news">Coleccion</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
        <CartWidget/>
      </ul>
    );
}

export default NavBar