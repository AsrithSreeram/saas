import React from "react"


function Stat() {
    
    return (
        <>
            <div className="w-full flex justify-center items-center relative pt-24 pb-20 bg-black">
                <div className="flex flex-col lg:flex-row items-center mx-auto container relative text-white md: -mt-12 md: -mb-8">
                    <div className="flex flex-col items-center w-1/4">
                        <h1 className="text-6xl font-semibold">1.5K+</h1>
                        <h2 className="text-lg font-semibold pt-5">Student engineers</h2>
                    </div>
                    <div className="pt-10 lg:pt-0 flex flex-col items-center w-1/4">
                        <h1 className="text-6xl font-semibold">1.2K+</h1>
                        <h2 className="text-lg font-semibold pt-5">Discord members</h2>
                    </div>
                    <div className="pt-10 lg:pt-0 flex flex-col items-center w-1/4">
                        <h1 className="text-6xl font-semibold">30+</h1>
                        <h2 className="text-lg font-semibold pt-5">Startups</h2>
                    </div>
                    <div className="pt-10 lg:pt-0 flex flex-col items-center w-1/4">
                        <h1 className="text-6xl font-semibold">32+</h1>
                        <h2 className="text-lg font-semibold pt-5">Global Partners</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stat;