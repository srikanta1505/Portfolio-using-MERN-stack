import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const EducationDetails = ({ value, children, id, educationState, setEducationState }) => {
    const [active, setActive] = useState(false);


  const ActiveHandler = () => {
    setActive(!active);
  };
  // const DataHandler=(item)=>{
  //   setDataOpen(item);
  // }

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
    </>
  )
}

export default EducationDetails