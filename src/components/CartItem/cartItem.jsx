import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashCanIcon from '../TrashCanIcon/trashcanicon'

const CartItem = ({Item}) => {

  const {removeProduct} = useContext(Shop);

  const handleRemove = () => {
    removeProduct(Item.id)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      padding: 30,
      gap: 40,
      alignItems: 'center'
    }}>
        <img src ={Item.image} width={150} alt='cart-item'/>
        <h1>{Item.name}</h1>
        <p>{Item.quantity}</p>
        <div style={{width: 30}} onClick={handleRemove}>
          <TrashCanIcon />
        </div>
    </div>
  )
}

export default CartItem


/* import React from 'react'

const CartItem = ({Item}) => {
  return (
    <div>
        <img src ={Item.image} width={150} alt='cart-item'/>
        <h1>{Item.name}</h1>
    </div>
  )
}

export default CartItem */