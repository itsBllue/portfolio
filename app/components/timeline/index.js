"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievementsVariants = {
    hidden: { 
        opacity: 0,
        height: 0,
        transition: {
            height: { duration: 0.2 },
            opacity: { duration: 0.1 }
        }
    },
    visible: { 
        opacity: 1,
        height: "auto",
        transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2, delay: 0.1 }
        }
    },
    exit: { 
        opacity: 0,
        height: 0,
        transition: {
            height: { duration: 0.2, delay: 0.1 },
            opacity: { duration: 0.1 }
        }
    }
};

const achievementItemVariants = {
    hidden: { 
        opacity: 0,
        x: -10,
        transition: { duration: 0.1 }
    },
    visible: (i) => ({ 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            delay: 0.2 + (i * 0.05)
        }
    }),
    exit: { 
        opacity: 0,
        x: -10,
        transition: { duration: 0.1 }
    }
};

function TimelineEntry(props) {
    const { title, period, subtitle, description, achievements } = props;
    const [hoverOnEntry, setHoverOnEntry] = useState(false);
    const htmlMarker = useRef();
    const htmlEntryContainer = useRef();

    return (
        <motion.div 
            className="relative pl-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Vertical line */}
            <div className="absolute left-[0.875rem] top-0 bottom-0 w-[1px] bg-white/20 last:hidden" />
            
            {/* Timeline dot */}
            <motion.div 
                ref={htmlMarker}
                className={`absolute left-[0.5rem]  w-3 h-3 rounded-full border-2 ${
                    hoverOnEntry 
                        ? "border-primary bg-primary scale-125" 
                        : "border-white/20 bg-secondary"
                } transition-all duration-300`}
            />

            {/* Content */}
            <motion.div
                ref={htmlEntryContainer}
                className="pb-8"
                onMouseEnter={() => setHoverOnEntry(true)}
                onMouseLeave={() => setHoverOnEntry(false)}
            >
                <motion.div 
                    className={`rounded-lg backdrop-blur-sm border border-white/5 overflow-hidden ${
                        hoverOnEntry ? "bg-secondary-focus/80" : "bg-secondary"
                    }`}
                    transition={{ duration: 0.2 }}
                >
                    <div className="p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-primary">{title}</h3>
                            <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary whitespace-nowrap">
                                {period}
                            </div>
                        </div>
                        <p className="text-sm text-white/60 italic">{subtitle}</p>
                        {description && (
                            <p className="mt-3 text-sm text-white/80 leading-relaxed">{description}</p>
                        )}
                        <AnimatePresence mode="wait">
                            {achievements && achievements.length > 0 && hoverOnEntry && (
                                <motion.div 
                                    key="achievements"
                                    className="mt-4 pl-2 border-l-2 border-primary/20"
                                    variants={achievementsVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <ul className="space-y-2">
                                        {achievements.map((achievement, index) => (
                                            <motion.li 
                                                key={index}
                                                className="flex items-start gap-2 text-sm text-white/70"
                                                custom={index}
                                                variants={achievementItemVariants}
                                            >
                                                <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                                                <span className="leading-relaxed">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function TimelineComponent(props) {
    const { Entries } = props;

    return (
        <div className="relative">
            {Entries.map((entry, index) => (
                <TimelineEntry 
                    key={`${entry.title}_${index}`}
                    {...entry}
                />
            ))}
        </div>
    );
}