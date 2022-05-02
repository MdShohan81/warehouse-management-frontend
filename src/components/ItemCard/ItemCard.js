import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    const {name,picture,price,quantity,ServiceName, reviewText} = props.item;
    return (
        <div>
            <div className='card'>
            <img src={picture} alt="images" className='item-img'/>
            <div className="card-body">
                <div className='d-flex justify-content-around'>
                <p>Price: <b>{price}</b></p>
                <p>quantity: <b>{quantity}</b></p>
                </div>
                <div className='d-flex justify-content-around'>
                <p>ItemName: <b>{ServiceName}</b></p>
                <p>Name: <b>{name}</b></p>
                </div>
                
                <p>{reviewText}</p>
                <button className='btn btn-danger'>Update</button>
            </div>
            </div>
        </div>
    );
};

export default ItemCard;