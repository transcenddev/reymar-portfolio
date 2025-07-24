import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My latest work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 my-10 font-Ovo'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita qui dolore nobis ducimus, aliquid reiciendis officiis laudantium beatae cupiditate soluta!</p>

      <div className='grid grid-cols-auto my-10 gap-5'>
        {workData.map((project, index)=>(
          <div key={index} 
          className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
          style={{backgroundImage: `url(${project.bgImage})`}}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div>
                <Image src={assets.send_icon} alt='send icon' className='w-5'/>
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default Work