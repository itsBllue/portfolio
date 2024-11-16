"use client";

import React from "react";
import ProjectView from "../../projectview";
import { motion } from "framer-motion";

export default function projectsection(props) {
    return (
        <section id="projects" className="bg-slate-900 text-neutral-content w-full min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl blur-lg opacity-50" />
                    <div className="relative bg-secondary/80 backdrop-blur-sm shadow-xl rounded-xl border border-white/5 p-4">
                        <h1 className="text-2xl font-bold text-primary mb-2">Projects</h1>
                        <p className="text-secondary-content/70">Click on a project to learn more!</p>
                    </div>
                </motion.div>

                <ProjectView project={props.project} />
            </div>
        </section>
    );
}