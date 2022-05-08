import React from 'react';
import './ClientReview.css'
import review1 from '../../img/review/1.jpg'
import review2 from '../../img/review/2.jpg'
import review3 from '../../img/review/3.jpg'
import review4 from '../../img/review/4.jpg'


const ClientReview = () => {
    return (
        <div className='container'>
            <div className="row gy-4">
                <h3 className='text-center my-5'>Clients <span className='text-danger'>Reviews</span> Feedback</h3>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>Awesome! Loving it </b></h3>
                        <p>They gave me an appointment when I contacted them at very short notice. They are professional, punctual, and so, so friendly.</p>
                        <div className='d-flex'>
                            <img src={review1} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'>Jenia Henri</h5>
                                <h6>From Australia</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>JUST! FABULOUS </b></h3>
                        <p>As a first time buyer into the Toyota brand in 2016 I have been blown away with the level of customer service at my local dealership since the day </p>
                        <div className='d-flex'>
                            <img src={review2} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'> Albert</h5>
                                <h6>From Netherland</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>VERY QUICK & FAST </b></h3>
                        <p>TVery pleased with the professional but friendly attitude in this garage. Place is very nice. </p>
                        <div className='d-flex'>
                            <img src={review3} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'>Yasita loard</h5>
                                <h6>From Canada</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>FIND IT & QUIT PROFESSIONAL </b></h3>
                        <p>The service was excellent and the staff were very friendly, it’s the first garage that did the service so quick and cleaned my car</p>
                        <div className='d-flex'>
                            <img src={review4} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'>Levaran ko</h5>
                                <h6>From USA</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientReview;