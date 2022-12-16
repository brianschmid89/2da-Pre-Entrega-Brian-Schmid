import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashCanIcon from '../TrashCanIcon/trashcanicon'
import { Link } from 'react-router-dom';

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
        <img src ={Item.image} width={300} alt='cart-item'/>
        <h1>{Item.name}</h1>
        <p>{Item.quantity}</p>
        <div style={{width: 30}} onClick={handleRemove}>
        <Link to={'/checkout'} className='btn btn-success p-3'>Confirmar compra</Link>
        <TrashCanIcon />
        </div>
    </div>
  )
}

export default CartItem
