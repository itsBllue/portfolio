import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar'
import DrawerIcon from './components/icons/DrawerIcon'
import GoogleAnalytics from './components/googleAnalytics'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanweer - Portfolio',
  description: 'A Web portfolio made with NextJS & Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' text-xs sm:text-sm md:text-base'>
        
      <body className="flex flex-col w-screen lg:w-full min-h-screen overflow-x-hidden">
        <GoogleAnalytics/>
            {/* <div className='drawer drawer-mobile'>

              <Sidebar/>
              {children}

            </div> */}
          <div className="drawer drawer-mobile">
              <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content relative">
                  {children}
                  <div className="topbar-mobile  fixed  w-screen bg-secondary z-2 flex flex-row pb-1 lg:hidden top-0 left-0 right-0">
                  <label label htmlFor="sidebar" className=" btn btn-primary drawer-button lg:hidden ml-2 mt-1 "><DrawerIcon/></label>

                  <div className='text-center text-2xl lg:hidden m-auto font-bold text-secondary-content'>Tanweers Portfolio</div>
                  </div>
                </div> 
          <Sidebar/>

          </div>
        </body>
    </html>
  )
}
