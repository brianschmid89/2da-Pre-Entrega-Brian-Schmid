import React , {useEffect, useState} from "react";
import './styles.css';
//import rawProducts from "../data/products";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";


export default function ItemListContainer ({greeting}) {
    
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams ()

    console.log(categoryId);




    
/*     useEffect (()=> {
        (async () => {

            const obtenerProductos = () => {
                return new Promise ((resolve, reject) => {
                setTimeout (() => {
                    resolve (rawProducts);
                }, 3000);
            });
            } 

            const response = await obtenerProductos ();
            console.log (response);
            setProducts(response)
        }) ()

    }, []) */

useEffect( ()=> {
    ( async ()=> {
        try {
            console.log(categoryId);
            let response;
            if (categoryId) {
                response = await fetch(`https://rickandmortyapi.com/api/character/?species=${categoryId}`);
            } else {
                response = await fetch(`https://rickandmortyapi.com/api/character`);
            }
            console.log(response);
            const data = await response.json();
            console.log(data);
            setProducts(data.results)
        } catch (error) {
            console.log(error);
        }
    })()
}, [categoryId])

    return (
        <>
        {/* {<div className="item-list-container">
            <h2>{greeting}</h2>
            </div>} */}
            <ItemList products = {products}/>
         </>    
    )
}