


"use client";
import React,{useState,useEffect}  from "react";
import Image from "next/image";

const Projects = [{
    "name":"Test Project",
    "description":" This is a description of the project",
    "short":" This is a short description of the project",
    "tags":["React", "MongoDB", "Mongoose"],
    "image":"images/testimg.png",
},
{
  "name":"Test 2",
  "description":" This is a description of the project",
  "short":" This is a short description of the project",
  "tags":["React", "MongoDB", "Mongoose"],
  "image":"images/react.png",
},
{
  "name":"Test 3",
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
      console.log('got index', index)
    }
    const [currentProjectInView, setCurrentProjectInView] = useState();

    if(loading)
    return (<div className="">SPinner here</div>)
    

    return(<div className="project-view-container w-11/12 ml-9 mt-8 p-5 pt-2   relative">
      <Breadcrumbs setLocation={setCurrentLocation} setCrumbs={setBreadcrumbs} breadcrumbs={breadcrumbs}/>
    <div className="project-view-content bg-secondary text-secondary-content h-auto p-2 pt-8 pb-8">
        {currentLocation == -1 ? <HomeView projects={Projects} onClick={handleViewChange}/> : <ProjectView project={currentProjectInView}/>}
    </div>
    </div>
    )
 
}


function HomeView(props){
  const {projects , onClick} = props;
  return(<div className="projects-view-home flex justify-evenly overflow-hidden ">
      {projects.map((project,index)=><div key={"Project "+ index}  onClick={()=>onClick(index)}
      className="Project-card card w-72 bg-primary text-primary-content shadow-xl h-96">
      <div className="w-full  relative h-40 overflow-hidden rounded-lg"><Image src={process.env.cdn + "/images/testimg.png"} alt="Shoes"  className="p-1 m-auto rounded-3xl" fill style={{objectFit:"contain"}}/></div>
      <div className="card-body">
    <h2 className="card-title">
    {project.name}
    </h2>
    <p>{project.short}</p>
    <div className="card-actions justify-end">
      {project.tags.map((tag,in2)=><div key={"ProjectTab"+ index + "|" + in2 }className="badge badge-outline">{tag}</div>)}

    </div>
  </div>
        </div>)}
  </div>)
}


function ProjectView(props){
  //  this will desplay project information.
  return(<div  className="card w-96 bg-primary">project</div>)
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