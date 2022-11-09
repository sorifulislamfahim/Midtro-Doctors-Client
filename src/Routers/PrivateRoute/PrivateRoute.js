import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }

    if(user) {
        return children;
    }

    return <Navigate state={{form: location}} replace></Navigate>
};

export default PrivateRoute;