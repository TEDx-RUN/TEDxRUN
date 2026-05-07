import React, {useRef}  from 'react'
import featureIcon1 from '@/assets/featureIcon1.svg'
import featureIcon2 from '@/assets/featureIcon2.svg'
import featureIcon3 from '@/assets/featureIcon3.svg'
import { motion, useInView } from 'framer-motion' 

const Event = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24 bg-event bg-cover relative'>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className='container relative z-10'>
          <div className='flex justify-center gap-16 flex-col md:flex-row'>
            <motion.div className=''>
              <motion.h2 
                 style={{
                  opacity:isInView ? 1 :0,
                  transitionDuration:'0.5s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'1.3s'
                }}
              className='text-6xl font-bold '>Upcoming Events</motion.h2>


              <motion.p 
                style={{
                  opacity:isInView ? 1 :0,
                  y:isInView ? 10:0,
                  transitionDuration:'0.6s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'1.6s'
                }}
              className='max-w-[500px] mt-8 leading-7 justify-start'>The stage is set, and the countdown begins! <span className='text-[#FF2020] font-semibold text-xl'>TEDxRUN</span> 2026
              is bringing you an electrifying lineup of industry leaders from diverse fields, including content creation, music, technology, business, and more to spark YOU  to challenge the status quo.        
              This year theme, <span className='font-bold  '>NEXUS</span>, dares us to explore new frontiers in content creation, music, tech, business, and beyond. Get ready for groundbreaking insights,
               powerful networking, and an unforgettable exchange of ideas that will leave you inspired and unstoppable.
              participants.
              </motion.p>
            </motion.div>

            <motion.div className='flex flex-col gap-10'>
                <motion.div
                  style={{
                    opacity:isInView ? 1 :0,
                    transitionDuration:'0.6s',
                    transitionTimingFunction:'ease-in',
                    transitionDelay:'1.9s'
                  }}
                >
                  <div className='flex items-center gap-2'>
                      <img src={featureIcon1} alt='icon' className='bg-[#FF2020] text-white' />
                      <h2>Uncharted Tech </h2>
                  </div>
                  <p className='text-sm mt-2 max-w-[300px]'>Get an exclusive deep dive into emerging job opportunities, and the skills you need to thrive in the evolving tech landscape.
                  </p>
                </motion.div>

              <motion.div
                 style={{
                  opacity:isInView ? 1 :0,
                  transitionDuration:'0.6s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'2.2s'
                }}
              >
                <div className='flex items-center gap-2'>
                    <img src={featureIcon2} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2> Uncharted Career Talks</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>Navigate the future of work with insights from top professionals who will reveal the secrets to landing and excelling in today&apos;s digital job market.</p>
              </motion.div>

              <motion.div
                 style={{
                  opacity:isInView ? 1 :0,
                  transitionDuration:'0.6s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'2.6s'
                }}
              >
                <div className='flex items-center gap-2'>
                    <img src={featureIcon3} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2>Uncharted Personal Development</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>Upgrade your mindset, master productivity hacks, and unlock strategies for personal and professional success.</p>
              </motion.div>

            </motion.div>
          </div>
        </div>

        
    </section>
  )
}

export default Event
