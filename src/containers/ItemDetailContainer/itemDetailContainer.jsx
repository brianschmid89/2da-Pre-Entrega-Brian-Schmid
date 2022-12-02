import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/itemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [products, setProducts] = useState(null)

    useEffect(() => {

        const getProductsDetail = async () => {
            //1ro referencia al doc
            const docRef = doc(db, "products", id);

            //2do generar la petición
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProducts({...docSnap.data(), id: docSnap.id})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        getProductsDetail()
        //hacer el fetch del detalle del producto
    }, [id])

    return (<ItemDetail Item={products}/>)
};

export default ItemDetailContainer