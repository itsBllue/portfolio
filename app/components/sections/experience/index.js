"use client";

import React from "react";
import TimelineComponent from "../../timeline";

const EdcuEntries = [
    {title:"Computer Networks",
    subtitle:"Middlesex University",
    period:"2014 - 2016"
    },
    {title:"Computing, Engineering & Media Studies",
    subtitle:"SixthForm - London Academy",
    period:"2014 - 2016"
    },
    {title:"ICT , Engineering & Core GCSEs",
    subtitle:"London Academy",
    period:"2014 - 2016"
    }
]

const certs =[{
    title:"Developer Assosiate",
    subtitle:"Amazon Web Services",
    period:"2023"
}]

const profexp=[
    {
    title:"Freelance Developer",
    subtitle:"FiveM",
    period:"2021 - Present"
},
{
    title:"Technical Advisor",
    subtitle:"Utilitywarehouse",
    period:"2019 - Present"
},
]

export default function ExpSection(props){

    return(<section id="experience" className="bg-slate-900 text-neutral-content grid grid-cols-2 gap-y-0" >
        {/* <div className="education-container h-fit mt-5 mr-auto ml-10 bg-primary text-primary-content">
            <h1 className="exp-title text-4xl font-bold">Edcuation</h1>
            <div className="education-content-container">
                <div className="education-entry">
                    <h1>Computer networkks</h1>
                    <div className="education-period">
                        2014-2016
                    </div>
                    <h1 className="location">Middlesex University</h1>
                </div>
            </div>
        </div>
        <div className="certification-container">
            <h1>Certifications</h1>
            <div className="certification-content-container">
                <div className="certification-entry">
                    <h1>Computer networkks</h1>
                    <div className="certification\-period">
                        2014-2016
                    </div>
                    <h1 className="location">Middlesex University</h1>
                </div>
            </div>
        </div> */}
        <div className="education-content-container ">
            <h1 className="text-4xl p-5">Edcuation</h1>
        <TimelineComponent Entries={EdcuEntries} />
        </div>
        <div className="Professional-content-container mt-5">
            <h1 className="text-5xl p-5">Professional Experience</h1>
        <TimelineComponent Entries={profexp} />
        </div>
        <div className="certificate-content-container mt-5">
            <h1 className="text-5xl p-5">Certifications</h1>
        <TimelineComponent Entries={certs} />
        </div>
    </section>)
}