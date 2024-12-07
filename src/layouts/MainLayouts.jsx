import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <Navbar />

            <div className='min-h-[calc(100vh-376px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;