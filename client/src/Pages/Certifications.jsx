import React from 'react'
import Certificate from '../Components/Certificate'
import c from '../images/c.png'
import reactImg from '../images/Skills logo/reactImg.png'
import node from '../images/Skills logo/node.png'



const Certifications = () => {
  return (
    <React.Fragment>
        <main className=' bg-slate-800 overflow-hidden'>
            <div className='h-10 w-20 mx-5 text-3xl text-teal-600 font-semibold'>Certifications</div>   
            <Certificate
                imageURL={c}
                courseName='C for Everyone: Structured Programming'
                platform=" Platform: Coursera"
                CertificateLink={"https://coursera.org/share/8832f867bbbf39c0b912740c35af4120"}
            /> 

            <Certificate
                imageURL={reactImg}
                courseName=' Complete Guide to Advance React'
                platform=" Platform: Coursera"
                CertificateLink={"https://coursera.org/share/3bf8bc1eb2ee6effd73cab80354f65ab"}
            /> 

            <Certificate
                imageURL={node}
                courseName='Developing Backend with Node js and Express '
                platform=" Platform: Coursera"
                CertificateLink={"https://coursera.org/share/8832f867bbbf39c0b912740c35af4120"}
            /> 
       
        </main>
    </React.Fragment>  
    )
}

export default Certifications