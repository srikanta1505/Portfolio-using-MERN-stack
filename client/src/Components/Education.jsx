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
            <div className="m-2 text-lg p-3 text-black text-center  ">
              
              <p>Course : Master of Computer Application</p>
              <p>Stream: Computer Science</p>
              <p>Mark Secured: 8.93 CGPA (84.30%)</p>

            </div>
        </EducationDetails>


        <EducationDetails
           value= "Graduation">
            <div className="m-2 text-lg p-3 text-black text-center  ">
              
              <p>Course : Bachelor of Science</p>
              
              <p>Mark Secured: 8.31 CGPA (78.10%)</p>

            </div>
        </EducationDetails>
        
          
        <EducationDetails
           value= "InterMediate">
            <div className="m-2 text-lg p-3 text-black text-center ">
              
              <p>Course : Science</p>
              <p>Stream: PCM CSc</p>
              <p>Mark Secured: 70.50 %</p>

            </div>
        </EducationDetails>  
         
        <EducationDetails
           value= "Schooling">
            <div className="m-2 text-lg p-3 text-black text-center ">
              
              <p>Course : Schooling</p>
              <p>Mark Secured: 75.17%</p>

            </div>
        </EducationDetails>   
      </main>
    </React.Fragment>
  );
};

export default Education;
