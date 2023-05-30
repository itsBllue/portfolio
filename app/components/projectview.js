


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
  "images": ["projectshowcase/246044ff6d4a8f144f64b766f49ada4c.jpg", "projectshowcase/bbb8a65dbbd113f33738ed608166f468.jpg", "projectshowcase/5efa5c906c68409d218670cb988ac78a.jpg"],
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
  "tags": ["ReactNative", "MySQL", "Python", "Expo", "ExpressJS"],
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
    console.log("current location", currentLocation)
    if (currentLocation === -1)
      return;
    setBreadcrumbs([Projects[currentLocation].name])
  }, [currentLocation])

  const handleViewChange = (index) => {
    // index 0  = home 1-4 projects
    setCurrentLocation(index)
    setCurrentProjectInView(Projects[index])
    console.log('got index', index)
  }

  if (loading)
    return (<div className="">SPinner here</div>)


  return (<div className="project-view-container w-auto ml-5 mr-5 mt-5 p-5 pt-2 lg:w-full  relative">
    <Breadcrumbs setLocation={setCurrentLocation} setCrumbs={setBreadcrumbs} breadcrumbs={breadcrumbs} />
    <div className="project-view-content bg-secondary text-secondary-content h-fit lg:min-h-350 pr-5 pl-5 pt-1 pb-8 lg:p-0 lg:pb-10  lg:m-5 lg:ml-0 lg:mt-0">
      <AnimatePresence mode="wait">
        {currentLocation == -1 ?
          <motion.div
            key="modal"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><HomeView projects={Projects} onClick={handleViewChange} /></motion.div>
          :
          <motion.div
            key="modal2"
            className="cont-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><ProjectView project={currentProjectInView} /></motion.div>
        }
      </AnimatePresence>
      {/* <AnimatePresence>
        {currentLocation == -1 ? 
        <HomeView projects={Projects} onClick={handleViewChange}/> : 
        <ProjectView project={currentProjectInView}/>}
    </AnimatePresence> */}
    </div>
  </div>
  )

}





function HomeView(props) {
  const { projects, onClick } = props;

  return (<motion.div variants={container} initial="hidden" animate="visible" exit="exit" className="projects-view-home flex  flex-col lg:flex-row justify-between lg:justify-center overflow-hidden ">
    <motion.ul
      className="projects-view-home flex  flex-col  justify-between  overflow-hidden "
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {projects.map((project, index) =>
        <motion.li whileHover={{ scale: 0.9 }} key={index} className="item" variants={item} >
          <div key={project.name + index} onClick={() => onClick(index)} className="flex flex-col  md:flex-row lg:m-auto lg:mt-5 lg:mb-5 lg:w-4/6 bg-neutral shadow-xl mt-10 h-45 rounded-lg overflow-hidden ">
            <div className="w-full md:flex-1 relative  overflow-hidden h-72 lg:h-72  ">
              {project && project.imageSettings && <Image src={process.env.cdn + "/images/" + project.images[0]} alt={project.name} width={project.imageSettings.width || 50} height={project.imageSettings.height || 50} className="m-auto" fill={project.imageSettings.fill || false} />
                || <Image src={process.env.cdn + "/images/" + project.images[0]} alt={project.name} className="" fill />}
            </div>
            <div className="card-body md:flex-1">
              <h2 className="card-title text-neutral-content">{project.name}</h2>
              <p className="disc  text-ellipsis  whitespace-pre-line line-clamp-3 mb-1">{project.short}</p>
              <div className="card-actions justify-end flex flex-wrap max-h-12 overflow-hidden">
                {project.tags.map((tag, in2) => <div key={"ProjectTab" + index + "|" + in2} className="badge badge-outline badge-info">{tag}</div>)}

              </div>

            </div>
          </div>
        </motion.li>
      )}
    </motion.ul>
  </motion.div>

  )
}

function ProjectView(props) {
  //  this will desplay project information.
  const { project } = props;
  console.log(project);
  return (<motion.div variants={container} initial="hidden" animate="visible" exit="exit"
    className="project-container relative w-full  h-fit pt-16 flex flex-col ">

    <div className="social-links absolute right-5 top-5 w-36 m-auto rounded flex flex-row bg-slate-400 justify-evenly px-5 py-2">
      <div className="tooltip" data-tip={project.code ? "Public repository" : "Private repository"}>
        {project && project.code && <Link href={project.code}><CodeBracketSquareIcon className="w-7 fill-primary-content hover:fill-black" /></Link> || <CodeBracketSquareIcon className="w-7 fill-primary-content/20 " />}
      </div>
      <div className="tooltip" data-tip={project.live ? "Live demo" : "Demo currently not hosted"}>
        {project && project.live && <Link href={project.live}><GlobeAltIcon className="w-7 fill-primary-content hover:fill-black" /></Link> || <GlobeAltIcon className="w-7 fill-primary-content/20 " />}
      </div>
    </div>
    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">Showcase:</h1>
    <div className="img-container h-fit mt-5 mb-5">
      <Carousel >
        {project.images.map((image, indexOfImage) => {
            return project && project.imageSettings && <Image key={image + indexOfImage} draggable={false} src={process.env.cdn + "/images/" + project.images[0]} alt={project.name} width={project.imageSettings.width || 50} height={project.imageSettings.height || 50} className="m-auto" fill={project.imageSettings.fill || false} />
            || <Image key={image + indexOfImage} draggable={false} src={process.env.cdn + "/images/" + project.images[0]} alt={project.name} className="" fill />

        })}
      </Carousel>

    </div>

    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">Description:</h1>
    <p className="ml-5 mt-5 mb-5">{project.description}</p>
    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">Techical stack:</h1>

    <div className="project-info-stack mx-5 my-5">
      <div className="tech-stack-container flex bg-secondary-content/10 w-fit m-auto flex-wrap max-w-[90%]">
        {project.tags.map(tech => <TechIcon img={true} key={tech + "projinf"} name={tech} icon={tech} width={tech.width || undefined} height={tech.height || undefined} />)}

      </div>
    </div>

  </motion.div>)
}

function Breadcrumbs(props) {
  const { breadcrumbs, setLocation, setCrumbs } = props;
  console.log('breadcrumbs should be ', breadcrumbs)
  return (
    <div className="text-lg breadcrumbs  -top-10 absolute font-semibold">
      <ul>
        <li onClick={() => { setLocation(-1); setCrumbs([]) }}><a >Highlighted Projects</a></li>
        {breadcrumbs.map(breadcrumb => <li key={"breadcrumb_" + breadcrumb}>{breadcrumb}</li>)}
      </ul>
    </div>
  )
}