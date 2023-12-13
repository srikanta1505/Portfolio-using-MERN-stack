import React from 'react'
import exJs from '../images/Skills logo/express.png'
import html from '../images/Skills logo/html.png'
import css from '../images/Skills logo/css.png'
import js from '../images/Skills logo/js.png'
import reactImg from '../images/Skills logo/reactImg.png'
import nodeJs from '../images/Skills logo/node.png'
import mongo from '../images/Skills logo/mongo db.png'
import tailwind from '../images/Skills logo/tailwind.png'
import ts from '../images/Skills logo/ts.png'
import java from '../images/Skills logo/java.png'
import git from '../images/Skills logo/git.png'




const Skills = () => {
  return (
   <React.Fragment>
    <main className='overflow-auto bg-slate-800 flex flex-col h-screen w-screen '>
        
        <div className=' flex flex-col items-center md:grid md:grid-cols-3 md:gap-5 md:grid-flow-row m-12'>
            
            <img src={java} alt="" className='h-36 w-36 m-5 ' />
            <img src={html} alt="" className='h-36 w-36 m-5 ' />
            <img src={css} alt="" className='h-36 w-36 m-5 ' />
            <img src={js} alt="" className='h-36 w-36 m-5 ' />
            <img src={reactImg} alt="" className='h-36 w-36 m-5 ' />
            <img src={nodeJs} alt="" className='h-36 w-36 m-5 ' />
            <img src={exJs} alt="" className='h-36 w-36 m-5 ' />
            <img src={mongo} alt="" className='h-36 w-36 m-5 ' />
            <img src={tailwind} alt="" className='h-36 w-36 m-5 ' />
            <img src={ts} alt="" className='h-36 w-36 m-5 ' />
            <img src={git} alt="" className='h-36 w-36 m-5 ' />
        </div>
    </main>
   </React.Fragment>
  )
}

export default Skills