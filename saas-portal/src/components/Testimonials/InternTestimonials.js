import React, { useEffect } from "react";

import davidPic from "./assets/david.png";
import tajwarPic from "./assets/tajwar.png";
import anikaPic from "./assets/anika.png";
import aditiPic from "./assets/aditi.png";
import antonioPic from "./assets/antonio.png";
import prashilPic from "./assets/prashil.png";
import manavPic from "./assets/manav.png";
import emptyPic from "./assets/empty.png";

function InternTestimonials() {
    useEffect(() => {
        let slides = document.querySelectorAll(".slide-ana>div");
        let slideSayisi = slides.length;

        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        function goPrev() {
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        next.addEventListener("click", goNext);
        prev.addEventListener("click", goPrev);
        document.addEventListener("keydown", function (e) {
            if (e.code === "ArrowRight") {
                goNext();
            } else if (e.code === "ArrowLeft") {
                goPrev();
            }
        });
    });
    return (
        <>
            <div className="relative py-4 md:py-24 lg:py-36 bg-black">
                <div className="w-full xl:px-8 px-4 lg:flex-row flex flex-col-reverse items-center justify-between mx-auto container relative">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="slider">
                            <div className="slide-ana">
                                <div
                                    className="w-full"
                                    style={{
                                        transform: "translateX(0%)",
                                    }}
                                >
                                    <div className="w-full lg:flex relative">
                                        <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src={anikaPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt="" />
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Anika Thatavarthy</h2>
                                                    <h3 className="text-sm f-m-m ml-4 animate-pulse">17 y/o, Thomas Jefferson</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 animate-pulse">I got so much <b>ownership</b> on what I was working on - something that you don't always get. My intern project was <b>extremely personalized & catered</b> to my core skills & interests.</p>
                                        </div>
                                        <div className="lg:w-1/2 relative bg-indigo-700 rounded-md p-6 mr-6 shadow-lg">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(255,255,255,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src={tajwarPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                                <div className="flex flex-col text-white">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Tajwar Rahman</h2>
                                                    <h3 className="text-sm f-m-m ml-4 animate-pulse">16 y/o, Bronx High school</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 text-white animate-pulse">Slingshot is a <b>win-win</b> - You get to intern and learn under <b>brilliant people</b> who went to <b>top colleges</b> and <b>great companies</b>. To top it off, it's <b>100% free</b>.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                                        <div className="absolute right-0 top-0 -mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <img src={aditiPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                            <div className="flex flex-col">
                                                <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Aditi</h2>
                                                <h3 className="text-sm f-m-m ml-4 animate-pulse">16 y/o, Troy High school</h3>
                                            </div>
                                        </div>
                                        <p className="text-base f-m-m mt-3 animate-pulse">Working at Slingshot has been an <b>extremely rewarding</b> experience - I’ve learned more from my 3 months as an intern here than <b>any other program or camp</b> I’ve attended.</p>
                                    </div>
                                </div>
                                <div
                                    className="w-full"
                                    style={{
                                        transform: "translateX(100%)",
                                    }}
                                >
                                    <div className="w-full lg:flex relative">
                                        <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src={davidPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">David Chen</h2>
                                                    <h3 className="text-sm f-m-m ml-4 animate-pulse">16 y/o, Princeton High school</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 animate-pulse">Slingshot is bringing students with <b>shared passions</b> together to learn and contribute to amazing startups. It is a great place for <b>collaboration</b> and finding what you love.</p>
                                        </div>
                                        <div className="lg:w-1/2 relative bg-indigo-700 rounded-md p-6 mr-6 shadow-lg">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(255,255,255,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src={emptyPic} width={64} height={64} viewBox="0 0 32 32" className="rounded-full" alt=""/>
                                                <div className="flex flex-col text-white">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Anujay Surana</h2>
                                                    <h3 className="text-sm f-m-m ml-4 animate-pulse">16 y/o, Gems Modern, Dubai</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 text-white animate-pulse">The Slingshot community is amazingly inclusive and growth oriented. I certainly fit in instantly. Beyond the programming experience, Slingshot helped me grow as a team player!</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                                        <div className="absolute right-0 top-0 -mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <img src={antonioPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                            <div className="flex flex-col">
                                                <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Antonio Scott</h2>
                                                <h3 className="text-sm f-m-m ml-4 animate-pulse">17 y/o, GSMST</h3>
                                            </div>
                                        </div>
                                        <p className="text-base f-m-m mt-3 animate-pulse">At Slingshot, I collaborated with a group of like-minded peers who were all extremely passionate about the startup we were interning at. Slingshot is exactly what I was always waiting for!</p>
                                    </div>
                                </div>
                                <div
                                    className="w-full"
                                    style={{
                                        transform: "translateX(200%)",
                                    }}
                                >
                                    <div className="w-full lg:flex relative">
                                        <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src={manavPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Manav Sankaran</h2>
                                                    <h3 className="text-sm f-m-m ml-4 animate-pulse">15 y/o, Gems Modern, Dubai</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 animate-pulse">My work at Slingshot has allowed me to explore domains in tech I hadn't even dreamt of. It was a true industry experience that allowed me to really discover my true potential as a software engineer.</p>
                                        </div>
                                        <div className="lg:w-1/2 relative bg-indigo-700 rounded-md p-6 mr-6 shadow-lg">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(255,255,255,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center text-white">
                                                <img src={emptyPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Shivang Patel</h2>
                                                    <h3 className="text-sm f-m-m ml-4 animate-pulse">17 y/o, John P. Stevens High</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 text-white animate-pulse">I'm really out of words here. Great mentorship. Great experience. Great community. Slingshot is unlike anything out there. If you're not here, I dunno what you're doing.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                                        <div className="absolute right-0 top-0 -mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <img src={prashilPic} width={64} height={64} viewBox="0 0 64 64" className="rounded-full" alt=""/>
                                            <div className="flex flex-col">
                                                <h2 className="text-base f-m-m ml-4 font-semibold animate-pulse">Prashil A.</h2>
                                                <h3 className="text-sm f-m-m ml-4 animate-pulse">17 y/o, Gems United, Dubai</h3>
                                            </div>
                                        </div>
                                        <p className="text-base f-m-m mt-3 animate-pulse">Applying to Slingshot was a no-brainer. At Slingshot, I've been able to develop industry tools for real companies to use. Such a professional experience, so early on.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-24 xl:pl-48">
                        <h1 className="lg:text-5xl text-2xl f-m-w text-white font-bold">We can't stop hearing...</h1>
                        <p className="lg:text-xl text-lg f-m-m leading-loose mt-3 mb-8 text-white">"Slingshot is what we've always been waiting for." Teachers, students, schools can't stop telling us how much Slingshot means to them!</p>
                        <div className="flex items-center">
                            <div id="prev" className="cursor-pointer  ml-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition duration-150 ease-in-out hover:bg-indigo-600 rounded-full border border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <line x1={5} y1={12} x2={9} y2={16} />
                                    <line x1={5} y1={12} x2={9} y2={8} />
                                </svg>
                            </div>
                            <div id="next" className="cursor-pointer ml-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition duration-150 ease-in-out hover:bg-indigo-600 rounded-full border border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <line x1={15} y1={16} x2={19} y2={12} />
                                    <line x1={15} y1={8} x2={19} y2={12} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <style>
                {`
       
        .slider {
            width: 100%;
            height: 550px;
            padding-top: 14px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
        }
        .slide-ana {
            height: 100%;
        }
        .slide-ana>div {
            width: 100%;
            height: 100%;
            position: absolute;
            transition: all 1s;
        }
        @media (min-width: 1230px) and (max-width: 1530px) {
            .slider .left {
                margin-left: 40% !important;
            }
            .slider .right {
                margin-left: 50% !important;
            }
            .slider {
                height: 800px;
            }
        }
        @media (min-width: 1024px) and (max-width: 1230px) {
            .slider .left {
                margin-left: 40% !important;
            }
            .slider .right {
                margin-left: 50% !important;
            }
            .slider {
                height: 800px;
            }
        }
        @media (min-width: 360px) and (max-width: 1024px) {
            .slider .left {
                margin-left: 40% !important;
            }
            .slider .right {
                margin-left: 50% !important;
            }
            .slider {
                height: 820px;
            }
        }
        @media (min-width: 100px) and (max-width: 360px) {
            .slider .left {
                margin-left: 40% !important;
            }
            .slider .right {
                margin-left: 50% !important;
            }
            .slider {
                height: 900px;
            }
        }
        
        `}
            </style>
        </>
    );
}

export default InternTestimonials;