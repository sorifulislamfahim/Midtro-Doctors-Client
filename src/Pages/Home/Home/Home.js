import React from 'react';
import Banar from '../Banar/Banar';
import Choose from '../Choose/Choose';
import Services from '../Services/Services';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Services></Services>
            <Work></Work>
            <Choose></Choose>
        </div>
    );
};

export default Home;