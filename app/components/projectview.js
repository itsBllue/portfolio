


"use client";
import React,{useState}  from "react";
import Image from "next/image";
export default function ProjectView(props){
    // This needs to be like a view with breadcrumbs to navigate it.
    const [currentLocation,setCurrentLocation] = useState("homepage");

    return(
        <div className="project-view-container w-11/12 ml-9 mt-8 p-5  relative">
            <div className="text-lg breadcrumbs  -top-10 absolute font-semibold">
  <ul>
    <li><a>Highlighted Projects</a></li> 
    <li><a>myUW</a></li> 
  </ul>
</div>
        <div className="project-card">
            <div className="card w-96 bg-primary shadow-xl">
  <figure><Image src="/images/react.png" alt="Shoes" width={300} height={300} /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Project title.
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">ReactJS</div>
      <div className="badge badge-outline">MongoDB</div>
    </div>
  </div>
</div>
        </div>
        </div>

    )
}