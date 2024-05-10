import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import stripHtmlTags from '../../Hooks/html_to_text';
import DeleteApi from '../../Hooks/DeleteApi';
import updateApi from '../../Hooks/updateApi';



const Blog_Management = () => {

    const { data: all_blog = [], isLoading, isError, isFetching, refetch } = useQuery({
        queryKey: ["all_blog"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5001/api/v1/blog/get-blog"
            );
            const data = await res.json();
            return data.data;
        },
    });

    // Calculate loading percentage
    const loadingPercentage = Math.round((isFetching ? 1 : 0) * 100);

    const delete_blog = async (id) => {

        if (!window.confirm('Are you sure you want to delete this blog?')) {
            return
        }
        await DeleteApi({ url: `blog/delete-blog?blog_id=${id}` }).then((result) => {
            if (result) {
                refetch();
            }
        })
    }


    const feature_blog = async (id, featured) => {
        console.log(id);
        await updateApi({ url: `blog/update-blog?blog_id=${id}`, data: { featured: !featured } }).then((result) => {
            if (result) {
                alert('Blog updated successfully')
                refetch();
            }
        })
    }





    return (
        <div className=" px-4 md:px-8 ">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl capitalize">
                        Manage your Blog
                    </h3>

                </div>
                <div className="mt-3 md:mt-0">
                    <Link
                        to={'/admin/blog-management/add-blog'}
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add New Blog
                    </Link>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Image</th>
                            <th className="py-3 px-6 ">Title</th>
                            <th className="py-3 px-6 ">content</th>
                            <th className="py-3 px-6 ">Action</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            all_blog?.map((blog, idx) => (
                                <tr key={idx}>
                                    <td className="flex  items-center gap-x-3 py-3 px-6">
                                        <img src={blog?.featured_image} className="w-10 h-10 rounded" />

                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{stripHtmlTags(blog.content).slice(0, 50)}</td>


                                    <td className=" ">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button onClick={() => feature_blog(blog._id, blog.featured)} className={"py-2 leading-none px-3 font-medium  hover:text-red-500 duration-150 rounded-lg" + (!blog.featured ? ' text-yellow-600' : ' text-green-600')}>
                                            Feature
                                        </button>
                                        <button onClick={() => delete_blog(blog._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Blog_Management;