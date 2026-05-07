import React, {useRef}  from 'react'
import image1 from '@/assets/tedImage3.jpg'
import { motion, useInView } from 'framer-motion'

const Cta = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24'>
      <div className='container'>
        <div className='w-full'>
        
        <motion.div
         style={{
          opacity:isInView ? 1 :0,
          transitionDuration:'0.8s',
          transitionTimingFunction:'ease-in',
          transitionDelay:'0.5s'
        }}>

          <img src={image1} alt='img' className='w-full h-auto' />
        </motion.div>
        
        <motion.div className='flex flex-col justify-end items-end -mt-16 md:-mt-28'>
          <motion.div 
           style={{
            opacity:isInView ? 1 :0,
            y:isInView ? -30:0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'1.3s'
          }}
          className=' max-w-[600px]'>
            <h2 className='font-bold text-4xl md:text-6xl '>Be Audacious</h2>
            <p className='text-2xl md:text-4xl mt-6'>Join the <span className='text-[#FF2020] font-semibold text-2xl'>TEDxRUN</span> Movement in 
            <span className='font-semibold'> Redeemer&apos;s University </span></p>
            <h2 className='text-2xl md:text-3xl max-w-[600px] mt-4'>Where like minds meet, interact, and are educated to create a lasting impact in the society.</h2>
          </motion.div>
        </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Cta
