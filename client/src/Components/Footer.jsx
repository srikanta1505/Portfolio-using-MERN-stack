import React from 'react'
import { MdCopyright } from "react-icons/md";
import SocialMedia from './SocialMedia';


const Footer = () => {
  return (
    <React.Fragment>
      <footer className='flex flex-col items-center bg-black h-28 w-full text-white text-center'>
        <SocialMedia />
        <p> <MdCopyright className='h-5 w-5 inline-block text-teal-600'/>2023 Designed & Developed by Srikant.</p>
        <p>All Rights Reserved</p>
      </footer>
    </React.Fragment>
  )
}

export default Footer