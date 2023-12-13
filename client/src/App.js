import React from 'react'
import './App.css'
// import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Article from './Pages/Article'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <React.Fragment >
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/skills' Component={Skills} />
              <Route path='/article' Component={Article} />
              <Route path='/contact' Component={Contact} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    

    </React.Fragment>
  )
}

export default App