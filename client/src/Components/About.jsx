import React from 'react'
// import MyImage from '../images/MyImage.png'

const About = () => {
  return (
    <React.Fragment>
        {/* About Section */}
        <main className='overflow-hidden flex flex-col bg-slate-800 text-white m-0 p-0 '>
            <div className='h-10 w-20 m-5 text-3xl text-teal-600 font-semibold'>
              About
            </div>      
                <div className='text-xl m-8'>      
                    <p>{`As a full stack developer i have good problem-solving and troubleshooting skills and proven experience as a MERN stack developer.`}</p>
                    <br />
                    <p>{`Proficiency in JavaScript, ES6+, and modern front-end, back-end technologies and state management libraries such as Redux.

                        Strong understanding of React, Node.js, Express.js, and MongoDB`}</p>
                    <br />
                    <p>{` I am familiar with tools like Webpack, Babel, and NPM package manager. Understanding of Version control using GIT.

                    Feel free to contact if you want to work with me . `}</p> 
                </div>
      
            
        </main>
    </React.Fragment>
  )
}

export default About