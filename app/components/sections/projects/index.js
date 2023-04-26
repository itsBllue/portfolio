"use client";

import React from "react";

import ProjectView from "../../projectview";
export default function projectsection(props){

    

    return(<section className='bg-slate-600'>
        <div className='tech-stack-container h-fit p-5 mt-20 mr-8 ml-8'>
        <div className=" bg-slate-400 w-fit p-2 opacity-70 relative">
        <h1 className='section-title' style={{top:'-3.5rem'}}>Projects</h1>
            <p className="font-medium">Click on the project for more information.</p></div>
        </div>

        <div className="">
            <ProjectView/>
        </div>
    </section>)
}