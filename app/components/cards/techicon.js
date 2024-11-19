"use client";
import React from "react";
import Image from "next/image";
import SVGComponent from "../icons";
import { CDN_URL } from "@/app/config";
import { motion } from "framer-motion";

const ImagePaths = {
    React: 'react.png',
    Native: 'reactnative.svg',
    ReactNative: 'reactnative.svg',
    Expo: 'expo.svg',
    NextJS: 'next.png',
    Tailwind: 'tailwind.svg',
    Typescript: 'ts.png',
    Javascript: 'js.png',
    NodeJS: 'node.png',
    ExpressJS: 'express.png',
    Apollo: 'apollo.svg',
    GraphQL: 'graphql.png',
    MySQL: 'mysql.svg',
    MongoDB: 'mongodb.svg',
    Figma: 'figma.svg',
    AdobeXD: 'xd.svg',
    Cloudformation: 'xd.svg',
    Python: 'python.svg'
};

export default function TechIcon(props) {
    const { name, icon, svg, img, svgname, width, height } = props;

    const getImagePath = (iconName) => {
        const imagePath = ImagePaths[iconName];
        if (!imagePath) {
            console.warn(`No image path found for icon: ${iconName}`);
            return null;
        }
        return `${CDN_URL}/images/${imagePath}`;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <div className="relative p-2 rounded-lg backdrop-blur-sm border border-white/5 bg-secondary hover:bg-secondary-focus/80 transition-all duration-300 group">
                <div className="flex items-center justify-center">
                    <div className="relative w-8 h-8">
                        {svg ? (
                            <SVGComponent 
                                name={svgname} 
                                width={32} 
                                height={32} 
                            />
                        ) : img ? (
                            <Image 
                                src={img} 
                                alt={name || 'tech icon'} 
                                width={32} 
                                height={32}
                                className="w-full h-full object-contain"
                                draggable={false}
                            />
                        ) : (
                            <Image
                                src={getImagePath(name) || '/placeholder-icon.png'}
                                alt={name || 'tech icon'}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                                draggable={false}
                            />
                        )}
                    </div>
                    {name && (
                        <div className="absolute left-0 top-0 w-8 h-8 group-hover:w-full group-hover:h-full flex items-center justify-start group-hover:justify-between px-2 bg-secondary/95 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg overflow-hidden">
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                {svg ? (
                                    <SVGComponent 
                                        name={svgname} 
                                        width={32} 
                                        height={32} 
                                    />
                                ) : img ? (
                                    <Image 
                                        src={img} 
                                        alt={name || 'tech icon'} 
                                        width={32} 
                                        height={32}
                                        className="w-full h-full object-contain"
                                        draggable={false}
                                    />
                                ) : (
                                    <Image
                                        src={getImagePath(name) || '/placeholder-icon.png'}
                                        alt={name || 'tech icon'}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-contain"
                                        draggable={false}
                                    />
                                )}
                            </div>
                            <span className="text-sm font-medium text-white/90 ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{name}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}