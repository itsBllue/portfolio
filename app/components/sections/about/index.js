

"use client";
import React from "react";



export default function AboutSection(props){

    const frontendTech = [
        {
            name:'React', img:'',
        },
        {
            name:'React Native', img:'',
        },
        {
            name:'Expo', img:'',
        },
        {
            name:'NextJS', img:'',
        },
        {
            name:'Tailwind', img:'',
        },
        {
            name:'Typescript', img:'',
        },
        {
            name:'Javascript', img:'',
        }
    ]

    const backendTech = [
        {
            name:'NodeJS', img:'',
        },
        {
            name:'ExpressJS', img:'',
        },
        {
            name:'Apollo', img:'',
        },
        {
            name:'GraphQL', img:'',
        },
        {
            name:'MySQL', img:'',
        },
        {
            name:'MongoDB', img:'',
        }
    ]

    const otherTech = [
        {
            name:'Figma', img:'',
        },
        {
            name:'AdobeXD', img:'',
        }
    ]

    return(  
    <section className='exp-content-container h-screen bg-white flex flex-col'> 
        <div className='bg-slate-200 about-content-container h-1/6 p-5 mt-20 ml-8 mr-8 relative'>
            <h1 className='section-title font-bold mt-5 absolute -top-12 text-2xl'>About</h1>
                <div className='about-me-content-container'>
                    <p className="w-full font-medium pl-2 ">
                Hey there! I'm a software developer with a passion for creativity and continuous growth. 
                I'm always on the lookout for new technologies and ways to improve my skills, and I love learning from others' feedback. 
                My experience with different development cycles and stacks has helped me become a quick learner and adaptable problem solver.
                I'm a team player and love working with others to create innovative solutions. In fact, 
                I'm a natural leader and enjoy guiding and motivating my teammates towards success. Let's create something amazing together!
                 </p>

                </div>
        </div>
        <div className='tech-stack-container  bg-slate-200 h-2/5 p-5 mt-20 mr-8 ml-8 relative'>
            <h1 className='section-title font-bold mt-5  absolute -top-12 text-2xl'>Tech Stack</h1>
       
            <div className='tech-stack-tab tab-frontend'>
                <h3 className="tab-title">
                    Frontend
                </h3>
                   
                    <div className='tech-stack-content flex flex-row  justify-evenly'>
                    {frontendTech.map(tech => {return<p  key={tech.name + 'fnd'}> {tech.name}</p>})}
                    </div>
            </div>

            <div className='tech-stack-tab tab-backend'>
                <h3 className="tab-title">
                    Backend
                </h3>
                    <div className='tech-stack-content flex flex-row  justify-evenly'>
                    {backendTech.map(tech => {return<p  key={tech.name + 'fnd'}> {tech.name}</p>})}
                    </div>
            </div>
            <div className='tech-stack-tab tab-other'>
            <h3 className="tab-title">
                Other Skills
            </h3>
                    <div className='tech-stack-content flex flex-row  justify-evenly'>
                    {otherTech.map(tech => {return<p  key={tech.name + 'fnd'}> {tech.name}</p>})}
                    </div>
            </div>

        </div>
    </section>
    )
}