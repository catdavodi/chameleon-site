"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../components/Navbar';
import Link from "next/link";


const HeroSection = () => {
    return (
    <section>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-8 place-self-left xm:text-left">
                <span className="text-white mb-4 text-9xl sm:text-9xl lg:text-5xl font-extrabold">Instantly</span>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-400 font-extrabold">
                <TypeAnimation
                sequence={[
                'tailor', 1000,
                'transform', 1000,
                'perfect', 1000,
                'edit', 1000,
                'collaborate on', 1000,
                'get personalized feedback on', 1000,
                'score', 1000
                 ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '3em', display: 'inline-block' }}
                repeat={Infinity}
                /></div> <h1 className="text-white mb-4 text-9xl sm:text-9xl lg:text-5xl font-extrabold">your resumes.</h1>
            <div className="flex">
                        <div className="w-1/2 mr-8 mt-3 mb-3">
                            <h2 className="font-semibold text-[1.2em] text-[#FFFFFF]">
                                Optimize
                            </h2>
                            <p className="text-[16px] leading-[20px] text-[#ADB7BE] font-normal">
                                Analyze job descriptions and reword your resume to match the role&apos;s requirements. Emphasize your most relevant skills and experience so you pass screening every time.
                            </p>
                        </div>
                        <div className="w-1/2 mt-3 mb-3">
                            <h2 className="font-semibold text-[1.2em] text-[#FFFFFF]">
                                Organize
                            </h2>
                            <p className="text-[16px] leading-[20px] text-[#ADB7BE] font-normal">
                                View all resume versions in one sleek library with intuitive naming and version history. Make tweaks globally for structured workflow and total resume management from one control center.
                            </p>
                        </div>
                    </div>
            <div>
                <Link
                href="https://2i5n5xtpj4i.typeform.com/to/Q8BwLheD"className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 via-green-500 to-green-800 hover:bg-white text-slate-800">Join the waitlist</Link>
                <button className="px-1 py-3 rounded-full bg-gradient-to-br from-green-800 via-green-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                    <span className="black bg-[#091536] hover:bg-slate-800 rounded-full px-6 py-2.5">Watch a demo</span>
                    </button>
            </div>
         </div>
         <div className="col-span-5">
        {/* go to time 12:10 in video and add that image component to about us section */}
         </div>
        </div>
    </section>
    );
};

export default HeroSection;