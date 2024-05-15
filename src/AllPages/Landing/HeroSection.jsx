import { useQuery } from '@tanstack/react-query';
import React from 'react';
import stripHtmlTags from '../../Hooks/html_to_text';
import { Link } from 'react-router-dom';

const HeroSection = () => {


    const { data: feature_blog = {}, isLoading, isError, isFetching, refetch } = useQuery({
        queryKey: ["feature_blog"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5001/api/v1/blog/get-blog"
            );
            const data = await res.json();

            // Filter featured blogs
            const featuredBlogs = data.data.filter(blog => blog.featured);

            // If there are featured blogs, return the first one
            if (featuredBlogs.length > 0) {
                return featuredBlogs[0];
            } else {
                // Otherwise, return the first blog
                return data.data[0];
            }
        },
    });

    console.log(feature_blog);

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">

                                {feature_blog.title}
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {stripHtmlTags(feature_blog.content).split(' ').slice(0, 50).join(' ')}
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <Link
                                to={`/blog/${feature_blog._id}`}
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                            >
                                <span className="mr-3">Continue Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>

                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={feature_blog.featured_image}
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;