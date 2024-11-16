"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ name, icon, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative p-3 rounded-lg backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <img 
              src={icon} 
              alt={name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl blur-3xl" />
        
        <div className="relative bg-secondary/30 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
          <div className="relative p-4 border-b border-white/10">
            <h1 className="text-xl font-bold text-neutral-content">Tech Stack</h1>
            <p className="text-xs text-secondary-content/70 mt-1">Technologies I work with</p>
            
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
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