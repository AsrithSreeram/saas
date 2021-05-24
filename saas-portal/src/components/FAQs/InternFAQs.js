import React, { useState } from "react";
import {Element} from 'react-scroll'

function InternFAQs() {
    const [show, setShow] = useState(null);
    return (
        <>
         <Element name="FAQs"></Element>
            <div className="mx-auto container f-f-p px-4 xl:px-8 my-24 md: mt-8 md: -mb-12">
                <h1 className="text-center text-gray-800 text-2xl lg:text-5xl font-bold tracking-wider leading-10 md:mt-20">FAQs</h1>
                <h2 className="text-center text-gray-700 text-base lg:text-lg tracking-wide mt-5">Slingshot is too good to be true. Tell me more!</h2>
                <div className="lg:flex flex-wrap py-8 md:py-10 lg:py-14 xl:py-20 text-lg">
                    <div className="lg:w-1/2 lg:pr-6">
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">When do internships begin?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 0 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(0)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 0 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">You can find internships full-time / part-time all around the year. Sign up on our platform to find one today!</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">What kind of startups do we get to work with?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 1 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(1)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 1 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">All of our startups aim to make the world a better place by working on cutting-edge innovations. They use state-of-the-art technologies such as Artifical Intelligence, Machine Learning, Blockchain, Distributed Systems -- stuff that you'll work on :)</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">I'm international, can I still apply?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 2 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(2)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 2 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Yes. When we say we're a global platform, we truly mean it. There's no citizenship requirements. </p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">I represent a high school. I want to work with you, what do I do?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 3 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(3)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 3 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">That's awesome. We work with many schools around the globe. Please send an email to  <a style = {{color: "#0645AD"}} href="mailto: info@slingshotmentoring.com">info@slingshotmentoring.com</a> to schedule a meeting!</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-6">
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">I'm a startup and would love to hire talent!</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 4 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(4)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 4 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Head on over to <a style = {{color: "#0645AD"}} href="https://slingshotahead.com/startups">https://slingshotahead.com/startups</a></p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Who runs Slingshot?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 5 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(5)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 5 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Graduates from the top CS universities in the world who were once high schoolers and would have loved something like Slingshot in the world.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">How is Slingshot different?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 6 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(6)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 6 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Unlike other education programs that charge kids thousands of dollars and hand a certificate, at Slingshot we've flipped the bottle and changed the game. We truly respect high school talent for what it's worth. Jump on!</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">I love the mission. Can I join the team?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 7 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(7)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 7 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">100% We're always looking for motivated folks who want to change the world with us. Send an email at <a style = {{color: "#0645AD"}} href="mailto: info@slingshotmentoring.com">info@slingshotmentoring.com</a></p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InternFAQs;