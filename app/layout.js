import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanweer - Portfolio',
  description: 'A Web portfolio made with NextJS & Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full min-h-screen overflow-x-hidden">
            {/* <div className='drawer drawer-mobile'>

              <Sidebar/>
              {children}

            </div> */}
          <div className="drawer drawer-mobile">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                  {children}
          </div> 
          <Sidebar/>

          </div>
        </body>
    </html>
  )
}
