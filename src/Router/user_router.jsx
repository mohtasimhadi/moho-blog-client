import React from 'react';
import LandingPage from '../AllPages/Landing/LandingPage';
import Authentication from '../AllPages/Authentication/Authentication';
import Blogs from '../AllPages/Blogs/Blog';
import SingleBlog from '../AllPages/Blogs/SingleBlog';

const user_router = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/sign-in",
        element: <Authentication />,
    },
    {
        path: '/blog',
        element: <Blogs />
    },
    {
        path: '/blog/:id',
        element: <SingleBlog />,
        loader: ({ params }) => fetch(`http://localhost:5001/api/v1/blog/get-blog-by-id?blog_id=${params.id}`)

    }
]

export default user_router;