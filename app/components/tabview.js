"use client";

import React,{useEffect, useState} from "react";

function Tab(props){
    const {active,title,onClick, child} = props;
    return(
        <div onClick={onClick} className={active ? "tab  tab-lg  tab-active tab-bordered" : "tab  tab-lg  tab-bordered"}> {title} </div>
        // {active && child}
    
    )
}



export default function TabView(props){
    // create x tabs with content linked by array i=x in array
    const {titles, content} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [tabList, setTabList]  = useState(undefined)



    const handleTabClick = (tabIndex)=>{
        setCurrentTab(tabIndex);
    }
    return(
        <div className="tab-view w-3/5 mb-10 m-auto bg-secondary rounded relative ">
            <h1 className='section-title  text-neutral-content ml-5 '>Tech Stack</h1>

        <div className="tabs flex flex-row justify-evenly">
            {/* {tabList} */}
            {titles.map((tab,index) => <Tab onClick={() => handleTabClick(index)} key={"d"+index} child={content[index]} active={currentTab === index} title={tab} />)}
        </div>
        <>
        {content.map((content,index)=><div key={index} className={currentTab === index ? "tab-content text-secondary-content" : "tab-content hidden"}>{content}</div>)}
        </>

        {/* <div className="content">
           <TabView content={content[currentTab]}/> 
        </div> */}
        </div>
    )

}