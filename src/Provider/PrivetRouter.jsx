import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivetRouter = ({children}) => {
    const {user, userLoading}= use(AuthContext)
    const location = useLocation()
    if(userLoading){
        return <Loading></Loading>
    }
    if(user&& user.email){

        return children
    }else{
        return <Navigate state={location.pathname} to='/'></Navigate>
    }
};

export default PrivetRouter;