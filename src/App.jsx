import Projects from "./pages/projects";
import Banner from './components/Banner'
import SocialLinks from './components/SocialLinks'
import MatchStick from "./MatchStick";
import { Link, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>

      <div className="relative min-h-screen bg-white text-black">

      {/* Left vertical line */}
      <div className="absolute left-7 top-33 h-full w-[1px] bg-slate-500 opacity-40"></div>

      {/* Right vertical line */}
      <div className="absolute right-7 top-33 h-full w-[1px] bg-slate-500 opacity-40"></div>

      {/* Your normal page content */}
      <Banner />
      <nav className="w-full flex justify-between items-center px-8">
          <h1 className="text-2xl font-bold">flamable</h1>
            <div className="w-full justify-start px-8 border-2 border-black/5">
            <Link to="/projects">Projects</Link>
            </div>
            <SocialLinks />
            
      </nav>
      <MatchStick />

      </div>


    
    </>
  )
}

export default App
