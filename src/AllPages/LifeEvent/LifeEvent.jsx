import React from 'react';


const LifeEvent = () => {


    const lifeEvents = [
        {
            "event": "Birth",
            "date": "1990-06-15",
            "place": "City, Country",
            "description": "I was born on June 15, 1990, in City, Country.",
            "image_url": "https://example.com/birth.jpg"
        },
        {
            "event": "Graduated from High School",
            "date": "2008-05-25",
            "place": "City, Country",
            "description": "I graduated from high school on May 25, 2008, in City, Country.",
            "image_url": "https://example.com/high_school_graduation.jpg"
        },
        {
            "event": "Started College",
            "date": "2008-09-01",
            "place": "University, Country",
            "description": "I started college at University in Country on September 1, 2008.",
            "image_url": "https://example.com/college_start.jpg"
        },
        {
            "event": "Graduated with Bachelor's Degree",
            "date": "2012-05-20",
            "place": "University, Country",
            "description": "I graduated with a Bachelor's degree from University in Country on May 20, 2012.",
            "image_url": "https://example.com/bachelors_graduation.jpg"
        },
        {
            "event": "Started First Job",
            "date": "2012-07-01",
            "place": "Company, City, Country",
            "description": "I started my first job at Company in City, Country on July 1, 2012.",
            "image_url": "https://example.com/first_job.jpg"
        },
        {
            "event": "Got Married",
            "date": "2015-09-12",
            "place": "City, Country",
            "description": "I got married on September 12, 2015, in City, Country.",
            "image_url": "https://example.com/wedding.jpg"
        },
        {
            "event": "Became a Parent",
            "date": "2018-03-10",
            "place": "Hospital, City, Country",
            "description": "I became a parent on March 10, 2018, at Hospital in City, Country.",
            "image_url": "https://example.com/baby.jpg"
        },
        {
            "event": "Moved to New Home",
            "date": "2020-07-15",
            "place": "New City, Country",
            "description": "We moved to a new home in New City, Country on July 15, 2020.",
            "image_url": "https://example.com/new_home.jpg"
        }
    ]

    return (
        <div>
            <div class="p-4">
                <h2 class="text-3xl text-center text-black font-bold mb-12">Life And Events</h2>
                <div >
                    {lifeEvents.map((LifeEvent, index) => (
                        <div key={index} class="flex flex-col grid-cols-9  mx-auto md:grid">
                            {
                                index % 2 === 0 ? <div class="flex md:contents flex-row-reverse">
                                    <div
                                        class="relative py-4 px-2 my-6 text-gray-800 w-[500px] bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                        <h3 class="text-lg font-semibold lg:text-xl">{LifeEvent.event}</h3>
                                        <p class="mt-2 leading-6">{LifeEvent.description}</p>
                                        <span class="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap">{LifeEvent.date}</span>
                                    </div>
                                    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                        <div class="flex items-center justify-center w-6 h-full">
                                            <div class="w-1 h-full bg-gray-500 rounded-t-full bg-gradient-to-b from-black to-gray-500">
                                            </div>
                                        </div>
                                        <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-black rounded-full top-1/2"></div>
                                    </div>
                                </div> : <div class="flex md:contents ">
                                    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto ">
                                        <div class="flex items-center justify-center w-6 h-full">
                                            <div class="w-1 h-full bg-gray-500"></div>
                                        </div>
                                        <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-black rounded-full top-1/2"></div>
                                    </div>
                                    <div class="relative py-4 px-2 my-6 text-gray-800 bg-white w-[500px] rounded-xl col-start-6 col-end-10 mr-auto">
                                        <h3 class="text-lg font-semibold lg:text-xl">{LifeEvent.event}</h3>
                                        <p class="mt-2 leading-6">{LifeEvent.description}</p>
                                        <span class="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap">{LifeEvent.date}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    );
};

export default LifeEvent;