"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, m } from "framer-motion";
import SocialIcon from "./socialicon";
import { CodeBracketSquareIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Carousel from './carousel'
import TechIcon from './cards/techicon'
import Link from "next/link";
const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }

}
const Projects = [{
  "name": "FiveM Modifications",
  "description": "This project consists of distinct systems that, when integrated, establish a comprehensive framework enabling users to engage in a distinctive gaming experience.",
  "short": "This project consists of distinct systems that, when integrated, establish a comprehensive framework enabling users to engage in a distinctive gaming experience.",
  "tags": ["React", "MongoDB", "Typescript", "Javascript", "Tailwind", "NodeJS"],
  "images": ["projectshowcase/5efa5c906c68409d218670cb988ac78a.png","projectshowcase/246044ff6d4a8f144f64b766f49ada4c.jpg", "projectshowcase/bbb8a65dbbd113f33738ed608166f468.jpg"],
},
{
  "name": "E-Commerce Marketplace",
  "description": "The original intent of this project stemmed from a client request. However, I leveraged the opportunity to explore the possibilities that could be achieved with Next.js.",
  "short": "The original intent of this project stemmed from a client request. However, I leveraged the opportunity to explore the possibilities that could be achieved with Next.js.",
  "tags": ["NextJS", "MongoDB", "Tailwind", "Javascript"],
  "images": ["projectshowcase/beb6f48e6a2c0b75ae4b98af65b555ee.png"],
  "code": "https://github.com/itsBllue/E-Commerse",
  "live": "https://e-commerse-eight.vercel.app/",
},
{
  "name": "myUW  - Employee Mobile app",
  "description": "This project addresses the challenge of implementing a centralized employee company application, facilitating seamless access to important features such as schedules, employee handbooks, and various other resources.",
  "short": " This project addresses the challenge of implementing a centralized employee company application, facilitating seamless access to important features such as schedules, employee handbooks, and various other resources.",
  "tags": ["React", "Native", "MySQL", "Python", "Expo", "ExpressJS"],
  "images": ["projectshowcase/mySch.gif"],
  "imageSettings": {
    width: 150,
    height: 50,
    fill: false
  }
}]

export default function ProjectViewComponent(props) {
  // This needs to be like a view with breadcrumbs to navigate it.
  const [currentLocation, setCurrentLocation] = useState(-1);
  const [loading, setIsLoading] = useState(false)
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const [currentProjectInView, setCurrentProjectInView] = useState();

  
  useEffect(()=>{
      if(props.project){
        setCurrentLocation(props.project)
        setBreadcrumbs([Projects[props.project].name]);
        setCurrentProjectInView(Projects[props.project])
      }
    },[props])

  useEffect(() => {
    if (currentLocation === -1)
      return;
    setBreadcrumbs([Projects[currentLocation].name])
  }, [currentLocation])

  const handleViewChange = (index) => {
    // index 0  = home 1-4 projects
    setCurrentLocation(index)
    setCurrentProjectInView(Projects[index])
  }

  if (loading)
    return (<div className="">SPinner here</div>)


  return (<div className="project-view-container w-full mx-auto p-5 pt-2 lg:p-4 relative">
    <Breadcrumbs setLocation={setCurrentLocation} setCrumbs={setBreadcrumbs} breadcrumbs={breadcrumbs} />
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl blur-lg opacity-50" />
      <div className="project-view-content relative bg-secondary shadow-xl rounded-xl border border-white/5 overflow-hidden p-2 lg:p-4">
        <AnimatePresence mode="wait">
          {currentLocation == -1 ?
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeView projects={Projects} onClick={handleViewChange} />
            </motion.div>
            :
            <motion.div
              key="modal2"
              className="cont-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectView project={currentProjectInView} />
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.div>
  </div>
  )

}

function HomeView(props) {
  const { projects, onClick } = props;

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="visible" 
      exit="exit" 
      className="projects-view-home p-4 flex flex-col lg:flex-row justify-between lg:justify-center overflow-hidden"
    >
      <motion.ul
        className="projects-view-home flex flex-col justify-between overflow-hidden gap-4"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {projects.map((project, index) => (
          <motion.li 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            key={index} 
            className="item" 
            variants={item}
          >
            <div 
              key={project.name + index} 
              onClick={() => onClick(index)} 
              className="flex flex-col md:flex-row lg:m-auto lg:w-[800px] backdrop-blur-sm border border-white/5 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-full md:w-1/2 relative overflow-hidden h-56 lg:h-48 group">
                {project && 
                  <Image 
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/${project.images[0]}`}
                    alt={project.name}
                    width={800}
                    height={600}
                    className="transition-transform duration-300 group-hover:scale-105 object-cover" 
                    priority
                  />
                }
              </div>
              <div className="card-body md:w-1/2 bg-secondary/80 backdrop-blur-sm p-4">
                <h2 className="card-title text-primary mb-2 text-lg">{project.name}</h2>
                <p className="disc text-ellipsis whitespace-pre-line line-clamp-2 mb-3 text-secondary-content/90 text-sm">{project.short}</p>
                <div className="card-actions justify-end flex flex-wrap gap-1.5">
                  {project.tags.map((tag, in2) => (
                    <div 
                      key={"ProjectTab" + index + "|" + in2} 
                      className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

function ProjectView(props) {
  const { project } = props;
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_CDN_URL) {
      console.error('CDN URL is not defined');
    }
    console.log('CDN URL:', process.env.NEXT_PUBLIC_CDN_URL);
    console.log('Full image path:', `${process.env.NEXT_PUBLIC_CDN_URL}/${project.images[selectedImage]}`);
  }, [selectedImage, project]);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
  };

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="visible" 
      exit="exit"
      className="project-container relative w-full h-fit flex flex-col items-center space-y-6"
    >
      <div className="w-full max-w-4xl px-4 py-6">
        <div className="social-links absolute right-5 top-5 flex gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {project.live && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
            )}
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">{project.name}</h1>
            <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
          </div>

          <div className="img-container rounded-xl overflow-hidden border border-white/5">
            <div className="relative w-full h-[400px] lg:h-[450px] overflow-hidden">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-secondary/30">
                  <p className="text-primary">Image failed to load</p>
                </div>
              ) : (
                <Image 
                  draggable={false} 
                  src={process.env.NEXT_PUBLIC_CDN_URL ? `${process.env.NEXT_PUBLIC_CDN_URL}/${project.images[selectedImage]}` : ''}
                  alt={`${project.name} showcase ${selectedImage + 1}`}
                  width={project.imageSettings?.width || 1200}
                  height={project.imageSettings?.height || 800}
                  className="object-contain w-full h-full"
                  priority
                  onError={handleImageError}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/${image}`}
                        alt={`${project.name} thumbnail ${index + 1}`}
                        width={64}
                        height={48}
                        className="object-cover w-full h-full"
                        onError={handleImageError}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-primary mb-2">Description</h2>
              <p className="text-secondary-content/90 leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-primary">Tech Stack</h2>
                  <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {project.tags.map((tech) => (
                    <div 
                      key={tech} 
                      className="w-full"
                    >
                      <TechIcon 
                        name={tech} 
                        icon={tech} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Breadcrumbs(props) {
  const { breadcrumbs, setLocation, setCrumbs } = props;
  return (
    <div className="text-lg breadcrumbs  -top-10 absolute font-semibold">
      <ul>
        <li onClick={() => { setLocation(-1); setCrumbs([]) }}><a >Highlighted Projects</a></li>
        {breadcrumbs.map(breadcrumb => <li key={"breadcrumb_" + breadcrumb}>{breadcrumb}</li>)}
      </ul>
    </div>
  )
}