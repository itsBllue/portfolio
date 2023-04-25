

"use client";
import React from "react";

export default function AboutSection(props){


    return(  
    <section className='exp-content-container h-screen bg-slate-600 flex flex-col'> 
        <div className='bg-slate-400 flex-1 about-content-container h-screen'>
            <h1 className='section-title p-5 underline '>About me</h1>
                <div className='about-me-content-container'>
                This is where about me text will be placed
                </div>
        </div>
    
    </section>
    )
}