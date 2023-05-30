"use client";

import React, {useState, useEffect} from "react";



function TimelineEntry(props){
    const {title,period,subtitle} = props;

    return(
        <div className="timeline-entry-box-thing flex w-fit h-25 relative">
    <div className="timeline-entry ">
        <h1 className="timeline-entry-title text-2xl ml-3 font-bold">{title}</h1>
        <h1 className="timeline-entry-period text-sm bg-accent w-fit p-2 ml-3 mt-3">{period}</h1>
        <h1 className="timeline-entry-location text-sm italic ml-3 mt-3">{subtitle}</h1>
    </div>
        </div>
    )
}
export default function TimelineComponent(props) {
    const {Entries} = props;

    return(<div className="timeline-container  grid-cols-[30px_minmax(900px,_1fr)] grid gap-y-5 gap-x-0 relative ml-4">
           {Entries.map(entry =>{
            return(
                <>
            <div key={entry.name +"_entry"} className="timeline-entry-marker rounded-full bg-primary h-6 flex w-6 "> </div>
           <TimelineEntry  title={entry.title} subtitle={entry.subtitle} period={entry.period} />
                    </>
            )
           }
           )} 
    </div>)
}