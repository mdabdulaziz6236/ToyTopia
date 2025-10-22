import React from 'react';
import MyContainer from '../Components/MyContainer';

const ErrorPage = () => {
    return (
        <div className='bg-gray-300'>
            <MyContainer className='flex flex-col justify-center items-center   min-h-screen
        '>
            <h2 className='font-extrabold text-red-500 text-5xl'>404</h2>
            <h1 className='font-extrabold text-pink-500 md:text-4xl text-3xl lg:text-6xl my-10'>This is Error page.</h1>
        </MyContainer>
        </div>
    );
};

export default ErrorPage;