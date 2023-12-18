import React from "react";
import About from "../Components/About";

import { MdDownload } from "react-icons/md";
import MyImage from '../images/MyImage.png';
import Education from "../Components/Education";
import SocialMedia from "../Components/SocialMedia";
import Certifications from "./Certifications";
import MovingText from "../Components/MovingText";

const Home = () => {
  return (
    <>
      <main className="flex flex-col overflow-hidden ">
        <div className="bg-black h-[100vh] w-full box-border ">
        <div className="  h-full w-full absolute pt-8 box-content ">
              <div className="text-white text-5xl flex-col flex mt-10 font-mono items-center">
              <img src={MyImage} className='h-32 w-32 rounded-full ' alt="" />
                <p className=" text-2xl mt-4 r">Hello,</p>
                <p className=" ml-20">
                 I'm <span className="text-teal-600 flex-wrap font-bold">Srikant </span>
                 <span className="mr-4">Nanda</span>
                 </p>
                 <MovingText />
              </div>

              <div className="text-white items-center mx-20 flex flex-col ">
                 <button className="h-10 w-36 mt-5 rounded-lg transition font-mono
                     shadow-md hover:z-50 hover:scale-110  bg-gradient-to-r from-blue-900
                     via-transparent to-teal-600 hover:from-teal-600 hover:via-transparent hover:to-blue-900">
                     Download CV
                     <MdDownload className="animate-bounce ml-3 w-6 h-6  inline-block" />
                  </button>
                  
                     
                  
            
                  <div className="h-3 w-3 rounded-full bg-green-500 relative top-8 left-10 animate-ping"></div>
                  <button className="h-10 w-24 mt-5 text-teal-600 font-semibold border-2 border-double rounded-md hover:scale-110 font-mono border-teal-600">
                      Hire me
                  </button>

                  <div className=" mt-2 relative right-0  ">
                  <SocialMedia />
                  
                   </div>

               </div>
            </div>
        </div>
        
          
        
        
        <About />
        <Education />
        <Certifications/>
      </main>
    </>
  );
};

export default Home;
