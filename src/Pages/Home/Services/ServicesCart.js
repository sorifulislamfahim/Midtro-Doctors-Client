import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCart = ({service}) => {
    const {title, img, price, description, _id} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-serif">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'>Charge Fee: ${price}</p>
                <div className="card-actions text-lg">
                    {
                        description.length > 100 ?
                        <p>{description.slice(0, 100) + '...'} <Link className='text-orange-600' to={`/checkout/${_id}`}>Read More</Link></p> :
                        <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;