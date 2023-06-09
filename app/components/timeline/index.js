"use client";

import React, { useState, useEffect,useRef } from "react";



function TimelineEntry(props) {
    const { title, period, subtitle } = props;
    const [hoverOnEntry, setHoverOnEntry] = useState(false);
    const htmlMarker = useRef()
    const htmlEntryContainer = useRef()
    const onMouseEnter = (eventForMouseEntry) => {
        const htmlMarkerBoundary  = htmlMarker.current.getBoundingClientRect();
        const htmlEntryContainerBoundary = htmlEntryContainer.current.getBoundingClientRect();

        if(eventForMouseEntry.clientX >= htmlEntryContainerBoundary.left && eventForMouseEntry.clientY <= htmlEntryContainerBoundary.right)
            setHoverOnEntry(true)
        if(eventForMouseEntry.clientX >= htmlMarkerBoundary.left && eventForMouseEntry.clientY <= htmlMarkerBoundary.right)
            setHoverOnEntry(true)


    }

    const onMouseLeave = (eventForMouseExit) => {
        setHoverOnEntry(false)
    }
    return (
        <>
            <div ref={ref=>htmlMarker.current = ref} className={`timeline-entry-marker rounded-full h-6 flex w-6 ${hoverOnEntry && "bg-primary-focus before:bg-primary-focus" || "bg-accent"}`}> </div>
            <div>

                <div 
                ref={ref=>htmlEntryContainer.current = ref}
                className={`timeline-entry-box-thing flex w-fit h-25 relative lg:min-w-[450px] ${hoverOnEntry && "bg-primary-focus/30" }`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <div className={`timeline-entry ${hoverOnEntry && "k" }`}>
                        <h1 className="timeline-entry-title text-2xl ml-3 font-bold">{title}</h1>
                        <h1 className="timeline-entry-period text-sm bg-accent w-fit p-2 ml-3 mt-3">{period}</h1>
                        <h1 className="timeline-entry-location text-sm italic ml-3 mt-3">{subtitle}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

function TimelineEntr1y(props) {
    const { title, period, subtitle } = props;

    return (
        <div className="timeline-entry-box-thing flex w-fit h-25 relative hover:bg-red-800">
            <div className="timeline-entry ">
                <h1 className="timeline-entry-title text-2xl ml-3 font-bold">{title}</h1>
                <h1 className="timeline-entry-period text-sm bg-accent w-fit p-2 ml-3 mt-3">{period}</h1>
                <h1 className="timeline-entry-location text-sm italic ml-3 mt-3">{subtitle}</h1>
            </div>
        </div>
    )
}



export default function TimelineComponent(props) {
    const { Entries } = props;

    return (<div className="timeline-container  grid-cols-[30px_minmax(900px,_1fr)] grid gap-y-5 gap-x-0 relative ml-4">
        {Entries.map(entry => {
            return (
                <TimelineEntry key={entry.name + "_entry"} title={entry.title} subtitle={entry.subtitle} period={entry.period} />
            )
        }
        )}
    </div>)
}