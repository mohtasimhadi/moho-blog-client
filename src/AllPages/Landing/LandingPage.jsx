import React from 'react';
import HeroSection from './HeroSection';
import Blogs from '../Blogs/Blog';
import Publications from '../Publications/Publications';
import LifeEvent from '../LifeEvent/LifeEvent';

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <LifeEvent />
            <Blogs />
            <Publications />
        </div>
    );
};

export default LandingPage;