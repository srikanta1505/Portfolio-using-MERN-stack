import React,{Fragment,useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const[menuToggle,setMenuToggle]=useState(false);
  const[Active,setActive]=useState('home')

    const ToggleHandler=()=>{
        setMenuToggle(!menuToggle)
        }
    const ActiveHandler=(item)=>{
        setActive(item)
      }
  return (
    <Fragment>
      <nav className='overflow-hidden box-border'>
          <div className='bg-black flex text-white stickey h-16 md:h-20'>

            
            <Link to='/' className='h-16 w-16 mx-2  md:m-2 p-3 md:p-2 cursor-pointer'>
              <img src={logo} alt="logo" />
            </Link>
        

            <div onClick={ToggleHandler} className=' cursor-pointer text-teal-600 absolute top-0 right-0 bg-slate-900 text-4xl mr-3 mt-2 z-10 rounded-md md:hidden '>
              {menuToggle?<RxCross2/>:<FaBars />}
  
              <div className={`${menuToggle?'block ':'hidden md:flex'} md:relative flex flex-col h-screen w-[60vw] mt-5 mx-8 text-teal-600 cursor-pointer`}>  
              <NavLink 
                    to="/" onClick={()=>ActiveHandler('home')} 
                    className={`${Active==='home'?'text-teal-600':"text-white"} 
                    text-center text-2xl  mt-20 mx-8 md:mt-0 md:mx-3`}>
                      Home
              </NavLink> 
              <NavLink 
                to="/skills" onClick={()=>ActiveHandler('skills')}
                className={`${Active==='skills'?'text-center text-teal-600 ':"text-white"}
                text-center  text-2xl mt-10 mx-8 `}>
                Skills
              </NavLink>
              <NavLink
                 to="/article" onClick={()=>ActiveHandler('projects')} 
                 className={`${Active==='projects'?'text-teal-600':"text-white"} text-center  text-2xl mt-10 mx-8`}>
                 Projects
              </NavLink>
              <NavLink 
                 to="/contact" onClick={()=>ActiveHandler('contact')}
                 className={`${Active==='contact'?'text-teal-600':"text-white"} text-center  text-2xl mt-10 mx-8`}>
                 Contact Me
               </NavLink>
             </div>
           </div>

          {/* Resposive design for desktop */}
  
              <div className={`hidden md:flex justify-end text-xl h-20 w-full mt-3 mx-8 cursor-pointer`}>  
              <NavLink 
                    to="/" onClick={()=>ActiveHandler('home')} 
                    className={`${Active==='home'?'text-teal-600':"text-white"} 
                    text-cente pt-4 mx-6`}>
                      Home
              </NavLink> 
              <NavLink 
                to="/skills" onClick={()=>ActiveHandler('skills')}
                className={`${Active==='skills'?' h-10 text-center text-teal-600 border-solid bg-black border-white rounded-lg':"text-white"}
                text-center pt-4 mx-6`}>
                Skills
              </NavLink>
              <NavLink
                 to="/article" onClick={()=>ActiveHandler('projects')} 
                 className={`${Active==='projects'?'text-teal-600':"text-white"} text-center pt-4 mx-6`}>
                 Projects
              </NavLink>
              <NavLink 
                 to="/contact" onClick={()=>ActiveHandler('contact')}
                 className={`${Active==='contact'?'text-teal-600':"text-white"} text-center pt-4 mx-6`}>
                 Contact Me
               </NavLink>
             </div>
           </div>
         
       </nav>



    </Fragment>
  )
}

export default Navbar