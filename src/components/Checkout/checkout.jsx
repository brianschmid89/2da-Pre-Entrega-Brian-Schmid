import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { addDoc , collection } from 'firebase/firestore';
import { Shop } from '../../contexts/Shop';
import './styles.css';

const Checkout = () => {
    
    const [user, setUser] = useState({})  

    const updateUser = (event) => {
      setUser (user => ({...user, [event.target.name]: event.target.value }))
  }

    const {products, totalPrice} = useContext(Shop);

    const putOrder = () => {
    const order = {
          buyer: user,
          items: products,
          total: totalPrice()
      }
          console.log(order)

    const ordersCollection = collection(db, 'orders')
    addDoc( ordersCollection, order ).then( ({id}) => {
      console.log( id );
          alert(`Te hemos enviado un mail a ${user.email} con tu orden de compra ID: ${id}`)
  })
}

  return (
      <div >
          <div >
              <h1 >Checkout</h1>
              <div >
                      <h2>Datos de Facturacion</h2>
                      <div>
                          <input onChange={updateUser} placeholder="Nombre" name='name' type='text' />
                          <input onChange={updateUser} placeholder="Apellido" name='surname' type='text' />
                          <input onChange={updateUser} placeholder="Telefono" name='phone' type='number' />
                          <input onChange={updateUser} placeholder="Email" name='email' type='email' />
                          <button onClick={putOrder}> Comprar </button>
                      </div>
              </div>
          </div>
      </div>
  )
}
export default Checkout