import React from "react";
import { Form, Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (
      <ul>
        <li>
          <Link to ="/">Inicio</Link>
        </li>
        <li>
          <Link to ="/category/musculacion">Musculacion</Link>
        </li>
        <li>
          <Link to ="/category/cardio">Cardio</Link>
        </li>
          <Link to ="/CartWidget"><CartWidget/></Link>        
          <Link to ="/"><img className='logo' src="https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/608b067b5f36fd633af420d2_SportClub_aplicaciones-03.png" alt=""/></Link>
        <li className="formu">
          <Link to ="/form"><Form/>Contacto</Link>
        </li>
      </ul>
          
);
}

export default NavBar