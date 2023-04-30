
"use client";


import React from "react";
import Image from "next/image";

function SocialIcon(props){
    const {name} = props;

    return(<div>
        <Image className="social-icon m-2" src={process.env.cdn + `/images/${name}.svg`} alt={name+" socialicon"} width={25} height={25}/>
    </div>)
}

export default function SidebarComponent(props){
    console.log(process.env.cdn);
    return(
       <div className="drawer-side  bg-secondary">
       {/* <div className=" drawer-side flex-none drawer-contianer w-60 bg-black text-white'"> */}
        
        <label for="my-drawer-2" class="drawer-overlay h-1"> side bar here labl</label> 
        <div className='drawer-header bg-secondary  pb-5'>
            <Image  className="m-auto  mt-5 rounded-lg overflow-hidden" src={process.env.cdn + "/images/profile.png"} width={200} height={200} alt="profile image" />
            <h1 className="text-center m-5 text-lg font-bold">Tanweer Baig</h1>
            <div className="social-links w-2/5 m-auto rounded flex flex-row bg-slate-400 justify-center">
                <SocialIcon name="linkedin"/>
                <SocialIcon name="github"/>
            </div>
        </div>
        <ul class="menu p-10 w-80 bg-secondary text-secondary-content row-span-6">
            <li><a href="#home" className="text-xl font-semibold" >Home</a></li>
            <li><a href="#projects" className="text-xl font-semibold">Projects</a></li>
            <li><a href="#experience" className="text-xl font-semibold">Experience</a></li>
        </ul>
        <h1 className="bg-transparent m-auto">Made with NextJS & TailwindCSS [<span href="#" className="underline text-blue-500">Github</span>]</h1>
        </div>
    )
}