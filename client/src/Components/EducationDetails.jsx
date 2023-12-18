import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const EducationDetails = ({ value,children  }) => {
    const [active, setActive] = useState(false);
    


  const ActiveHandler = () => {
    setActive(!active);
  };
 

  return (
    <>
        <div className=" flex mt-8 mx-12 md:mx-36 h-12 w-[70vw] bg-black items-center justify-between rounded-xl">
          <div className="pl-10 text-xl">{value}</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
          
        </div>
        {active && 
              (<div className=' mt-4 ml-16 relative md:left-28 lg:left-36 rounded-3xl bg-slate-300 items-center h-32 w-[65vw]'>{children}</div>)}
    </>
  )
}

export default EducationDetails