import React, {useRef} from 'react'
import runImg from '@/assets/runImg.jpg'
import featureIcon1 from '@/assets/featureIcon1.svg'
import featureIcon2 from '@/assets/featureIcon2.svg'
import featureIcon3 from '@/assets/featureIcon3.svg'
import { motion, useInView } from 'framer-motion' 

const AboutRun = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24'>
      <div className='container'>
        <motion.div className='flex flex-col-reverse md:flex-row  gap-20'>
            
            <motion.div className='flex-1'>
                <motion.h2 
                    style={{
                        opacity:isInView ? 1 :0,
                        transitionDuration:'0.5s',
                        transitionTimingFunction:'ease-in',
                        transitionDelay:'1.3s'
                      }}
                className='text-3xl font-bold'>TedxRUN?</motion.h2>
                <motion.p 
                  style={{
                    opacity:isInView ? 1 :0,
                    y:isInView ? 10:0,
                    transitionDuration:'0.8s',
                    transitionTimingFunction:'ease-in',
                    transitionDelay:'1.8s'
                  }}
                className='mt-6 leading-7'> <span className='text-[#FF2020] font-semibold text-xl'>TEDxRUN</span> is an independently organized TED talk where curiosity meets community, and in this case the community
                being members of Redeemer&apos;s University. TEDxRUN is a unique first of it&apos;s kind gathering in Redeemer&apos;s University aimed
                at unleashing new ideas in territories yet to be explored with the potential to inform and inspire. We intend to bring together a group
                of experts speakers and doers across a wide range of field to share new ideas.<br/><br/>
                Building on t he success of the first edition, this new edition intends to bring
together a group of expert speakers, innovators, and doers across a wide
range of disciplines to share transformative ideas under the theme:<span> </span>
                <span className='text-[#FF2020] font-semibold text-xl'>NEXUS</span>
                </motion.p>
                
            </motion.div>

            <motion.div className='flex-1'>
                <motion.div
                 style={{
                    opacity:isInView ? 1 :0,
                    
                    transitionDuration:'0.5s',
                    transitionTimingFunction:'ease-in',
                    transitionDelay:'0.8s'
                  }}
                >
                <img src={runImg} alt='image1' className='w-full h-auto' />
                </motion.div>
            </motion.div>

        </motion.div>

        <motion.h2 
        style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'2.5s'
          }}
        className='mt-8'>What <span className='text-[#FF2020] font-semibold text-xl'>TEDxRUN</span> offers</motion.h2>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
            <motion.div
              style={{
                opacity:isInView ? 1 :0,
                y:isInView ? -20:0,
                transitionDuration:'0.5s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'2.9s'
              }}
            >
                <div className='flex items-center gap-2'>
                    <img src={featureIcon1} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2>Inspiring Talks</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>TEDxRUN talks showcase innovative ideas, cutting-edge research, and inspiring stories from experts across various 
                  fields. Speakers share their passions, experiences, and insights, sparking thought-provoking discussions and debates.
                </p>
            </motion.div>


            <motion.div
              style={{
                opacity:isInView ? 1 :0,
                y:isInView ? -20:0,
                transitionDuration:'0.8s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'3.3s'
              }}
            >
                <div className='flex items-center gap-2'>
                    <img src={featureIcon2} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2>Immersive Experience</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>TEDxRUN incorporates interactive breakout sessions, storytelling, visuals, and performances, 
                  creating an engaging and immersive experience for all attendees.</p>
            </motion.div>

            <motion.div
              style={{
                opacity:isInView ? 1 :0,
                y:isInView ? -20:0,
                transitionDuration:'0.8s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'3.7s'
              }}
            >
                <div className='flex items-center gap-2'>
                    <img src={featureIcon3} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2>Networking Opportunities</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>TEDxRUN brings together curious, open-minded, and enthusiastic individuals from diverse backgrounds. It serves as a platform to engage with speakers, 
                  ask questions, and build meaningful connections.
                </p>
            </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

export default AboutRun
