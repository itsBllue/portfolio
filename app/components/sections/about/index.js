

"use client";
import Image from "next/image";
import React from "react";
import './style.css';
import TechIcon from "../../cards/techicon";
import TabView from "../../tabview";


export default function AboutSection(props){

    const frontendTech = [
        {
            name:'React', img:'/images/react.png',
        },
        {
            name:'React Native', img:'/images/react.png',
        },
        {
            name:'Expo', img:'/images/react.png',
        },
        {
            name:'NextJS', img:'/images/next.png',
        },
        {
            name:'Tailwind', img:'/images/tailwind.svg',
        },
        {
            name:'Typescript', img:'/images/ts.png',
        },
        {
            name:'Javascript', img:'/images/js.png',
        }
    ]

    const backendTech = [
        {
            name:'NodeJS', img:'/images/node.png',
        },
        {
            name:'ExpressJS', img:'/images/express.png',
        },
        {
            name:'Apollo', img:'/images/express.png',
        },
        {
            name:'GraphQL', img:'/images/graphql.png',
        },
        {
            name:'MySQL', img:'/images/mongodb.svg',
        },
        {
            name:'MongoDB', img:'/images/mongodb.svg',
        }
    ]

    const otherTech = [
        {
            name:'Figma', img:'/images/graphql.png',
        },
        {
            name:'AdobeXD', img:'/images/graphql.png',
        }
    ]

    return(  
    <section className='exp-content-container bg-slate-900 '> 
        <div className='bg-slate-200 about-content-container h-1/6 p-5 mt-20 ml-8 mr-8 relative'>
            <h1 className='section-title text-neutral-content font-bold mt-5 absolute -top-12 text-2xl'>About</h1>
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
        {/* <div className='tech-stack-container  bg-slate-200 h-fit p-5 mt-20 mr-8 ml-8 relative'>
            <h1 className='section-title  text-primary '>Tech Stack</h1>
       
            <div className='tech-stack-tab tab-frontend'>
                <h3 className="tab-title font-medium text-l">
                    Frontend
                </h3>
                   
                    <div className='tech-stack-content flex flex-row  justify-start'>
                    {frontendTech.map(tech => <TechIcon key={tech.name +  "fd"} name={tech.name} icon={tech.img}/>)}
                    </div>
            </div>

            <div className='tech-stack-tab tab-backend'>
                <h3 className="tab-title">
                    Backend
                </h3>
                    <div className='tech-stack-content flex flex-row  justify-start'>
                    {backendTech.map(tech => <TechIcon key={tech.name +  "fd"} name={tech.name} icon={tech.img}/>)}
                    </div>
            </div>
            <div className='tech-stack-tab tab-other'>
            <h3 className="tab-title">
                Other Skills
            </h3>
                    <div className='tech-stack-content flex flex-row  justify-start'>
                    {otherTech.map(tech => <TechIcon key={tech.name +  "fd"} name={tech.name} icon={tech.img}/>)}
                    </div>
            </div>

        </div> */}
        <TabView titles={['Frontend', 'Backend', 'Other skills']} content={[<TechTab key="1" content={frontendTech}/>, <TechTab key="2" content={backendTech}/>, <TechTab key="3" content={otherTech}/>]}/>
    </section>
    )
}

function TechTab(props){
    const {content}  = props;
    return(
        <div className='tech-stack-content flex flex-row  justify-start'>
        {content.map(tech => <TechIcon key={tech.name +  "fd"} name={tech.name} icon={tech.img}/>)}
        </div>
    )
}