import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Profile">
        <div id='Profile_Picture'> <img src={logo} style={{width:100, height:100, position:"relative"}}></img></div>
        <div className='Content' id='profile_content'>
        <h1>Tanweer Baig</h1>
        <p>Freelance Developer</p>
        <button>Connect</button>
        <button>Email</button>
        </div>
      </div>
      <div className='Education'>
        <h1>Education</h1>
        <div className='EduSection'>
          <img src={logo}></img>
          <div className='Content'>
          <h1>Bsc Computer Networks</h1>
          <p>Middlesex University</p>
          <p>2014-2018</p>
          </div>
        </div>
        <div className='EduSection'>
          <img src={logo}></img>
          <div className='Content'>
          <h1>A Levels</h1>
          <p>London Academy Sixth Form</p>
          <p>2021-2021</p>
          </div>
        </div>
        <div className='EduSection'>
          <img src={logo}></img>
          <div className='Content'>
          <h1>GCSEs</h1>
          <p>London Academy</p>
          <p>2021-2021</p>
          </div>
        </div>
      </div>
      <div className="Experiance">
        <h1>Experiance</h1>
        <div className='vl'></div>
            <div className='ExpSection'> 
            <div id='dot'><hr></hr></div>
            <div className='Picture'> <img src={logo}></img></div>
            <div className='Content'>
            <p>2021-2021</p>
            <h1>Freelance Developer</h1>
            <p>FiveM, Upwork</p>
            </div>
            </div>

            <div className='ExpSection'> 
            <div id='dot'  style={{background:'lightblue'}}><hr></hr></div>
            <div className='Picture'> <img src={logo}></img></div>
            <div className='Content'>
            <p>2021-2021</p>
            <h1>Freelance Developer</h1>
            <p>FiveM, Upwork</p>
            </div>
            </div>

            <div className='ExpSection'> 
            <div id='dot' style={{background:'red'}}><hr></hr></div>
            <div className='Picture'> <img src={logo}></img></div>
            <div className='Content'>
            <p>2021-2021</p>
            <h1>Freelance Developer</h1>
            <p>FiveM, Upwork</p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default App
