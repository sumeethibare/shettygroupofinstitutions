"use client";
import React, { useState } from 'react';
import '../skin.css';
import '../globals.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Fluidbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    // Toggle navbar
    const toggleNav = () => {
        setNavOpen(!navOpen);
        const navHeight = navOpen ? "0%" : "100%";
        document.getElementById("myNav").style.height = navHeight;
    }

    return (
        <>
            {/* Navbar */}
            <div id="myNav" className="overlay no-scrollbar">
                <div className="overlayContent">
                    <div className='flex flex-col max-h-screen no-scrollbar bg-white' onClick={toggleNav}>
                        {/* Top content */}
                        <div className='overflow-auto lg:overflow-hidden no-scrollbar'>
                            <div className='flex lg:flex-row flex-col border-t-2 divide-x-2 divide-zinc-400 h-screen'>
                                <div className='flex flex-col lg:space-y-5 space-y-2 px-6 lg:p-14 p-8 h-max lg:w-3/12'>
                                    <p className='text-xs lg:pb-10 tracking-widest font-bold text-zinc-950'>SECTIONS</p>
                                    <ps>About Us</ps>
                                    <ps>Management</ps>
                                    <ps>News</ps>
                                    <ps>Happenings</ps>
                                    <ps>Clubs</ps>
                                    <ps>Compass</ps>
                                    <ps>Portals</ps>
                                </div>
                                <div className='flex flex-col lg:flex-row divide-x-2 lg:w-11/12 divide-zinc-400'>
                                    <div className='flex flex-col lg:space-y-5 space-y-2 px-6 lg:w-4/12 lg:p-14 p-8'>
                                        <p className='text-xs lg:pb-10 tracking-widest font-bold text-zinc-950'>QUICK LINKS</p>
                                        <ps>Student Center</ps>
                                        <ps>Enrollment</ps>
                                        <ps>Contribute</ps>
                                        <ps>Contact</ps>
                                    </div>
                                    <div className='flex flex-col lg:space-y-5 space-y-2 px-6 lg:w-8/12 lg:p-14 p-8'>
                                        <p className='text-xs lg:pb-10 tracking-widest font-bold text-zinc-950'>SUBSIDERIES</p>
                                        <ps>Homoeopathy</ps>
                                        <ps>Ayurveda</ps>
                                        <ps>Paramedical</ps>
                                        <ps>Pharmaceutical Sciences</ps>
                                        <ps>Engineering</ps>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Bottom content */}
                        <div className='h-24 w-full lg:flex hidden lg:flex-row flex-col lg:justify-between border-t-2 border-zinc-400 divide-x-2 lg:px-5 divide-zinc-400'>
                            <div className='lg:w-3/12 lg:pr-14 py-10 flex justify-evenly'>
                                <FaFacebookF size={20} />
                                <FaInstagram size={20} />
                                <FaLinkedinIn size={20} />
                            </div>
                            <div className='lg:w-11/12 lg:px-14 lg:py-10 lg:flex hidden lg:flex-row flex-col justify-evenly lg:text-sm'>
                                <div className='font-semibold'>Shetty Group Of Institutions</div>
                                <div><a> Shabad Road, Kalaburagi, 585105</a></div>
                                <div>+91 234567890</div>
                                <div><a href='mailto:principal@sitgulbarga.org'>mail@shettygroupofinstitutions.org</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar access button */}

            <div className='float float-right right-10 top-10 z-50 sticky'>
                <button onClick={toggleNav} className="btn btn-ghost btn-lg btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-8 h-8">
                        {navOpen ?
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> :
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        }
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Fluidbar;
