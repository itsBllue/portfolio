"use client";

import React, {useState, useEffect} from "react";



function TimelineEntry(props){
    const {title,period,subtitle} = props;

    return(
        <div className="timeline-entry-box-thing flex w-30 bg-red-800 h-52 relative">
        <div className="timeline-entry-marker rounded-full bg-primary h-6 flex w-6 col-span-4"> </div>
    <div className="timeline-entry bg-slate-800  col-span-8">
        <h1 className="timeline-entry-title">{title}</h1>
    </div>
        </div>
    )
}
export default function TimelineComponent(props) {
    const {Entries} = props;

    return(<div className="timeline-container grid-cols-2 grid gap-y-5 gap-x-0">
           {Entries.map(entry =><TimelineEntry key={entry.name +"_entry"} title={entry.title} subtitle={entry.subtitle} period={entry.period} />)} 
    </div>)
}