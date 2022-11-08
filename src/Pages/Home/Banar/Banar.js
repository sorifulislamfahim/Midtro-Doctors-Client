import React from 'react';
import banar from '../../../assets/banar/banar1.png'

const Banar = () => {
    return (
        <div className="hero bg-base-200 mb-20 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='w-1/2'>
            <img src={banar} alt='' className="max-w-sm" />
          </div>
          <div className='w-1/2 mx-10'>
            <h1 className="text-5xl font-bold text-blue-800">Protect Your Health And Take Care To Of Your Health</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-warning">Read More</button>
          </div>
        </div>
      </div>
    );
};

export default Banar;