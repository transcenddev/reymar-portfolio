import {assets} from '@/assets/assets';
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="">
          <Image src={assets.logo} className='w-28 cursor-pointer mr-14'/>
        </a>
        
        <ul className=''>
          <li><a href="#top">Home</a></li>
          <li><a href="#top">About me</a></li>
          <li><a href="#top">Services</a></li>
          <li><a href="#top">My Work</a></li>
          <li><a href="#top">Contact me</a></li>
        </ul>

        <div>
          <a href="#contact"> <Image src={assets.arrow_icon} class name='w-3 h-6 cursor-pointer' alt="arrow icon" />
          </a>
        </div>
      </nav>
    </>
  )
}                                         

export default Navbar