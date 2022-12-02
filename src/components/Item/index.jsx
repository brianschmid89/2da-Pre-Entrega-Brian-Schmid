import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
//Card

const Item = ({product}) => {

    const navigate = useNavigate()

    const navigateDetail = () => {
      //Navegar hacia el detalle del producto
      navigate(`/detail/${product.id}`)
    }
   
    return (
      <div className="card-detail" onClick={navigateDetail}>
        <img style={{width:150}} src={product.image} alt=""/>
        <p key={product.id}></p>
        <p>- {product.title} -</p>
        <p> Precio: $ {product.price}.</p>  
        <p> Stock Actual: {product.stock} Unidades</p>
      </div>
    )
}

export default Item