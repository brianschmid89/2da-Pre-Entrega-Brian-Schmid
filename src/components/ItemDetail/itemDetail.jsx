import React from 'react'
import ItemCount from '../ItemCount/itemCount'


const ItemDetail = ({Item}) => {
console.log(Item)
    const onAdd = (qty) => console.log(qty);
    
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
                    <h4>Precio: {Item.price}</h4>
                    <ItemCount stock = {Item.stock} onAdd ={onAdd}/>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail