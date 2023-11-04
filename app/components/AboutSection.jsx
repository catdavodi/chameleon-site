"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "app/components/TabButton.jsx";

const TAB_DATA = [
    {
        title: "For Who",
        id: "for who",
        content: (
            <ul>
                <li>College Students</li>
                <li>First time job applicants</li>
                <li>Highschoolers</li>
                <li>Academics</li>
                <li>Mom of three looking to break into the tech industry</li>
                <li>Blue collar workers</li>
            </ul>
        )
    },
    {
        title: "Why",
        id: "why",
        content: (
            <ul>
                <li>We know how tedious this process is and we wanted to help.</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("why");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-48 mb-32">
                <Image src="/images/pic.png" alt="pic" width={700} height={700} mr-10 />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                    <p className="text-base lg:text-lg text-[#ADB7BE]">
                    Recruiters consistently advise tailoring your resume for each role. However, achieving 
                    this for every job is time-wasting, inefficient, and the biggest drop off for early 
                    career applicants. With Chameleon, it&apos;s easy: users drop in their resume, upload all 
                    the jobs they&apos;re applying to, and a user-friendly AI Resume Editor and organization tool. 
                    It helps tailor content with industry-specific suggestions and creates unique versions 
                    for different job positions. Chameleon also organizes and structures your numerous resumes 
                    by industry and company so you can finally keep track, find, and sync edits across any and 
                    all of your resumes. Bringing everything together, Chameleon&apos;s chrome extension allows 
                    applicants to instantly customize their resume for the role on-demand and autofill the rest of 
                    the application with their information to streamline the process. We&apos;re confident that 
                    Chameleon will transform the way early-career applicants approach their resumes, 
                    streamlining management, editing, tailoring, and submission, ensuring users always present 
                    their best colors in each application.

                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
