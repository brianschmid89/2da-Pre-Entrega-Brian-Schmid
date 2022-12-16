import React, { useContext } from "react";
import CartItem from "../../components/CartItem/cartItem";
import { Shop } from "../../contexts/Shop";

const CartContainer = () => {
    const {products} = useContext(Shop)

    console.log(products);
    const getTotal = () => {
        let total = 0,
        cart.forEach (prod => {
            total = total +prod.price * prod.quantity
        })
    }
    return (
        <div>
            <h2>Carrito</h2>
            {products.map((Item)=> <CartItem key={Item.id} Item={Item}/>)}           
        </div>
    )
}

export default CartContainer