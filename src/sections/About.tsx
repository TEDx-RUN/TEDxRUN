import React, {useRef} from 'react'
import tedImage1 from '@/assets/tedImage2.jpg'
import { motion, useInView } from 'framer-motion' 


const About = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24'>
      <div className='container'>
        <div className='flex flex-col md:flex-row  gap-20'>

          <motion.div className='flex-1'>
            <motion.div
            style={{
              opacity:isInView ? 1 :0,
             
              transitionDuration:'1s',
              transitionTimingFunction:'ease-in',
              transitionDelay:'0.3s',
            }}
            >
              <div>
              <img src={tedImage1} alt='image1' className='w-full h-auto' />
              </div>
            </motion.div>
          </motion.div>

          <motion.div className='flex-1'>
            <motion.h2 
             style={{
              opacity:isInView ? 1 :0,
              y: isInView ? 10 :0,
              transitionDuration:'0.8s',
              transitionTimingFunction:'ease-in',
              transitionDelay:'1s',
            }}
            className='text-3xl font-bold'>What is TEDx?</motion.h2>
            <motion.p 
              style={{
                opacity:isInView ? 1 :0,
                y: isInView ? 20 :0,
                transitionDuration:'0.8s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'1.5s',
              }}
            className='mt-6 leading-7'>
              TED is a non-profit organization that believes powerful ideas, when powerfully presented, inspire action—moving us to feel, think differently, and take action.
              TEDx is a grassroots initiative created in the spirit of TED&apos;s mission to research and share ideas worth spreading. It brings the essence of TED to local communities worldwide through independently organized TEDx events.
              These events are led by passionate individuals who seek to uncover new ideas, share groundbreaking research, and spark meaningful conversations in their communities. Featuring live speakers and recorded TED Talks, TEDx events operate under a free license granted by TED.
              Although TED does not control these events, organizers follow TED&apos;s format and guidelines on curation, speaker coaching, and event organization. With over 3,000 events held annually, TEDx continues to be a catalyst for inspiration, innovation, and global dialogue.

            </motion.p>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
