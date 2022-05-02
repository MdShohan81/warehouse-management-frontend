import React from 'react';
import useItem from '../../hooks/useItem';
import ItemCard from '../ItemCard/ItemCard';

const Items = () => {
    const [items, setItems] = useItem();
    return (
        <div className="container">
        <div className="row">  
            <h3 className='text-center my-5'>Our Items</h3>  
            <div className="col-md-12 item-container">
        {
            items.map(item => <ItemCard key={item._id}
            item={item}
            ></ItemCard>)
        }
            </div>
        </div>
    </div>
    );
};

export default Items;