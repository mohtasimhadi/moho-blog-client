import { useQuery } from '@tanstack/react-query';
import React from 'react';
import stripHtmlTags from '../../Hooks/html_to_text';
import { Link } from 'react-router-dom';





const Blogs = () => {

    const { data: tree_blogs = [], isLoading, isError, isFetching, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5001/api/v1/blog/get-blog"
            );
            const data = await res.json();
            return data.data.slice(0, 3);
        },
    });


    return (
        <section className="pb-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div>
                    <h1 className="text-gray-800 text-3xl font-semibold">
                        My Blogs
                    </h1>
                </div>

                <ul className="grid gap-x-8 gap-y-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        tree_blogs.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <Link to={`/blog/${items._id}`}>
                                    <img srcSet={items.featured_image} src={items.featured_image} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-gray-600 text-sm">{new Date(items.timestamp).toDateString()}</span>
                                        <h3 className="text-lg text-black duration-150 group-hover:text-gray-700 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{stripHtmlTags(items.content).split(' ').slice(0, 20).join(' ')}</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Blogs;