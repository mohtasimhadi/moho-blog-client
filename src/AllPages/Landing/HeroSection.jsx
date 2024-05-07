import React from 'react';

const HeroSection = () => {
    const feature_blog = {
        title: "The quick, brown fox jumps over a lazy dog",
        description: " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.explicabo.",
        image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
    }
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
                                {feature_blog.description}
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                            >
                                <span className="mr-3">Continue Read</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                            </a>

                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={feature_blog.image}
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;