import React,{Fragment,useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const[menuToggle,setMenuToggle]=useState(false);
  const[Active,setActive]=useState(null)

    const ToggleHandler=()=>{
        setMenuToggle(!menuToggle)
        }
    const ActiveHandler=(item)=>{
        setActive(item)
      }
  return (
    <Fragment>
      <nav className='flex flex-col overflow-hidden box-border'>
          <div className='bg-black flex h-16 w-full text-white stickey justify-between z-1 '>

            
            <Link to='/' className='h-16 w-16 mx-2 md:mx-3 p-3 cursor-pointer'>
              <img src={logo} alt="logo" />
            </Link>
        

            <div onClick={ToggleHandler} className=' cursor-pointer text-teal-600 absolute top-0 right-0 bg-slate-900 text-4xl mr-3 mt-2 z-10 rounded-md md:hidden '>
              {menuToggle?<RxCross2/>:<FaBars />}
  
              <div className={`${menuToggle?'block':'hidden'} md:visible flex flex-col h-screen w-[60vw] mt-5 mx-8 text-teal-600 cursor-pointer`}>  
              <NavLink 
                    to="/" onClick={()=>ActiveHandler('home')} 
                    className={`${Active==='home'?'text-teal-600':"text-white"} 
                    text-center text-2xl  mt-20 mx-8`}>
                      Home
              </NavLink> 
              <NavLink 
                to="/skills" onClick={()=>ActiveHandler('skills')}
                className={`${Active==='skills'?' h-10 text-center text-teal-600 border-solid bg-black border-white rounded-lg':"text-white"}
                text-center  text-2xl mt-10 mx-8`}>
                Skills
              </NavLink>
              <NavLink
                 to="/article" onClick={()=>ActiveHandler('article')} 
                 className={`${Active==='article'?'text-teal-600':"text-white"} text-center  text-2xl mt-10 mx-8`}>
                 Article
              </NavLink>
              <NavLink 
                 to="/contact" onClick={()=>ActiveHandler('contact')}
                 className={`${Active==='contact'?'text-teal-600':"text-white"} text-center  text-2xl mt-10 mx-8`}>
                 Contact
               </NavLink>
             </div>
           </div>
         </div>
       </nav>



    </Fragment>
  )
}

export default Navbar