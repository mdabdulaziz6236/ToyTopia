import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const Home = () => {
    const {user} = use(AuthContext)
    return (
        <div>
            {user && <p>{user.name}</p>}
            This is home page...
        </div>
    );
};

export default Home;