import React from "react";
import EducationDetails from "./EducationDetails";
// import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Education = () => {
//   const [active, setActive] = useState(false);

//   const ActiveHandler = () => {
//     setActive(!active);
  // };

  return (
    <React.Fragment>
      <main className=" overflow-hidden bg-slate-800 pb-10 text-white">
        <div className="mx-5 text-3xl text-teal-600 font-semibold">
          Education
        </div>
        <EducationDetails
           value= "Post Graduation">
            <div className="text-white text-2xl">hello world</div>
        </EducationDetails>


        <EducationDetails
           value= "Graduation">
            <div className="text-white text-2xl">hello world</div>
        </EducationDetails>
        
          
        <EducationDetails
           value= "InterMediate">
            <div className="text-white text-2xl">hello world</div>
        </EducationDetails>  
         
        <EducationDetails
           value= "Schooling">
            <div className="text-white text-2xl">hello world</div>
        </EducationDetails>   
      </main>
    </React.Fragment>
  );
};

export default Education;
