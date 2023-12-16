import React from 'react'
import Skill from '../Components/Skill'
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
    <main className='bg-slate-800 h-full w-full '>
        
        <div className=' flex flex-col items-center md:grid md:grid-cols-3 md:gap-5 md:grid-flow-row '>
            <Skill 
              imageName={java}
            />

            <Skill 
              imageName={html}
            />
            <Skill 
              imageName={css}
            />

            <Skill 
              imageName={js}
            />
            <Skill 
              imageName={reactImg}
            />

            <Skill 
              imageName={nodeJs}
            />
            <Skill 
              imageName={exJs}
            />
            <Skill 
              imageName={mongo}
            />
            <Skill 
              imageName={tailwind}
            />
            <Skill 
              imageName={ts}
            />
            <Skill 
              imageName={git}
            />            

            </div>
    </main>
   </React.Fragment>
  )
}

export default Skills






