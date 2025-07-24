import {assets} from '@/assets/assets';
import Image from 'next/image'
import React, {useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);

  return (
    <>    
    <div className ='fixed top-0 right-0 w-11/ -z-10 translate-y-[-80%]'>
      <Image 
        src={assets.header_bg_color} alt='header background' className='w-full'
      />
    </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[-8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        <a href="#top">
          {/* <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14'/> */}
          <p className='text-3xl font-bold tracking-wide text-black hover:opacity-80 transition cursor-pointer'>
            Reymar<span className='text-primary'>.</span>
          </p>
        </a>
        
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm'> 
          <li><a className='font-ovo' href="#top">Home</a></li>
          <li><a className='font-ovo' href="#about">About me</a></li>
          <li><a className='font-ovo' href="#services">Services</a></li>
          <li><a className='font-ovo' href="#work">My Work</a></li>
          <li><a className='font-ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button>
            <Image 
              src={assets.moon_icon} 
              alt='moon icon' 
              className='w-6' 
            />
          </button>

          <a 
            href="#contact" 
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-300 rounded-full ml-4 font-Ovo"
          > 
            Contact 
            <Image 
              src={assets.arrow_icon} 
              alt="arrow icon" 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image 
              src={assets.menu_black} 
              alt='menu black icon' 
              className='w-6 ' 
            />
          </button>
        </div>


        {/* ---------------- mobile menu ----------------- */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose bg-rose-50 transition duration-500'> 

          <div className='absolute top-5 right-5' onClick={closeMenu}>
            <Image 
              src={assets.close_black} 
              alt='cross icon' 
              className='w-5 cursor-pointer' 
            />
          </div>

          <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
 

      </nav>   
    </>
  )
}                                         

export default Navbar