"use client;"

import React, {useState} from "react";
import Image from "next/image";
import SVGComponent from "./icons";


export default function SocialIcon(props){
    const {name, className, svg,href,fill} = props;
    return(<div  className={className} >
        <a href={href ? href : ""} target="_blank" className={fill}>
        {svg ?  
              <SVGComponent width={props.width || undefined} height={props.height || undefined} name={name}/> : 
        <Image className="social-icon m-2" src={process.env.cdn + `/images/${name}.svg`} alt={name+" socialicon"} width={25} height={25}/>
            }
            </a>
        </div>)
}