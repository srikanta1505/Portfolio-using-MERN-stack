import React from 'react'
import Typed from 'react-typed'

const MovingText = () => {


  return (
    <div className=' text-5xl m-4 mx-24 flex-wrap font-extralight text-teal-200'>
        <Typed 
        strings={['A Web Developer','A React Js Developer', 'A UI|Frontend Developer','A MERN Stack Developer ']}
        typeSpeed={40}       
        />
    </div>
  )
}

export default MovingText


// import React, { useEffect, useState } from 'react'

// const MovingText = () => {

//     const Lines=['MERN stack','React','Frontend']
//     const[current,setCurrent]=useState(0);

//     useEffect(()=>{
//         const interval= setInterval(()=>{
//             setCurrent((Prev)=>(Prev+1)%Lines.length);
//         },3000)
//         return ()=>clearInterval(interval)
//     },[Lines.length]);
    
//   return(
//     <React.Fragment>
//         <div className='mt-8'>
//            <p className='pl-16'>A <span className='text-teal-600 font-bold'>{Lines[current]} </span>Developer</p> 
//         </div>
//     </React.Fragment>
//   )
// }

// export default MovingText