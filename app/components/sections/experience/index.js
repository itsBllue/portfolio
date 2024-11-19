"use client";

import React from "react";
import TimelineComponent from "../../timeline";
import { motion } from "framer-motion";

const EducationEntries = [
    {
        title: "Computer Networks",
        subtitle: "Middlesex University",
        period: "2014 - 2016",
        description: "Specialized in network architecture, security protocols, and distributed systems."
    },
    {
        title: "Computing, Engineering & Media Studies",
        subtitle: "SixthForm - London Academy",
        period: "2012 - 2014",
        description: "Advanced level studies in Computer Science, Mathematics, and Media Technology."
    },
    {
        title: "ICT, Engineering & Core GCSEs",
        subtitle: "London Academy",
        period: "2010 - 2012",
        description: "Foundation in Computer Science, Engineering principles, and core subjects."
    }
];

const ProfessionalExperience = [
    {
        title: "Freelance Developer",
        subtitle: "Remote - UK Based",
        period: "2021 - 2022",
        description: "Full-stack development focusing on modern web technologies and cloud solutions.",
        achievements: [
            "Built responsive web applications with React",
            "Integrated payment systems and third-party APIs",
            "Implemented serverless architectures"
        ]
    },
    {
        title: "Senior Technical Advisor",
        subtitle: "Utilitywarehouse - Remote",
        period: "2021 - Present",
        description: "Leading technical support and system optimization initiatives.",
        achievements: [
            "Managed and resolved complex technical issues",
            "Improved system efficiency and user experience",
            "Trained and mentored junior team members"
        ]
    },
    {
        title: "Technical Advisor",
        subtitle: "Utilitywarehouse - London",
        period: "2019 - 2021",
        description: "Provided technical support and implemented system improvements.",
        achievements: [
            "Resolved customer technical issues",
            "Contributed to system documentation",
            "Participated in process improvement initiatives"
        ]
    }
];

const Certifications = [
    {
        title: "AWS Developer Associate",
        subtitle: "Amazon Web Services",
        period: "2023",
        description: "Professional certification in AWS cloud development, architecture, and best practices.",
        achievements: [
            "Cloud architecture design",
            "Serverless computing",
            "Container orchestration"
        ]
    }
];

const SectionTitle = ({ children }) => (
    <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-primary whitespace-nowrap">{children}</h2>
        <div className="h-[1px] flex-1 bg-white/10 rounded-full" />
    </div>
);

export default function ExpSection() {
    return (
        <section id="experience" className="min-h-screen bg-slate-900 py-20">
            <motion.div 
                className="container  px-4 md:px-4 lg:px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-2/4 mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-20"
                    >
                        <SectionTitle>Certifications</SectionTitle>
                        <TimelineComponent Entries={Certifications} />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-20"
                    >
                        <SectionTitle>Professional Experience</SectionTitle>
                        <TimelineComponent Entries={ProfessionalExperience} />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-6"
                    >
                        <SectionTitle>Education</SectionTitle>
                        <TimelineComponent Entries={EducationEntries} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}