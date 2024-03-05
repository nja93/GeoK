import React from "react";

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-gray-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg
                            xmlns="url(/gemstone.jpg)"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">GeoK</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">

                        <a href="/about" className="mr-5 hover:text-gray-900">About</a>
                        <a href="/learn-more" className="mr-5 hover:text-gray-900">Home</a>
                        <a href="/search" className="mr-5 hover:text-gray-900">Search Professionals</a>
                    </nav>

                </div>
            </header>
        </>
    );
};

export default Navbar;