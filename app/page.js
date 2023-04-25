import Image from 'next/image'

import AboutSection from './components/sections/about'

export default function Home() {
  return (
    <main className="flex  flex-none flex-col bg-white w-10/12 h-fit text-black p-2 overflow-x-hidden overflow-y-hidden">
      <AboutSection />
      <div className='main-content-container h-screen  flex flex-col'>
        <div className='bg-slate-400 flex-1 about-content-container h-screen'>
          <h1 className='section-title p-5 underline '>About me</h1>
          <div className='about-me-content-container'>
            This is where about me text will be placed
          </div>
        </div>
        {/* <div className='flex-1 projects-content-container h-40  w-screen '>
          <h1 className='section-title p-5'>Projects</h1>
       <div className='projects-grid-container grid grid-cols-3 grid-rows-1 gap-x-1 gap-y-1 text-white'>

        <div className='projects-container-row h-fit bg-black'>
          First project
        </div>
        <div className='projects-container-row h-fit bg-black'>
          Sec project
        </div>
        <div className='projects-container-row h-fit bg-black'>
          Third project
        </div>
       </div>
       </div> */}

        {/* <div className='project-content-container h-10 bg-slate-200'>1</div> */}
        {/* <div className='project-content-container h-10 bg-slate-300'>2</div> */}
        {/* <div className='project-content-container h-10 bg-slate-400'>3</div> */}
        {/* Projects section */}

      </div>
      <div className='exp-content-container h-screen bg-slate-600'> Exp section</div>
      <div className='exp-content-container h-screen bg-slate-900'> Edu section</div>
      
    </main>
  )
}
