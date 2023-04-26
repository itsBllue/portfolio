import Image from 'next/image'

import AboutSection from './components/sections/about'
import ProjectsSection from './components/sections/projects'
export default function Home() {
  return (
    <main className="flex  flex-none flex-col bg-white w-fit h-fit text-black  overflow-x-hidden overflow-y-hidden">
      
      <AboutSection />
      <ProjectsSection/>
      <div className='exp-content-container h-screen bg-slate-600'> Exp section</div>
      <div className='exp-content-container h-screen bg-slate-900'> Edu section</div>
      
    </main>
  )
}
 