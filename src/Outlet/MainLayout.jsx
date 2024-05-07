import React from 'react';
import { Nav } from '../Common/Navber';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';
;

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;