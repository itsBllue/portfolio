"use client;"

import React, {useState} from "react";
import Image from "next/image";
import { DiscordIcon, GithubIcon, LinkedInIcon } from "./icons";

const Icons = {
    "github":<GithubIcon/>,
    "linkedin": <LinkedInIcon/>,
    "discord":<DiscordIcon/>
}
export default function SocialIcon(props){
    const {name, className, svg} = props;
console.log("this is ", svg)
    return(<div className={className}>
        {svg ?  
             Icons[name] : 
        <Image className="social-icon m-2" src={process.env.cdn + `/images/${name}.svg`} alt={name+" socialicon"} width={25} height={25}/>
            }
        </div>)
}