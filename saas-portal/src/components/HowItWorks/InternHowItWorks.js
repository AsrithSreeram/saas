import React from "react";
import {Element} from 'react-scroll'

function InternHowItWorks() {
    return (
        <>
            <Element name="WhySlingshot">
            <div className="bg-gray-100">
                <section className="mx-auto container pt-20">
                    <div className="px-4 lg:px-0">
                        <div className="flex items-center flex-col px-4 md: -mt-12 md: -mb-8">
                            <h2 className="text-4xl lg:text-5xl pt-4 font-extrabold text-center leading-tight text-gray-800 lg:w-9/12 md:w-10/12">No more busy paper-work internships.</h2>
                            <h2 className="text-5xl lg:text-6xl pt-6 font-extrabold text-center leading-tight text-gray-800 lg:w-9/12 md:w-10/12">This is the real deal.</h2>
                        </div>
                    </div>
                </section>
                <section className="bg-indigo-700 py-12 mt-20">
                    <div className="px-4 lg:px-0">
                        <div className="mx-auto container flex flex-wrap px-2 md:px-24">
                            <div className="flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pb-10 lg:pt-10">
                                <div className="mr-5 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1={14} y1={4} x2={10} y2={20} />
                                    </svg>
                                </div>
                                <div className="md:w-10/12 lg:w-10/12 mt-1">
                                    <h4 className="text-2xl font-bold leading-tight text-white">Legit industry experience.</h4>
                                    <p className="text-lg text-white leading-normal xl:w-11/12 pt-2">This isn't job shadowing. You get the opportunity to learn and contribute meaningfully in a challenging fast-paced environment alongside seasoned tech engineers.</p>
                                </div>
                            </div>
                            <div className="flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
                                <div className="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={9} />
                                        <path d="M9 12l2 2l4 -4" />
                                    </svg>
                                </div>
                                <div className="md:w-10/12 lg:w-10/12 mt-1">
                                    <h4 className="text-2xl font-bold leading-tight text-white">Paid and credit-based tech internships.</h4>
                                    <p className="text-lg text-white leading-normal xl:w-11/12 pt-2">Beyond redefining the industry status-quo, and putting your skills to the real test, you can also receive compensation for your work.</p>
                                </div>
                            </div>
                            <div className="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pt-10 lg:pb-20">
                                <div className="mr-5 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={3} y={4} width={18} height={12} rx={1} />
                                        <line x1={7} y1={20} x2={17} y2={20} />
                                        <line x1={9} y1={16} x2={9} y2={20} />
                                        <line x1={15} y1={16} x2={15} y2={20} />
                                    </svg>
                                    
                                </div>
                                <div className="md:w-10/12 lg:w-10/12 mt-1">
                                    <h4 className="text-2xl font-bold leading-tight text-white">A community of THE smartest high schoolers.</h4>
                                    <p className="text-lg text-white leading-normal xl:w-11/12 pt-2">We're spread across 20+ countries and attract the best high school programmers from every corner of the planet.</p>
                                </div>
                            </div>
                            <div className="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20">
                                <div className="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={3} y={4} width={18} height={4} rx={2} />
                                        <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                        <line x1={10} y1={12} x2={14} y2={12} />
                                    </svg>
                                </div>
                                <div className="md:w-10/12 lg:w-10/12 mt-1">
                                    <h4 className="text-2xl font-bold leading-tight text-white">The last line on your resume you'll ever need.</h4>
                                    <p className="text-lg text-white leading-normal xl:w-11/12 pt-2">Past interns have sky-rocketed their college profiles leagues ahead of the crowd. There's truly nothing like Slingshot out there.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </Element>
        </>
    );
}

export default InternHowItWorks;