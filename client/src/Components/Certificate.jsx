import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const Certificate = ({imageURL,courseName,platform,CertificateLink}) => {
  return (
    <>
    <div className='flex-col m-8 mx-12 md:mx-36'>

        <div className=' flex h-auto w-[70vw] justify-between rounded-3xl bg-slate-200 shadow-inner'>
        <div className='h-full object-cover w-36 p-5' >
        <img src={imageURL} alt="logo" />                   
        </div>
    
        <div className='flex-col m-3 pr-8 pt-5'>
            <div className='text-xl'>{courseName}</div>
            <p className='text-l mt-3'>{platform}</p>
            <a href={CertificateLink} className='text-l  text-sky-600 underline ' target='blank'>
                View Certificate <MdOutlineArrowOutward className='inline-block'/></a>
           
        </div>
        
        
    

</div>
</div>

    </>
  )
}

export default Certificate