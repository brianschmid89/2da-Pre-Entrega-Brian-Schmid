import React from 'react'

const CartItem = ({Item}) => {
  return (
    <div>
        <img src ={Item.image} width={150} alt='cart-item'/>
        <h1>{Item.name}</h1>
    </div>
  )
}

export default CartItem