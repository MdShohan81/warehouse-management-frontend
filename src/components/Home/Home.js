import React from 'react';
import './Home.css'
import useItem from '../../hooks/useItem'
import Banner from '../Banner/Banner'
import ItemCard from '../ItemCard/ItemCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [items, setItems] = useItem();
    return (
        <div>
            <Banner></Banner>
                    <div className="container">
                        <div className="row">  
                            <h3 className='text-center my-5'>Our Service</h3>  
                            <div className="col-md-12 item-container">
                        {
                            items.slice(0,6).map(item => <ItemCard key={item._id}
                            item={item}
                            ></ItemCard>)
                        }
                        <Link to="/items"><button className='btn btn-danger'>More Items</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Home;