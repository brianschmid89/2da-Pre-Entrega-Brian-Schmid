import React , {useEffect, useState} from "react";
import './styles.css';
//import rawProducts from "../../data/products";
import ItemList from "../../components/ItemList/itemList";
import { collection, query,  getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";



export default function ItemListContainer ({greeting}) {
   
    
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams() 

    
    useEffect (()=> {
        (async () => {

        //     const obtenerProductos = () => {
        //         return new Promise ((resolve, reject) => {
        //         setTimeout (() => {
        //             resolve (rawProducts);
        //         }, 2000);
        //     });
        // } 

            // ARMAMOS LA QUERY
        let q;

        if (categoryId) {
            q = query(collection(db, "productos"), where("category", "==", categoryId))

        } else {q = query(collection(db, "productos"))}

// ACA CREAMOS LA QUERY
        const querySnapshot = await getDocs(q);

        const productosFirebase = querySnapshot.docs.map((item) => {
                return{...item.data(), id: item.id}
});
        setProducts(productosFirebase);
        }) ()

    }, [categoryId])
    return (
        <>
            <ItemList products = {products}/>
        </>    
    )


}