"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillCard = ({ name, icon, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative p-3 rounded-lg backdrop-blur-sm border border-white/5 bg-secondary hover:bg-secondary-focus/80 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image 
              src={icon} 
              alt={name}
              width={32}
              height={32}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-primary truncate">{name}</h3>
            <span className="text-xs text-secondary-content/70">
              {category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsShowcase({ titles, content }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl blur-lg opacity-50" />
        
        <div className="relative bg-secondary shadow-xl rounded-xl border border-white/5 overflow-hidden">
          <div className="relative p-4 border-b border-white/5">
            <h1 className="text-xl font-bold text-neutral-content">Tech Stack</h1>
            <p className="text-xs text-secondary-content/70 mt-1">Technologies I work with</p>
            
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
            {content.map((section, sectionIndex) => {
              const category = titles[sectionIndex];
              const skills = section.props.content;
              
              return skills.map((skill, index) => (
                <SkillCard
                  key={`${category}-${skill.name}`}
                  name={skill.name}
                  icon={skill.img}
                  category={category}
                  index={index + (sectionIndex * skills.length)}
                />
              ));
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}