import React, { useContext } from "react";
import CartItem from "../../components/CartItem/cartItem";
import { Shop } from "../../contexts/Shop";

const CartContainer = () => {
    const {products} = useContext(Shop)

    console.log(products);

    return (
        <div>
            <h2>Carrito</h2>
            {products.map((Item)=> <CartItem key={Item.id} Item={Item}/>)}
            <button className='btn btn-success p-3'>Confirmar compra</button>
            
        </div>
    )
}

export default CartContainer