import React from "react";
import {Element} from 'react-scroll'
function InternCTA() {
    return (
        <>
        <Element name="HowItWorks">
        <div className="flex items-center justify-between w-full h-full">
            <div className="flex flex-col lg:flex-row w-full h-full items-start lg:items-center rounded bg-white shadow">
                <div className="w-full lg:w-8/12 h-full dark:bg-gray-800 pl-16">
                    <section className="max-w-8xl pt-16 mx-auto container bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex flex-col justify-center w-full px-4 md:w-5/6 md:px-2 lg:px-12 py-10 pb-20 items-center md: -mt-10 md: -mb-10">
                                <div className="px-auto">
                                    <h3 className="text-xl  xl:text-4xl font-bold lg:leading-tight text-gray-800">Ready to change the status quo?</h3>
                                    <p className="text-base xl:text-xl text-gray-600 xl:leading-normal pt-4"> Through Slingshot, you are matched with a CMU, MIT, Stanford or YC startup for 12 weeks to meaningfully contribute alongside seasoned engineers in a challenging, fast-paced, industry environment.</p>
                                    <a href="https://slingshotmentoring.typeform.com/to/WGNBeJRv">
                                        <button className="my-4 lg:my-8 lg:mb-0 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none rounded text-white py-2 px-4  xl:px-8 xl:py-4 text-lg xl:text-2xl">Sign up today!</button>
                                    </a>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0 mt-12">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700"><a href="https://bit.ly/3b1nS1R">Just started learning CS? Don't worry, check this out!</a></h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full lg:w-6/12 h-full lg:h-full border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-white">
                    <div className="container w-full flex justify-center py-10 px-12">
                        <div className="w-full md: mb-5">
                            <div className="pt-12 w-full justify-between flex -mt-5">
                                <div className="flex flex-col items-center pt-2 sm:pt-8 lg:pt-2 pr-2 lg:pr-0">
                                    <div className="mt-8">
                                        <h1 className="font-bold text-indigo-900 text-lg">1. Sign up</h1>
                                        <h2 className="lg:w-11/12 text-sm md:text-base text-gray-700 pt-1">View our exclusive startup portfolio.</h2>
                                    </div>
                                    <div className="pt-8 sm:pt-16 mt-10 lg:pt-8">
                                        <h1 className="font-bold text-indigo-900 text-lg">3. Find a match!</h1>
                                        <h2 className="lg:w-11/12 text-sm md:text-base text-gray-700 pt-1">Find your perfect place to intern. </h2>
                                    </div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={119} height={385} viewBox="0 0 119 385" fill="none">
                                        <circle cx={4} cy={74} r={4} fill="#000000" />
                                        <circle cx={115} cy={143} r={4} fill="#000000" />
                                        <circle cx={7} cy={240} r={4} fill="#000000" />
                                        <circle cx={114} cy={310} r={4} fill="#000000" />
                                        <rect x={59} width={2} height={385} fill="#000000" />
                                        <rect x={4} y={73} width={55} height={2} fill="#000000" />
                                        <rect x={60} y={143} width={55} height={2} fill="#000000" />
                                        <rect x={4} y={239} width={55} height={2} fill="#000000" />
                                        <rect x={60} y={309} width={55} height={2} fill="#000000" />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center pt-10 sm:pt-28 lg:pt-14 pl-2 lg:pl-7">
                                    <div className="mt-10">
                                        <h1 className="font-bold text-indigo-900 text-lg">2. Get Slingshot verified</h1>
                                        <h2 className="lg:w-11/12 text-sm md:text-base text-gray-700 pt-1">Being Slingshot verified makes you more noticed.</h2>
                                    </div>
                                    <div className="pt-10 mt-10 lg:pt-11">
                                        <h1 className="font-bold text-indigo-900 text-lg">4. Slingshot ahead</h1>
                                        <h2 className="lg:w-11/12 text-sm md:text-base text-gray-700 pt-1">Intern. Contribute. Grow. Repeat.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Element>
        </>
    );
}

export default InternCTA;