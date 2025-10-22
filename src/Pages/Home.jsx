import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const Home = () => {
    const {user} = use(AuthContext)
    console.log(user)
    return (
        <div>
            {user && <p>{user.displayName}</p>}
            This is home page...
        </div>
    );
};

export default Home;