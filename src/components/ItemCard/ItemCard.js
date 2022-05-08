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
            <img src={picture}  alt="images" className='img-fluid'/>
            <div className="card-body">
                <p>ItemName: <b className='text-danger'>{ServiceName}</b></p>
                <p>Name: <b className='text-danger'>{name}</b></p>
                <p>Price: <b className='text-danger'>${price}</b></p>
                <p>quantity: <b className='text-danger'>{quantity}</b></p>
                <p>{reviewText.slice(0, 50)}</p>
                <Button onClick={() => navigateToUpdate(_id)} variant="danger">update</Button>
            </div>
            </div>
        </div>
    );
};

export default ItemCard;