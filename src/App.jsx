import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainComponent from './components/MainContent'
import LandingPage from './components/LandingPage'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AnimalDash(){
  const [isVisible, setVisible] = useState(true)
  return (
    <div>
        <div>
            <Sidebar isvisible={isVisible} sideitem="animal"></Sidebar>
        </div>
        <div className='w-full'>
            <MainComponent toggleside={setVisible} isvisible={isVisible} content ="animal"></MainComponent>
        </div>
    </div>
)
}

function HomeDash() {
  const [isVisible, setVisible] = useState(true)
  return (
      <div>
          <div>
              <Sidebar isvisible={isVisible} sideitem="home"></Sidebar>
          </div>
          <div className='w-full'>
              <MainComponent toggleside={setVisible} isvisible={isVisible} content="home"></MainComponent>
          </div>
      </div>
  )
}

function DoctorDash(){
  const [isVisible, setVisible] = useState(true)
  return (
      <div>
          <div>
              <Sidebar isvisible={isVisible} sideitem="doctor"></Sidebar>
          </div>
          <div className='w-full'>
              <MainComponent toggleside={setVisible} isvisible={isVisible} content="doctor"></MainComponent>
          </div>
      </div>
  )
}

function AnimalCareDash(){
  const [isVisible, setVisible] = useState(true)
  return (
      <div>
          <div>
              <Sidebar isvisible={isVisible} sideitem="animalcare"></Sidebar>
          </div>
          <div className='w-full'>
              <MainComponent toggleside={setVisible} isvisible={isVisible} content="animalcare"></MainComponent>
          </div>
      </div>
  )
}

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* Routing to be configured */}
        
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="home" element={<HomeDash ></HomeDash>}></Route>
          <Route path="animal" element={<AnimalDash ></AnimalDash>}></Route>
          <Route path="doctor" element={<DoctorDash />}></Route>
          <Route path="animalcare" element={<AnimalCareDash />}></Route>
          
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
