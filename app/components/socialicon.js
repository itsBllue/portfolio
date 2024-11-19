"use client;"

import React, {useState} from "react";
import Image from "next/image";
import SVGComponent from "./icons";


export default function SocialIcon(props){
    const {name, className, svg, fill} = props;
    return (
        <div className={fill} href={props.href} >
            {svg ?  
                <SVGComponent 
                    width={props.width || undefined} 
                    height={props.height || undefined} 
                    name={name}
                /> : 
                <Image 
                    className="social-icon m-2" 
                    src={process.env.cdn + `/images/${name}.svg`} 
                    alt={name+" socialicon"} 
                    width={25} 
                    height={25}
                />
            }
        </div>
    );
}