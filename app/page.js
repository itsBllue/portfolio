"use client";
import Image from 'next/image'
import { useRouter } from 'next/router';
import AboutSection from './components/sections/about'
import ProjectsSection from './components/sections/projects'
import ExpSection from './components/sections/experience'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home(props) {
  const searchParams = useSearchParams();
  const [targetProject, setTargetProject] = useState(searchParams.get('project'));
  console.log(targetProject, 'is target')
  // useEffect(() => {
  //   if (props.searchParams.project)
  //     return setTargetProject(props.searchParams.project);
  // }, [props])

  return (
    <main className="flex flex-col bg-white w-full min-h-screen overflow-x-hidden">
      <AboutSection />
      <ProjectsSection project={targetProject} />
      <ExpSection />
    </main>
  )
}
