
"use client";
import React from "react";
import Image from "next/image";

export default function techicon(props){
    const {name,icon} =  props;

    return(
        <div className="flex flex-col justify-evenly  p-5 text-center ml-0 m-auto" >
            <Image className="m-auto p-1 mb-2"  src={icon} alt={name} width={45} height={45} /> 
            <p  className="text-xl font-medium" > {name}</p> 
            </div>
        )
}