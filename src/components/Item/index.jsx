import React from "react"
import { useNavigate } from 'react-router-dom'

//Card

const Item = ({product}) => {

    const navigate = useNavigate()

    const navigateDetail = () => {
      //Navegar hacia el detalle del producto
      navigate(`/detail/${product.id}`)
    }
   
    return (
      <div className="card-detail" onClick={navigateDetail}>
        <img style={{width:150}} src={product.image} alt="character"/>
        <p key={product.id}>{product.title}, Precio: {product.price} stock: {product.stock}</p>
      </div>
    )
}

export default Item