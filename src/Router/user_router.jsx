import React from 'react';
import LandingPage from '../AllPages/Landing/LandingPage';
import Authentication from '../AllPages/Authentication/Authentication';

const user_router = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/sign-in",
        element: <Authentication />,
    },
]

export default user_router;