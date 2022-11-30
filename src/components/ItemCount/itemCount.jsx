import React, { useState } from 'react'
import './styles.css';

const ItemCount = ({stock, onAdd}) => {
  const [initial, setCantidad] = useState(1);
  
  const sumar = () => {
      if (initial < stock){
          setCantidad(initial + 1);
      }
  };

  const restar = () =>{
      setCantidad(initial - 1);
  };

  const reset = () => {
      setCantidad(0);
  };
  

  return (
      <div className='contador'>
          <div className='sumatoria'>
              <button className='boton1' disabled = {initial === 0 } onClick={restar}>-</button>
              <p className='numero'>{initial}</p>
              <button className='boton2' onClick={sumar}>+</button> 
              <button className='botonGrande' onClick={reset}>Quitar producto</button> 
              <button className='agregar' onClick={() => onAdd(initial)}>Confirmar compra</button>
          </div>
      </div>
  )
}

export default ItemCount