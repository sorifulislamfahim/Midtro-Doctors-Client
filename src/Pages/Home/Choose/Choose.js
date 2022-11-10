import React from 'react';
import { FaPhone, FaCalendarAlt, FaShoppingBag, FaTemperatureLow, FaAmbulance, FaHeadphones} from 'react-icons/fa';

const Choose = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center underline font-mono text-4xl hover:text-orange-600'>Why Choose Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                <div className='text-center'>
                    <div className='bg-sky-400 p-5 w-44 mx-auto rounded items-center'>
                        <FaPhone className='text-9xl bg-white rounded-3xl p-5 hover:bg-sky-400 hover:text-white'/>
                    </div>
                    <p className='text-2xl py-3'>Emergency Departments</p>
                    <p>Mel in hinc veri admodum, copiosae epicurei mea ei. Cum at nisl soleat. Eam insolens referrentur efficiantur an. Nibh deleniti ad vix, quodsi aliquam legendos pri in.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-sky-400 p-5 w-44 mx-auto rounded items-center'>
                        <FaCalendarAlt className='text-9xl bg-white rounded-3xl p-5 hover:bg-sky-400 hover:text-white'/>
                    </div>
                    <p className='text-2xl py-3'>24 hour Service</p>
                    <p>Mel in hinc veri admodum, copiosae epicurei mea ei. Cum at nisl soleat. Eam insolens referrentur efficiantur an. Nibh deleniti ad vix, quodsi aliquam legendos pri in.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-sky-400 p-5 w-44 mx-auto rounded items-center'>
                        <FaTemperatureLow className='text-9xl bg-white rounded-3xl p-5 hover:bg-sky-400 hover:text-white'/>
                    </div>
                    <p className='text-2xl py-3'>Advanced Technology</p>
                    <p>Mel in hinc veri admodum, copiosae epicurei mea ei. Cum at nisl soleat. Eam insolens referrentur efficiantur an. Nibh deleniti ad vix, quodsi aliquam legendos pri in.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-sky-400 p-5 w-44 mx-auto rounded items-center'>
                        <FaAmbulance className='text-9xl bg-white rounded-3xl p-5 hover:bg-sky-400 hover:text-white'/>
                    </div>
                    <p className='text-2xl py-3'>Ambulance</p>
                    <p>Mel in hinc veri admodum, copiosae epicurei mea ei. Cum at nisl soleat. Eam insolens referrentur efficiantur an. Nibh deleniti ad vix, quodsi aliquam legendos pri in.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-sky-400 p-5 w-44 mx-auto rounded items-center'>
                        <FaHeadphones className='text-9xl bg-white rounded-3xl p-5 hover:bg-sky-400 hover:text-white'/>
                    </div>
                    <p className='text-2xl py-3'>Primary health care</p>
                    <p>Mel in hinc veri admodum, copiosae epicurei mea ei. Cum at nisl soleat. Eam insolens referrentur efficiantur an. Nibh deleniti ad vix, quodsi aliquam legendos pri in.</p>
                </div>

                <div className='text-center'>
                    <div className='bg-sky-400 p-5 w-44 mx-auto rounded items-center'>
                        <FaShoppingBag className='text-9xl bg-white rounded-3xl p-5 hover:bg-sky-400 hover:text-white'/>
                    </div>
                    <p className='text-2xl py-3'>Pharmacies and drug stores</p>
                    <p>Mel in hinc veri admodum, copiosae epicurei mea ei. Cum at nisl soleat. Eam insolens referrentur efficiantur an. Nibh deleniti ad vix, quodsi aliquam legendos pri in.</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;