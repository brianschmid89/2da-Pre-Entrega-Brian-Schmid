import { createContext, useState } from "react";
import React from "react";

export const Shop = createContext({});

const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {
        console.log(productToAdd);
        
        const flagRepeated = isProductRepeated(productToAdd.id)
        
        if (flagRepeated) {
            //Lógica para agregar la quantity y no agregar el producto entero
            //encontrar producto repetido
            const productoRepetidoModificado = products.find(
                productInCart => productInCart.id === productToAdd.id
            );
            productoRepetidoModificado.quantity += productToAdd.quantity

            //quitar producto repetido
            const productosCartSinRepetido = products.filter(
            (productsInCart) => productsInCart.id !== productToAdd.id
            );

            setProducts([...productosCartSinRepetido, 
                        productoRepetidoModificado,
            ]);    

        } else {
            setProducts([...products, productToAdd])
        }
    }

    //Equivalente a isInCart
    const isProductRepeated = (id) => {
        return products.some(product => product.id === id);
    }

        //Eliminar un producto
    const removeProduct = (id) => {
        const productosCart = products.filter(
            (productsInCart) => productsInCart.id !== id
        );
        setProducts(productosCart)
    };

    //Vaciar el carrito
    const emptyCart = () => {
        setProducts([]);
    }
    //Cálculo del total
    const cartQuantity = () => {
        return products.reduce((acc, prod) => acc += prod.quantity,0)
    }

    const totalPrice = () => {
        let cant = 0
        products.forEach(prod => {
            cant = cant + (prod.quantity*prod.price)
        })
        return cant
    }

    //Cálculo del total de items del carrito

    
    const totalItemsCart = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    return  ( 
        <Shop.Provider
            value={{
                products, 
                addProduct, 
                removeProduct, 
                emptyCart, 
                cartQuantity,
                totalPrice, 
                totalItemsCart,
                }}
        >
                {children}
                </Shop.Provider>
            );
};

export default ShopProvider;