import React, { useContext, useState } from 'react';
import { Shop } from '../../contexts/Shop';
import { useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/itemCount';
import "./styles.css";


const ItemDetail = ({Item}) => {

    const {addProduct} = useContext(Shop);
    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const navigate = useNavigate ();

    const confirmPurchase = (quantity) => {
        addProduct({...Item, quantity})
        setQuantityItemDetail(quantity);
    };


    const handleNavigate = () => {
        navigate('/cart')
        }
    
    return (

    <div>
            <div className="card mb-4 style=max-width: 340px;">
                <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Item.image} className="img-fluid rounded-start" alt={Item.title}/>
                    </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{Item.title}</h5>
                    <h4>Precio: ${Item.price}.</h4>
                        {quantityItemDetail ? 
                            <button className='carrito' onClick = {handleNavigate}>Ir al carrito</button> 
                        :   
                            <ItemCount stock = {Item.stock} onAdd ={confirmPurchase}/>}
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail