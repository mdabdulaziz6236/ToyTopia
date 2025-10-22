import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const {user}= use(AuthContext)
    const location = useLocation()
    
    if(user&& user.email){

        return children
    }else{
        return <Navigate state={location.pathname} to='/'></Navigate>
    }
};

export default PrivetRouter;