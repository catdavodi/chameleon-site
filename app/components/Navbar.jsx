"use client"
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    // {
    //     title: "Testimonials",
    //     path: "#testimonials",
    // },
    // {
    //     title: "Contact",
    //     path: "#contact",
    // }
];

const Navbar = () => {
    return (
        <nav className="relative">
            <Image src="/images/corner.png" alt="Corner Image" width={500} height={40} className="absolute top-20 right-0 z-0" />

            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"}>
                    <Image src="/images/logo.png" alt="Company Logo" width={150} height={40} />
                </Link>
                <div className="menu block md:w-auto z-20" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
