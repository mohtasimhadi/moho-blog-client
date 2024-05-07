import React from 'react';
const posts = [
    {
        title: "What is SaaS? Software as a Service Explained",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "https://images.unsplash.com/photo-1458571037713-913d8b481dc6",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "A Quick Guide to WordPress Hosting",
        desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
        img: "https://images.unsplash.com/photo-1458571037713-913d8b481dc6",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "7 Promising VS Code Extensions Introduced in 2022",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1458571037713-913d8b481dc6",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
        desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
        img: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE3MTIxODQ1MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    }
]

const Blogs = () => {
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
                        posts.slice(0, 3).map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-gray-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-black duration-150 group-hover:text-gray-700 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Blogs;