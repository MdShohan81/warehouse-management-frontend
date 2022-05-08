import React from 'react';
import './Expert.css'
import cars from '../../img/cars.png'
import leftcars from '../../img/car.png'

const Expert = () => {
    return (
        <div>
            <div className='container my-5'>
            <div className="row">
                <div className="col-md-12 mx-autoi">
                    <img src={cars} alt="cars" className='img-fluid' />
                </div>
            </div>
        </div>
        <div className="cars-expert">
                    <div className='expert-left'>
                        <img src={leftcars} className="img-fluid" alt="" />
                    </div>
                    <div className='expert-right'>
                        <h4 className='text-secondary'>Services We Offer</h4>
                        <h3>WE ARE EXPERT IN</h3>
                        <p>Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Praesent quis facilisis neque. Donec scelerisque nibh vitae sapien ornare efficitur.</p>
                        <h5 className='text-danger'>Dealership</h5>
                        <p>We have the right caring, experience and dedicated professional for you.</p>
                        <h5 className='text-danger'>Engine Upgrades</h5>
                        <p>Car engines are built around the cylinders, which are sealed metal tubes with a spark plug and two valves on one side, and a crankshaft on the other.</p>
                    </div>
                </div>
        </div>
    );
};

export default Expert;