


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcon from "./socialicon";
import { CodeBracketSquareIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Carousel from './carousel'
import TechIcon from './cards/techicon'
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
  exit: {
    opacity: 0,
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
  "description": " This is a description of the project",
  "short": " This is a short description of the project",
  "tags": ["React", "MongoDB", "Mongoose"],
  "image": "images/testimg.png",
},
{
  "name": "E-Commerce Marketplace",
  "description": " This is a description of the project",
  "short": " This is a short description of the project",
  "tags": ["React", "MongoDB", "Mongoose"],
  "image": "images/react.png",
},
{
  "name": "myUW  - Employee Mobile app",
  "description": " This is a description of the project",
  "short": " This is a short description of the project",
  "tags": ["React", "MongoDB", "Mongoose"],
  "image": "images/react.png",
}]

export default function ProjectViewComponent(props) {
  // This needs to be like a view with breadcrumbs to navigate it.
  const [currentLocation, setCurrentLocation] = useState(-1);
  const [loading, setIsLoading] = useState(false)
  const [breadcrumbs, setBreadcrumbs] = useState([])
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
  const [currentProjectInView, setCurrentProjectInView] = useState();

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
      className="projects-view-home flex  flex-col lg:flex-row justify-between lg:justify-center overflow-hidden "
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {projects.map((project, index) =>
        <motion.li whileHover={{ scale: 0.9 }} key={index} className="item" variants={item} >
          <div key={project.name + index} onClick={() => onClick(index)} className="Project-card-side lg:flex-col lg:ml-5 lg:mr-5 bg-primary shadow-xl mt-10 h-45 rounded-lg overflow-hidden ">
            <div className="project-card-image w-full relative  overflow-hidden lg:h-40"><Image src={process.env.cdn + "/images/testimg.png"} alt="Shoes" className="object-contain  md:object-fill" fill /></div>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.short}</p>
              <div className="card-actions justify-end">
                {project.tags.map((tag, in2) => <div key={"ProjectTab" + index + "|" + in2} className="badge badge-outline">{tag}</div>)}

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
      <div className="tooltip" data-tip={project.codeLink ? "Public repository" : "Private repository"}>
        {project && project.codeLink && <CodeBracketSquareIcon className="w-7 fill-primary-content hover:fill-black" /> || <CodeBracketSquareIcon className="w-7 fill-primary-content/20 " />}
      </div>
      <div className="tooltip" data-tip={project.liveLink ? "Live demo" : "Demo currently not hosted"}>
        {project && project.liveLink && <GlobeAltIcon className="w-7 fill-primary-content hover:fill-black" /> || <GlobeAltIcon className="w-7 fill-primary-content/20 " />}
      </div>
    </div>
    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">Showcase:</h1>
    <div className="img-container h-60 mt-5 mb-5">
      <Carousel >
        <Image draggable={false} src={process.env.cdn + "/images/testimg.png"} alt="" fill />
        <Image draggable={false} src={process.env.cdn + "/images/testimg.png"} alt="" fill />
        <Image draggable={false} src={process.env.cdn + "/images/testimg.png"} alt="" fill />
      </Carousel>

    </div>

    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">The why:</h1>
    <div className="project-info-why mx-5 my-5">
      <p>{`While looking for new content in the GTA5 gaming community, I found this sub-community full of brand new content
      created for the game. This community seemed limitless and had been thriving with growth. I had joined a server on the community
      ; after a while of playing on this server, I reached out to the founder of the server, and offered help. I was tasked with fixing bugs that I had commonly come across given  basic access to the source code of the server/mod.
      `}</p>
      <br/>
      <p>{`Working on this server was a dream come true, I had the joy of working with a game  I loved , coming  up with ideas to engage our userbase with, and also being able to enjoy the content I myself had created.
      `}</p><br/>
      <p>{`Once I had gotten 6 months down the line of working on this server and creating a decent size of content and reworks I had noticed the preformance and overall developer and user experience degrading due to the techinical debt that had piled up over the years of this servers development and the change of talent over the years which had caused the debt.
      `}</p><br/>
      <p>{`This was a problem, as our users experienced latency at an extreme ranging  anywhere from 200ms to 1.5 seconds and while it may seem like a low  number, when you are in an intense moment it can be quite fustrating to face a 'hitch' or lag spike as refered to by the users.
      `}</p>{project.theWhy}
    </div>
    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">The how:</h1>
    <div className="project-info-how mx-5 my-5">
      {/* {project.theHow} */}
      <p> {`Okay, so to tackle this problem -  Facing the techincal debt, the high latency, the overall  experience being poor, me  and the team had to figure out what was the cause of the techincal debt. Unforutealy it wasn't as straightforward as I would have liked for it to be as the base the server had been using was very much out-dated, using a code base from 2017!
      `}</p><br/> 
      <p>To get passed this hurdle  the decision was straight foward, look for an alternative or build our own base; As we had only 3 developpers at this point, we were very favoured of finding an alternative, however after research of the options available, of which there were 2, we had decieded against finding an alternative and building our own codebase from  scratch in 2022.
      </p><br/>
      <p>{`Now this was a big step for us to take, being the other 2 developers weren't experienced in building things from the bottom up, I had to undertake this project on my own, ofcourse I could delegate tasks to the developers once it had a leg to stand on but until that point I had to make the  design decisions and face the challenges myself.
      `}</p><br/>
      <p>As the previous  base was written in Lua, there was no  easy way to migrate to a new code base rather creating a new one. For my first decision I had chosen to write the base code in Typescript, this allowed more typesafe code and more readability.
      This was great as I had also decided the UI would be moved  over to React as it was very robust and simple to create web apps with. So now we had both ends covered and it was time to start.
      </p><br/>
      <p>{`Starting with the base, which consisted of the account system,character system,admin system,vehicle system and finally the caching system, I decieded to combine the account, character and admin system into one, calling it 'account', this was done for several reasons, the main being the over use of the 'export' feature which had caused hitching in the previous code base that we used.
      After tackling the main cause of the issues that had caused techinical debt I had turned my focus onto our other systems that focused on the users actions, systems such as Inventory system, Property system, Shop system. The  main issue I  had spootted here was that the data had not been cached in the previous base as caching wasn't a norm back in the time this base was constructed, thus creating a caching system I had easily gotten rid of this.
      `}</p><br/>
      <p>Completing this re-write of the code base took roughly 3 months worth of time, and apon completing it and moving the changes onto prod, the users feedback was exceptional and had allowed us to get back on track to gain  more users, we 4x our growth by having  an active player base of 300 now.
      </p><br/><p>This change also allowed us to build new and unique UI systems using typescript and react in comparison to vanilla HTML/JS UI which was clunky to say the least.
      </p>
      <br/><p>Overall this was a huge sucess and 10/10 I would do it again.  </p>
    </div>
    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">The take away:</h1>

    <div className="project-info-how mx-5 my-5">
      {project.theTakeAway}
      <p>TODO: write this section lolz</p>
    </div>
    <h1 className="ml-5 bg-slate-400/80 w-fit pl-1  pr-3 font-semibold  text-black">Techical stack:</h1>

    <div className="project-info-stack mx-5 my-5">
        <div className="tech-stack-container flex bg-secondary-content/10 w-fit m-auto">
        {project.tags.map(tech => <TechIcon img={true} key={tech +  "projinf"} name={tech} icon={tech} width={tech.width || undefined  } height={tech.height || undefined}/>)}
          
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