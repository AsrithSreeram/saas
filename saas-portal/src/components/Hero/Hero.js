import React from "react";

// routes
import * as routes from "../../routes"

// assets
import heroImg from "./assets/boys.jpg"
import cmuLogo from "./assets/cmu.png"
import stanfordLogo from "./assets/stanford.png"
import mitLogo from "./assets/mit.png"
import yCombinatorLogo from "./assets/ycombinator.png"



function Hero() {
    return (
        <>
            <div className="bg-gray-100 pb-12">
                <section className="mx-auto container py-20 lg:px-8 xl:px-8">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                        <div className="flex flex-col lg:w-8/12 md:w-8/12 px-4 lg:px-0 justify-center">
                            <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-800">The world's premier platform for high school engineers, hackers &amp; hustlers</h1>
                            <p className="lg:text-2xl text-gray-600 font-light leading-relaxed pt-6 mt-4 w-5/6">Are you itching to make real-world impact at a cutting-edge startup? At Slingshot, we scout and identify the world's smartest high school tech talent who want to change the industry status quo.</p>
                            <div className="mt-12 flex flex-wrap">
                                <div className="mr-6 mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                                    <a href="https://slingshotmentoring.typeform.com/to/WGNBeJRv"><button className="focus:outline-none bg-yellow-500 transition duration-150 ease-in-out hover:bg-yellow-400 rounded text-white px-14 py-4 text-xl">Get started</button></a>
                                </div>
                                <div className="mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                                    <a href={routes.DISCORD_INVITE_LINK}><button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-yellow-600 text-yellow-600 px-16 py-4 text-xl">Join our discord</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 h-64 md:h-auto md:w-1/2 relative lg:mt-0 pl-6 sm:pl-20 pt-10 flex justify-end sm:block">
                            <div className="-mb-32 absolute left-10 w-5/6 h-5/6">
                                <img className="inset-0 absolute object-cover object-center z-10 shadow-md w-11/12 h-full transition duration-500 transform hover:-translate-y-1 hover:scale-110" src={heroImg} alt="Coffee" />
                            </div>
                            <div className="absolute h-5/6 w-5/6 top-0 pl-6 left-0 flex flex-col items-start">
                                <svg width={285} height={462} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#667EEA" fillRule="evenodd">
                                        <g>
                                            <rect width="6.002" height="7.005" rx="3.001" />
                                            <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                        </g>
                                        <g transform="translate(0 216)">
                                            <rect width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                        </g>
                                        <g transform="translate(0 432)">
                                            <rect width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="155.008" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="186.01" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="217.012" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="248.013" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                            <rect x="279.015" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <div className="mx-auto container">
                <div className="w-full flex flex-col items-center justify-center px-4">
                    <div className="flex lg:flex-row flex-col items-center justify-between py-4 border-brands lg:w-11/12 f-f-l">
                        <div className="flex lg:flex-row flex-col items-center justify-between w-full">
                            <div className="pb-4 lg:pb-0">
                                <img src={cmuLogo} width={144} height={144} viewBox="0 0 144 144" />
                            </div>
                            <div className="pb-4 lg:pb-0">
                                <img src={stanfordLogo} width={280} height={280} viewBox="0 0 280 280" />
                            </div>
                            <div className="pb-8 lg:pb-0">
                                <img src={mitLogo} width={144} height={144} viewBox="0 0 144 96" />
                            </div>
                            <div className="pb-4 lg:pb-0">
                                <img src={yCombinatorLogo} width={144} height={144} viewBox="0 0 144 144" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container mx-auto pt-8 pb-8">
                <div className="px-15 flex flex-wrap rounded">
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 transition duration-500 transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center">
                    <a href="https://www.cmu.edu/"><img src={cmuLogo} width={144} height={144} viewBox="0 0 144 144" alt=""/></a>
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 transition duration-500 transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center">
                    <a href="https://www.stanford.edu/"><img src={stanfordLogo} width={280} height={280} viewBox="0 0 280 280" alt=""/></a>
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 transition duration-500 transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center">
                    <a href="https://www.mit.edu/"><img src={mitLogo} width={144} height={144} viewBox="0 0 144 96" alt=""/></a>
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 transition duration-500 transform hover:-translate-y-1 hover:scale-110 flex justify-center items-center">
                    <a href="https://www.ycombinator.com/"><img src={yCombinatorLogo} width={144} height={144} viewBox="0 0 144 144" alt=""/></a>
                    </div>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-400 font-normal xl:w-10/12 xl:mx-auto mt-8 md: ml-3 md: mr-3">Our startup partners come from the top startup ecosystems in the world.</p>
            </div>
        </>
    );
}

export default Hero;