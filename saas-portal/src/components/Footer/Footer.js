import React from "react";

function Footer() {
    return (
        <div className="pt-16">
            <div className="w-full bg-gray-100 py-12">
                <div className="container mx-auto xl:flex lg:flex text-center">
                    <div className="xl:w-3/6 lg:w-3/6 sm:w-full text-center xl:text-left mb-6 xl:mb-0 lg:mb-0 justify-between">
                        <p className="text-gray-800">{new Date().getFullYear()} SLINGSHOT AHEAD INC. All Rights Reserved</p>
                    </div>
                    <a className="w-full text-right" href="mailto:info@slingshotmentoring.com" style = {{color: "#0645AD"}} >info@slingshotmentoring.com</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;