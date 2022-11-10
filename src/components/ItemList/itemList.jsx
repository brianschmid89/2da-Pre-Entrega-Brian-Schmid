import React from "react";
import Item from "../Item";
import './styles.css';


const ItemList = ({ products }) => {
    return (
        <div className="itemList">
            {products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;