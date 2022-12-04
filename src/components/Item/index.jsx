import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css";

//Card

const Item = ({product}) => {

    const navigate = useNavigate()

    const navigateDetail = () => {
      navigate(`/detail/${product.id}`)
    }
    return (
      <div className="card-detail" onClick={navigateDetail}>
        <img style={{width:150}} src={product.image} alt=""/>
        <p key={product.id}></p>
        <p className="title">- {product.title} -</p>
        <p className="precio"> Precio: $ {product.price}.</p>  
        <p className="stock"> Stock Actual: {product.stock} Unidades</p>
      </div>
    )
}

export default Item