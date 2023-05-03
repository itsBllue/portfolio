
"use client";
import React from "react";
import Image from "next/image";
import SVGComponent from "../icons";

export default function techicon(props){
    const {name,icon,svg,svgname,width,height} =  props;

    return(
        <div className="flex flex-col justify-evenly  p-5 text-center ml-0 m-auto md:m-0" >
            {svg ? <SVGComponent name={svgname} width={45} height={45} /> : 
            <Image className="m-auto p-1 mb-2"  src={process.env.cdn +  icon} alt={name} width={width || 45} height={height || 45} /> }
            <p  className="text-xl font-medium" > {name}</p> 
            </div>
        )
}