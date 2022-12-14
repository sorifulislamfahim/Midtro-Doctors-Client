import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://meditro-server.vercel.app/some-services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-10'>
                <h3 className='text-2xl text-orange-600 font-bold'>Services</h3>
                <p className='text-4xl my-4 font-serif font-semibold uppercase'>We give this services my patient</p>
                <p className='w-3/4 mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14'>
                {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart>)
                }
            </div>
            <div className="text-center">
            <li><Link className='btn' to='/service'>See More</Link></li>
            </div>
        </div>
    );
};

export default Services;