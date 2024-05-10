import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import ManagementSideNav from '../Common/ManagementSideNav';


const ManagementLayout = () => {
    return (
        <div>
            <div className='flex gap-2 items-start justify-start '>

                <ManagementSideNav />
                <div className='pt-6 w-full'>
                    <Outlet />
                </div>

            </div>


        </div>
    );
};

export default ManagementLayout;