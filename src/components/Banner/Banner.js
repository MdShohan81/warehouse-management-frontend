import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Banner/Banner.css'
import slider1 from '../../img/slider-banner1.jpg'
import slider2 from '../../img/slider-banner2.jpg'
import slider3 from '../../img/slider-banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-height"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Carspot</h3>
          <p>Find your Dream Car and enjoy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-height"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Explore All Vehicles</h3>
          <p>Charge up your commute and keep your footprint small with our plug-in hybrid.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-height"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Chose Best Car</h3>
          <p>
          The original hybrid, for people who dislike stopping for anything but snacks..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                
    );
};

export default Banner;