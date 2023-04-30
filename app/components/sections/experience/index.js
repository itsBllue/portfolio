"use client";

import React from "react";
import TimelineComponent from "../../timeline";

export default function ExpSection(props){

    return(<section id="experience" className="bg-slate-900 text-neutral-content" >
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

        <TimelineComponent Entries={[{title:"Computer Networks", subtitle:"Middlesex University", period:"2014-2016"},{title:"Computer Networks 2   ", subtitle:"Middlesex University", period:"2014-2016"}, {title:"2Computer Networks", subtitle:"Middlesex University", period:"2014-2016"}]} />
    </section>)
}