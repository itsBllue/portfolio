"use client";

import React from "react";
import Image from "next/image";
import SocialIcon from "../socialicon";

export default function SidebarComponent() {
    return (
        <div className="drawer-side">
            <label htmlFor="sidebar" className="drawer-overlay"></label>
            
            <aside className="flex flex-col min-h-screen w-72 bg-secondary text-secondary-content">
                {/* Profile Section */}
                <div className="px-6 pt-8 pb-6 border-b border-secondary-content/10">
                    <div className="relative aspect-square w-48 mx-auto mb-6 overflow-hidden rounded-xl ring-4 ring-primary/20">
                        <Image 
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            src={`${process.env.cdn}/images/profile.png`}
                            fill
                            sizes="192px"
                            alt="Tanweer Baig"
                            priority
                        />
                    </div>
                    
                    <h1 className="text-2xl font-bold text-center mb-4">
                        Tanweer Baig
                    </h1>
                    
                    <div className="flex justify-center gap-6 p-3 rounded-lg bg-secondary-content/5">
                        <a href="https://www.linkedin.com/in/tkb/" target="_blank" rel="noopener noreferrer">
                        <SocialIcon 
                            name="linkedin" 
                            width={24} 
                            fill="fill-secondary-content hover:fill-primary transition-all duration-200 cursor-pointer"  
                            svg
                            className="cursor-pointer" 
                        />
                        </a>
                        <a href="https://github.com/itsBllue"  target="_blank" rel="noopener noreferrer">
                        <SocialIcon 
                            name="github" 
                            width={24} 
                            fill="fill-secondary-content hover:fill-primary transition-all duration-200 cursor-pointer" 
                            svg
                        />
                        </a>
                        <a href="https://portfolio-tanweer.s3.eu-west-2.amazonaws.com/CV+-+Tanweer+Baig.pdf"  target="_blank" rel="noopener noreferrer">
                        <SocialIcon 
                            name="resume" 
                            width={24} 
                            fill="fill-secondary-content hover:fill-primary transition-all duration-200 cursor-pointer" 
                            svg
                        />
                        </a>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-4 py-6">
                    <div className="flex flex-col gap-2">
                        {['Home', 'Projects', 'Experience'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-secondary-content/5 hover:text-primary transition-all duration-200 hover:translate-x-1"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Footer */}
                <footer className="p-4 text-sm text-center border-t border-secondary-content/10">
                    <p className="text-secondary-content/60 text-xs ">
                        Made with NextJS & TailwindCSS 
                        [<a 
                            href="https://github.com/itsBllue/portfolio" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block text-primary hover:underline ml-1"
                        >
                            Github
                        </a>    ]
                    </p>
                </footer>
            </aside>
        </div>
    );
}