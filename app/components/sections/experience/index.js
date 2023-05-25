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
    title:"Developer Associate",
    subtitle:"Amazon Web Services",
    period:"2023"
}]

const profexp=[
    {
    title:"Freelance Developer",
    subtitle:"Remote",
    period:"2021 - Present"
},
{
    title:"Technical Advisor",
    subtitle:"Remote, Utilitywarehouse",
    period:"2019 - Present"
},
]

export default function ExpSection(props){

    return(<section id="experience" className="bg-slate-900 text-neutral-content grid grid-cols-1 md:grid-cols-2 gap-y-" >
        <div className="education-content-container h-auto  overflow-hidden ml-8">
            <h1 className="text-3xl p-5">Edcuation</h1>
        <TimelineComponent Entries={EdcuEntries} />
        </div>
        <div className="Professional-content-container mt-5 pb-10 ml-8">
            <h1 className="text-3xl p-5 pt-0">Professional Experience</h1>
        <TimelineComponent Entries={profexp} />
        </div>
        <div className="certificate-content-container mt-5 pb-20 ml-8">
            <h1 className="text-3xl p-5">Certifications</h1>
        <TimelineComponent Entries={certs} />
        </div>
    </section>)
}