import React from 'react';
import './ItemCard.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ItemCard = (props) => {
    const {_id,name,picture,price,quantity,ServiceName, reviewText} = props.item;
    const navigate = useNavigate();
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <div className='card'>
            <img src={picture} alt="images" className='item-img'/>
            <div className="card-body">
                <div className='d-flex justify-content-around'>
                <p>ItemName: <b>{ServiceName}</b></p>
                <p>Name: <b>{name}</b></p>
                </div>
                <div className='d-flex justify-content-around'>
                <p>Price: <b>{price}</b></p>
                <p>quantity: <b>{quantity}</b></p>
                </div>
                
                <p>{reviewText}</p>
                <Button onClick={() => navigateToUpdate(_id)} variant="primary">update</Button>
            </div>
            </div>
        </div>
    );
};

export default ItemCard;