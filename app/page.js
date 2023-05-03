import Image from 'next/image'

import AboutSection from './components/sections/about'
import ProjectsSection from './components/sections/projects'
import ExpSection from './components/sections/experience'
export default function Home() {
  return (
    <main className="flex  flex-none flex-col bg-white w-fit h-fit text-black  overflow-x-hidden overflow-y-hidden lg:w-full mt-1 lg:mt-0 z-1">
      
      <AboutSection />
      <ProjectsSection/>
      <ExpSection/>
    </main>
  )
}
 