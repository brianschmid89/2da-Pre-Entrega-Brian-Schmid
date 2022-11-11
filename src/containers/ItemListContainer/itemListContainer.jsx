import React , {useEffect, useState} from "react";
import './styles.css';
import rawProducts from "../../data/products";
import ItemList from "../../components/ItemList/itemList";


export default function ItemListContainer ({greeting}) {
   
    
    const [products, setProducts] = useState ([])

    
    useEffect (()=> {
        (async () => {

            const obtenerProductos = () => {
                return new Promise ((resolve, reject) => {
                setTimeout (() => {
                    resolve (rawProducts);
                }, 2000);
            });
        } 

            const response = await obtenerProductos ();
            console.log (response);
            setProducts(response)
        }) ()

    }, [])

    return (
        <>
        {/* {<div className="item-list-container">
            <h2>{greeting}</h2>
            </div>} */}
            <ItemList products = {products}/>
         </>    
    )
}



