
"use client";


import React, { useState } from "react";
import Image from "next/image";


import SocialIcon from "../socialicon";
import DrawerIcon from "../icons/DrawerIcon";

export default function SidebarComponent(props) {
    console.log(process.env.cdn);
    return (
        <div className="drawer-side  bg-secondary ">
            {/* <div className=" drawer-side flex-none drawer-contianer w-60 bg-black text-white'"> */}
            {/* <div className="drawer-toggle"></div> */}
            <div className='drawer-header bg-secondary h-fit overflow-hidden'>
                <Image className="m-auto  mt-5 rounded-lg overflow-hidden" src={process.env.cdn + "/images/profile.png"} width={200} height={200} alt="profile image" />
                <h1 className="text-center m-5 text-lg font-bold text-neutral-content ">Tanweer Baig</h1>
                <div className="social-links w-2/5 m-auto rounded flex flex-row bg-slate-400 justify-center pt-1 pb-1">
                        <SocialIcon href="https://www.linkedin.com/in/tkb/" name="linkedin" width={20} svg fill="fill-primary-content hover:fill-black transition-all " className="m-auto cursor-pointer" />
                        <SocialIcon href="https://github.com/itsBllue" name="github" width={20} svg fill="fill-primary-content hover:fill-black transition-all" className=" m-auto cursor-pointer" />
                        <SocialIcon href="https://portfolio-tanweer.s3.eu-west-2.amazonaws.com/CV+-+Tanweer+Baig.pdf" name="resume" width={20} svg fill="fill-primary-content hover:fill-black transition-all" className="m-auto cursor-pointer" />
                </div>
            </div>
            <div className="sidebar-menu m-0">
                <a className="sidebar-btn" href="#home">Home</a>
                <a className="sidebar-btn" href="#projects">Projects</a>
                <a className="sidebar-btn" href="#experience">Experience</a>
            </div>
            {/* <ul class="menu p-10 w-80 bg-secondary text-secondary-content row-span-6"> */}
            {/* <ul class="sidebar-menu w-10 overflow-hidden p-10 bg-secondary text-secondary-content row-span-6 ">
            <li><a href="#home" className="text-xl font-semibold  hover-bordered" >Home</a></li>
            <li><a href="#projects" className="text-xl font-semibold hover-bordered">Projects</a></li>
            <li><a href="#experience" className="text-xl font-semibold  hover-bordered">Experience</a></li>
        </ul> */}
            <h1 className="bg-transparent m-auto w-10/12 row-start-7 row-end-7 sm:text-center">Made with NextJS & TailwindCSS [<span href="#" className="underline text-blue-500">Github</span>]</h1>
            <label for="sidebar" className="drawer-overlay lg:hidden md:visible btn btn-primary drawer-button text-white w-fit mt-1">  <DrawerIcon /></label>

        </div>
    )
}