import JoditEditor from 'jodit-react';
import React, { useState } from 'react';
import useImageUpload from '../../Hooks/UploadImage';
import post_api from '../../Hooks/PostApi';

const Add_Blog = () => {
    const { uploadImage } = useImageUpload();
    const project_submit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const content = e.target.content.value;
        const featured_image = await uploadImage(e.target.featured_image.files[0]);

        const blog_data = {
            title,
            content,
            featured_image,
            timestamp: new Date().getTime()
        }

        post_api({ url: 'blog/add-blog', data: blog_data }).then((result) => {
            if (result) {
                alert('Blog added successfully')
            }
        })

    }


    return (
        <div className='w-full border p-8 border-opacity-20'>
            <h1 className='text-3xl pb-4'>Add New Blog </h1>

            <form onSubmit={project_submit} className="w-full ">
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                        Title
                    </label>
                    <input
                        name="title"
                        className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border "
                        id="title"
                        placeholder="Enter blog post title"
                        type="text"
                    />
                </div>
                <br />
                <div className="">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="featured-image">
                        Featured Image
                    </label>
                    <div className="flex items-center border p-2 rounded">
                        <input name='featured_image' type="file" />
                    </div>

                </div>
                <br />
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="content">
                        Content
                    </label>
                    <JoditEditor name='content' />
                </div>
                <br />
                <div className="flex justify-start">
                    <button
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                        type="submit"
                    >
                        Upload Your Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add_Blog;