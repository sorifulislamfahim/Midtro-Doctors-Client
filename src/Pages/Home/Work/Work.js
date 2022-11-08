import React from 'react';
import image from '../../../assets/works/work1.jpg'
import { FaHSquare, FaChild, FaSpeakerDeck, FaSun, FaBaby, FaUserInjured } from 'react-icons/fa';

const Work = () => {
    return (
        <div className='my-10 bg-white py-8'>
            <h2 className='text-2xl underline text-center text-sky-500 font-thin'>What We Do</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src={image} alt='' className="shadow-2xl  border-sky-600 border-4" />
                    </div>
                    <div className='w-1/2'>
                        <p className="text-gray-400 font-mono text-xl">Klinik is a HTML5 & CSS3 responsive template created for clinic and hospital but also can be used for generalised website. It is a fully responsive, feature rich and beautifully designed to host a website or create online identity. We have created 55+ pages and 200+ components for this template and much more in future.</p>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                            <div>
                                <FaChild  className='text-9xl bg-sky-600 rounded-xl p-2 hover:bg-orange-500'/>
                                <p className='text-xl'>Childbirth Center</p>
                            </div>
                            <div>
                                <FaHSquare className='text-9xl bg-sky-600 rounded-xl p-2 hover:bg-orange-500'/>
                                <p className='text-xl'>Dermatologist</p>
                            </div>
                            <div>
                                <FaSpeakerDeck className='text-9xl bg-sky-600 rounded-xl p-2 hover:bg-orange-500'/>
                                <p className='text-xl'>Radiology Center</p>
                            </div>
                            <div>
                                <FaSun className='text-9xl bg-sky-600 rounded-xl p-2 hover:bg-orange-500'/>
                                <p className='text-xl'>Mammography</p>
                            </div>
                            <div>
                                <FaBaby className='text-9xl bg-sky-600 rounded-xl p-2 hover:bg-orange-500'/>
                                <p className='text-xl'>Dermatologist</p>
                            </div>
                            <div>
                                <FaUserInjured className='text-9xl bg-sky-600 rounded-xl p-2 hover:bg-orange-500'/>
                                <p className='text-xl'>Paediatrics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;