/* import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { addDoc , collection } from 'firebase/firestore';
import { Shop } from '../../contexts/Shop';



const Checkout = () => {
    const [user, setUser] = useState({})  

  const updateUser = (event) => {
      setUser (user => ({...user, [event.target.name]: event.target.value }))
  }

  const {addProduct, calculateTotal} = useContext(Shop);

  const putOrder = () => {
      const order = {
          buyer: user,
          //products y calculateTotal consumilos de context
          items: const {addProduct} = useContext(Shop);
          total: const calculateTotal = () => {
            const total = products.reduce(
                (acc, productoActual) => 
                    (acc += productoActual.quantity * productoActual.price * productoActual.price), 
                0
            );
            return total
        }
      }
      console.log(order)
      //const db = getFirestore()
// no sé como llamaste a la colección en firebase, yo le puse orders. Si le pusiste otro nombre, reemplazalo
      const ordersCollection = collection(db, 'productos')
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
                          <button onClick={putOrder}>Comprar</button>
                      </div>
              </div>
          </div>
      </div>
  )
}
export default Checkout */