import React from 'react';

const Publications = () => {
    const jobs = [
        {
            title: "UI – Front End Dev",
            desc: "Currently, ManTech is seeking a motivated, career and customer-oriented Software Developer to join our team in Fort Meade, MD.",
            year: "2022",
            create: "1",
            type: "Full-time",
            href: "javascript:void(0)"
        },
        {
            title: "Back End Developer",
            desc: " Help us solve problems and develop great user interface tools for our developers.",
            year: "2022",
            create: "1",
            type: "Part-time",
            href: "javascript:void(0)"
        },
        {
            title: "Full-Stack Developer",
            desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
            year: "",
            create: "",
            type: "Full-time",
            href: "javascript:void(0)"
        },
    ]

    return (
        <div className='bg-gray-100'>
            <section className="py-12  max-w-screen-xl mx-auto px-4 md:px-8">
                <div>
                    <h1 className="text-gray-800 text-3xl font-semibold">
                        My Publications
                    </h1>
                </div>

                <ul className="mt-12">
                    <div className="flex justify-between items-start bg-gray-200 px-4 py-2">
                        <p className="text-gray-600 text-sm font-semibold">Title</p>
                        <div className="">

                            <p className=''>YEAR</p>
                        </div>
                    </div>
                    {jobs.map((item, idx) => (
                        <li key={idx} className="mt-3 px-4">
                            <a href={item.href}>
                                <div>
                                    <div className="justify-between flex">
                                        <div className="flex-1">
                                            <h3 className="text-[16px] hover:underline text-[#1a0dab] hover:text-[#660099]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#777777] font-[13px] pr-2">{item.desc}</p>
                                        </div>
                                        <div className="mt-5 text-sm sm:mt-0  sm:flex items-start">
                                            <span className="text-gray-500 ">{item?.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

            </section>
        </div>
    )
}

export default Publications;