import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServicesCart = ({ service }) => {
    const { title, img, price, description, _id } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="img" className='p-5 rounded-3xl'/>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-2xl font-serif">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'>Charge Fee: ${price}</p>
                <div className="card-actions text-lg">
                    {
                        description.length > 100 ?
                            <p>{description.slice(0, 100) + '...'} <Link to={`/checkout/${_id}`}> <button className='btn rounded-sm mx-2'>view details</button></Link></p> :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;