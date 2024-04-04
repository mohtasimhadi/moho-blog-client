import React from 'react';
import HeroSection from './HeroSection';
import Blogs from '../Blogs/Blog';
import Publications from '../Publications/Publications';

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <Blogs />
            <Publications />
        </div>
    );
};

export default LandingPage;