


"use client";
import React,{useState,useEffect}  from "react";
import Image from "next/image";
import { motion,AnimatePresence } from "framer-motion";
import SocialIcon from "./socialicon";
import Carousel from './carousel'
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  },
  exit:{
    opacity:0,
    transition:{
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
    "name":"FiveM Modifications",
    "description":" This is a description of the project",
    "short":" This is a short description of the project",
    "tags":["React", "MongoDB", "Mongoose"],
    "image":"images/testimg.png",
},
{
  "name":"E-Commerce Marketplace",
  "description":" This is a description of the project",
  "short":" This is a short description of the project",
  "tags":["React", "MongoDB", "Mongoose"],
  "image":"images/react.png",
},
{
  "name":"myUW  - Employee Mobile app",
  "description":" This is a description of the project",
  "short":" This is a short description of the project",
  "tags":["React", "MongoDB", "Mongoose"],
  "image":"images/react.png",
}]

export default function ProjectViewComponent(props){
    // This needs to be like a view with breadcrumbs to navigate it.
    const [currentLocation,setCurrentLocation] = useState(-1);
    const [loading,setIsLoading] = useState(false)
    const [breadcrumbs, setBreadcrumbs] = useState([])
    useEffect(()=>{
      console.log("current location", currentLocation)
      if(currentLocation  === -1)
        return;
      setBreadcrumbs([Projects[currentLocation].name])
    },[currentLocation])

    const handleViewChange = (index)=>{
      // index 0  = home 1-4 projects
      setCurrentLocation(index)
      setCurrentProjectInView(Projects[index])
      console.log('got index', index)
    }
    const [currentProjectInView, setCurrentProjectInView] = useState();

    if(loading)
    return (<div className="">SPinner here</div>)
    

    return(<div className="project-view-container w-auto ml-5 mr-5 mt-5 p-5 pt-2 lg:w-full  relative">
      <Breadcrumbs setLocation={setCurrentLocation} setCrumbs={setBreadcrumbs} breadcrumbs={breadcrumbs}/>
    <div className="project-view-content bg-secondary text-secondary-content h-auto lg:min-h-350 pr-5 pl-5 pt-1 pb-8 lg:p-0 lg:pb-10  lg:m-5 lg:ml-0 lg:mt-0">
  <AnimatePresence mode="wait">
  {currentLocation == -1 ? 
      <motion.div
        key="modal"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ><HomeView projects={Projects} onClick={handleViewChange}/></motion.div>
      :
      <motion.div
        key="modal2"
        className="cont-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ><ProjectView project={currentProjectInView}/></motion.div>
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





function HomeView(props){
  const {projects , onClick} = props;

  return(<motion.div variants={container} initial="hidden"  animate="visible" exit="exit" className="projects-view-home flex  flex-col lg:flex-row justify-between lg:justify-center overflow-hidden ">
      <motion.ul
    className="projects-view-home flex  flex-col lg:flex-row justify-between lg:justify-center overflow-hidden "
    variants={container}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {projects.map((project,index) =>
    <motion.li whileHover={{scale:1.1}}  key={index} className="item" variants={item} > 
    <div key={project.name + index}  onClick={()=>onClick(index)}className="Project-card-side lg:flex-col lg:ml-5 lg:mr-5 bg-primary shadow-xl mt-10 h-45 rounded-lg overflow-hidden ">
  <div className="project-card-image w-full relative  overflow-hidden lg:h-40"><Image src={process.env.cdn + "/images/testimg.png"} alt="Shoes"  className="object-contain  md:object-fill"  fill /></div>
  <div className="card-body">
    <h2 className="card-title">{project.name}</h2>
    <p>{project.short}</p>
    <div className="card-actions justify-end">
      {project.tags.map((tag,in2)=><div key={"ProjectTab"+ index + "|" + in2 }className="badge badge-outline">{tag}</div>)}

    </div>

  </div>
</div>
</motion.li>
)}
</motion.ul>
</motion.div>

  )
}

function ProjectView(props){
  //  this will desplay project information.
  const {project} = props;
  console.log(project);
  return(<motion.div variants={container} initial="hidden"  animate="visible" exit="exit"  
    className="project-container relative w-full  h-96 pt-16 flex flex-col ">

      <div className="social-links absolute right-5 top-5 w-48 m-auto rounded flex flex-row bg-slate-400 justify-evenly px-5 py-2">
                <SocialIcon href="https://www.linkedin.com/in/tkb/" name="linkedin" width={20} svg fill="fill-primary-content hover:fill-black transition-all " className="m-auto cursor-pointer" />
                <SocialIcon href="https://github.com/itsBllue" name="github" width={20} svg fill="fill-primary-content hover:fill-black transition-all" className=" m-auto cursor-pointer"/>
                <SocialIcon href="https://portfolio-tanweer.s3.eu-west-2.amazonaws.com/CV+-+Tanweer+Baig.pdf"  name="resume"  width={20}  svg  fill="fill-primary-content hover:fill-black transition-all" className="m-auto cursor-pointer"/>
            </div>
      <div className="img-container h-60 mt-5">
      <Carousel >
        <Image draggable={false} src={process.env.cdn + "/images/testimg.png"} alt="" fill />
        <Image draggable={false}  src={process.env.cdn + "/images/testimg.png"} alt="" fill />
        <Image draggable={false}  src={process.env.cdn + "/images/testimg.png"} alt="" fill />
      </Carousel>
        
      </div>
    
      <div className="project-info">
      ikjfnwinbfw
      </div>
    </motion.div>)
}

function Breadcrumbs(props){
    const{breadcrumbs, setLocation, setCrumbs} = props;
    console.log('breadcrumbs should be ', breadcrumbs)
    return(
      <div className="text-lg breadcrumbs  -top-10 absolute font-semibold">
      <ul>
      <li onClick={()=>{setLocation(-1); setCrumbs([])}}><a >Highlighted Projects</a></li> 
      {breadcrumbs.map(breadcrumb=><li key={"breadcrumb_"+breadcrumb}>{breadcrumb}</li>)}
      </ul>
      </div>
    )
}