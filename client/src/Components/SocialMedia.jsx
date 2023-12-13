import React,{Fragment} from 'react'
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <Fragment>
         
        <div className='flex gap-3 mt-5 ' >
            <a href="https://www.github.com" target='blank' className='text-2xl text-teal-500 transform hover:scale-150 hover:text-white '><FaGithub  /></a>
            <a href="https://www.facebook.com" target='blank' className='text-2xl text-teal-500 transform hover:scale-150 hover:text-white '><CiLinkedin/></a>
            <a href="https://www.facebook.com" target='blank' className='text-2xl text-teal-500 transform hover:scale-150 hover:text-white '><RiFacebookCircleFill/></a>
            <a  href="https://www.twitter.com" target='blank' className='text-2xl text-teal-500 transform hover:scale-150 hover:text-white '><AiFillTwitterCircle /></a>
        </div>
    </Fragment>
  )
}

export default SocialMedia