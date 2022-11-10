import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/itemDetail';
import products from '../../data/products'

const ItemDetailContainer = () => {

    const [Item, setItem] = useState ({})

    const {idProd} = useParams ();
    

    useEffect (() => {
        const getProduct = () =>{
            return new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === idProd)
                setTimeout(() => {
                    res(product);
                }, 2000)
            });
        };
    
        getProduct()     
        
            .then((res) => {
                setItem(res);
            }) 
            .catch((error) => {
                console.log(`rej`, error)
            }); 
    }, [idProd]);


    return (
        
        <div>
            <ItemDetail Item ={Item}/>
        </div>
    )
}

export default ItemDetailContainer