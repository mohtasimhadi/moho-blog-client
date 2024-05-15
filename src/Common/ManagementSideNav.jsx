import React from 'react';
import { useEffect, useState } from "react";
import Logo from './Logo.png';
import { NavLink } from 'react-router-dom';


// NavLink component


// Title component
const Title = ({ children }) => (
    <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
        {children}
    </h3>
);
const SectionsList = ({ items }) => (
    <div className='text-gray-600 px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        to={item?.href}
                        className={({ isActive }) => {
                            return isActive
                                ? "block w-full py-2 px-4 border-l border-indigo-600 text-indigo-600 duration-150"
                                : "block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150";
                        }}

                    >
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);
const ManagementSideNav = () => {
    const sub_menu = {
        blog: [{ name: "Manage Blog", href: "/admin/blog-management" },],

        book: [
            { name: "Manage Book", href: "'/admin/book-management" },
        ],
        publication: [
            { name: "Manage Publication", href: "/admin/publication-management" },
        ],
        life_events: [
            { name: "Life & Events", href: "/admin/life-events" },
        ]
    }

    return (
        <>
            <nav
                className="border h-screen w-80 p4 ">
                <div className="">
                    <div className='h-20 flex items-center px-4 md:px-8'>
                        <a href='javascript:void(0)' className='flex-none'>
                            <img src={Logo} width={140} className="mx-auto" />
                        </a>
                    </div>

                </div>
                <div className='text-[0.9rem] space-y-6 mt-4'>
                    <>
                        <div>
                            <Title>Blogs</Title>
                            <SectionsList items={sub_menu.blog} />
                        </div>
                        <div>
                            <Title>Life And Events</Title>
                            <SectionsList items={sub_menu.life_events} />
                        </div>
                        <div>
                            <Title>Book</Title>
                            <SectionsList items={sub_menu.book} />
                        </div>
                        <div>
                            <Title>Publication</Title>
                            <SectionsList items={sub_menu.publication} />
                        </div>
                    </>
                </div>
            </nav>
        </>
    );
};
export default ManagementSideNav;