
"use client";
import React from "react";
import Image from "next/image";
import SVGComponent from "../icons";

const ImagePaths = {
        React: '/images/react.png',
        Native: '/images/reactnative.svg',
        Expo: '/images/expo.svg', 
        NextJS: '/images/next.png',
        Tailwind: '/images/tailwind.svg',
        Typescript: '/images/ts.png',
        Javascript: '/images/js.png',
        NodeJS: '/images/node.png',
        ExpressJS: '/images/express.png',
        Apollo:'/images/apollo.svg',
        GraphQL: '/images/graphql.png',
        MySQL: '/images/mysql.svg',  
        MongoDB: '/images/mongodb.svg',
}
export default function techicon(props){
    const {name,icon,svg,img,svgname,width,height} =  props;
    console.log('tecxxh name',icon, ImagePaths[icon] ? ImagePaths[icon] : "/images/reactnative.svg")
    return(
        <div className="flex flex-col justify-evenly  p-5 text-center ml-0 m-auto md:m-0" >
            {svg ? <SVGComponent name={svgname} width={45} height={45} /> : img ? <Image  className="m-auto p-1 mb-2" src={ ImagePaths[icon] ? process.env.cdn + ImagePaths[icon] : process.env.cdn + "/images/reactnative.svg"} alt={name} width={width || 45} height={height || 45} /> :
            <Image className="m-auto p-1 mb-2"  src={process.env.cdn +  icon} alt={name} width={width || 45} height={height || 45} /> }
            <p  className="text-xl font-medium" > {name}</p> 
            </div>
        )
}