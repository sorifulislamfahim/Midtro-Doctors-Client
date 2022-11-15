import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServicesCart from './ServicesCart';

const AllService = () => {
    const services = useLoaderData([]);
    useTitle('All Services')
    return (
        <div>
          <div className='text-center mb-10'>
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
        </div>
    );
};

export default AllService;