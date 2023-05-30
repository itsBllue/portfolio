"use client";

import React from "react";

import ProjectView from "../../projectview";
export default function projectsection(props){

    

    return(<section id="projects" className='bg-slate-900 text-neutral-content lg:w-full  max-h-fit'>
        <div className='project-container h-fit p-5 pl-0 mt-20 mr-8 ml-8'>
        <div className=" bg-slate-400 w-fit p-2 pl-0 opacity-70 relative">
        <h1 className='section-title' style={{top:'-3.5rem'}}>Projects</h1>
            <p className="font-medium text-black pl-2">Click on a project to learn more!</p></div>
        </div>

            <ProjectView project={props.project}/>
    </section>)
}