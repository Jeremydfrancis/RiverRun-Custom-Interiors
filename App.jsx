import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
   <Navbar />
   
   <div>
      <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/contact' element={ <Contact />} />
      </Routes>
    </div>
    <Footer /> 
    </>
  )
}

export default App