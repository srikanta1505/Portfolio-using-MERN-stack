import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import c from '../images/c.png'


const Certifications = () => {
  return (
    <React.Fragment>
        <main className=' bg-slate-800'>
            <div className='h-10 w-20 mx-5 text-3xl text-teal-600 font-semibold'>Certifications</div>

            <div className='flex-col m-8 mx-36'>

            <div className=' flex h-auto w-[55%] justify-between rounded-3xl bg-slate-200 shadow-xl '>
                <div className='h-full object-cover w-36' >
                    <img src={c} alt="" />                   
                </div>
                
                    <div className='flex-col m-3'>
                        <div className='text-xl'>C for Everyone: Structured Programming</div>
                        <p className='text-xl m-3'>Platform : Coursera</p>
                        <a href="https://coursera.org/share/8832f867bbbf39c0b912740c35af4120" className='text-l text-sky-900 underline ' target='blank'>
                            View Certificate <MdOutlineArrowOutward className='inline-block'/></a>
                       
                    </div>
                    
                
                

            </div>
        </div>
        <div className='flex-col m-8 mx-36'>

            <div className=' flex h-auto w-[55%] justify-between rounded-3xl bg-slate-200 shadow-xl '>
                <div className='h-full object-cover w-36' >
                    <img src={c} alt="" />                   
                </div>
                
                    <div className='flex-col m-3'>
                        <div className='text-xl'>C for Everyone: Structured Programming</div>
                        <p className='text-xl m-3'>Platform : Coursera</p>
                        <a href="https://coursera.org/share/8832f867bbbf39c0b912740c35af4120" className='text-l text-sky-900 underline ' target='blank'>
                            View Certificate <MdOutlineArrowOutward className='inline-block'/></a>
                       
                    </div>
                    
                
                

            </div>
        </div>
        
        <div className='flex-col m-8 mx-36'>

            <div className=' flex h-auto w-[55%] justify-between rounded-3xl bg-slate-200 shadow-xl '>
                <div className='h-full object-cover w-36' >
                    <img src={c} alt="" />                   
                </div>
                
                    <div className='flex-col m-3'>
                        <div className='text-xl'>C for Everyone: Structured Programming</div>
                        <p className='text-xl m-3'>Platform : Coursera</p>
                        <a href="https://coursera.org/share/8832f867bbbf39c0b912740c35af4120" className='text-l text-sky-900 underline ' target='blank'>
                            View Certificate <MdOutlineArrowOutward className='inline-block'/></a>
                       
                    </div>
                    
                
                

            </div>
        </div>
        
        
        </main>
    </React.Fragment>  
    )
}

export default Certifications