import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import products from "../data/products";
import { async } from "@firebase/util";


const saveProductsFirebase = async (products) => {

    try {
        products.forEach(async (product) => {
            const docRef = await addDoc(collection(db, "products"),{
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                stock: product.stock,
            });
            console.log("Document writter with ID: ", docRef.id);
        })
    } catch (error) {
        console.log(error)
        
    } 
}

export default saveProductsFirebase;