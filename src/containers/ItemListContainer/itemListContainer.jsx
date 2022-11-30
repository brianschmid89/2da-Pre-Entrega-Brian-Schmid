import React , {useEffect, useState} from "react";
import './styles.css';
import rawProducts from "../../data/products";
import ItemList from "../../components/ItemList/itemList";
import { collection, query,  getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";



export default function ItemListContainer ({greeting}) {
   
    
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams() 

    
    useEffect (()=> {
        (async () => {

            const obtenerProductos = () => {
                return new Promise ((resolve, reject) => {
                setTimeout (() => {
                    resolve (rawProducts);
                }, 2000);
            });
        } 

            // ARMAMOS LA QUERY
        let q;

        if (categoryId) {
            q = query(collection(db, "products"), where("category", "==", categoryId))

        } else {q = query(collection(db, "products"))}

// ACA CREAMOS LA QUERY
        const querySnapshot = await getDocs(q);

        const productosFirebase = [];

            querySnapshot.forEach((doc) => {

// doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productosFirebase.push({...doc.data(), id: doc.id})
});
        setProducts(productosFirebase);

        const response = await obtenerProductos ();
        console.log (response);

        setProducts(response);
        }) ()

    }, [categoryId])

    return (
        <>
            <ItemList products = {products}/>
        </>    
    )


}



