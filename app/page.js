"use client";
import Image from 'next/image'
import { useRouter } from 'next/router';
import AboutSection from './components/sections/about'
import ProjectsSection from './components/sections/projects'
import ExpSection from './components/sections/experience'
import { useEffect, useState } from 'react';
export default function Home(props) {

  const [targetProject, setTargetProject] = useState(false);

  useEffect(() => {
    if (props.searchParams.project)
      return setTargetProject(props.searchParams.project);

  }, [props])

  return (
    <main className="flex  flex-none flex-col bg-white w-fit h-fit text-black  overflow-x-hidden overflow-y-hidden lg:w-full mt-1 lg:mt-0 z-1">

      <AboutSection />
      <ProjectsSection project={targetProject} />
      <ExpSection />
    </main>
  )
}
