
import React, { useState,useRef } from 'react'
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion, useInView } from 'framer-motion'

const Faq = () => {

    const faqs = [
        {
            question: "What is TedxRUN",
            answer: "TEDxRUN is an independently organized TEDx event held at Redeemers University (RUN). It follows the spirit of TED's mission—Ideas Worth Spreading—by bringing together speakers and attendees to share innovative ideas, inspire change, and spark meaningful conversations.",
        },
        {
            question: "Is attendance virtual or in-person?",
            answer: "TEDxRUN is an in-person event, allowing attendees to engage directly with speakers, network with like-minded individuals, and fully experience the TEDx atmosphere.",
        },
        {
            question: "How can I prepare for the TEDx talk?",
            answer: "You can prepare by registering early, researching the speakers, and engaging with the TEDxRUN community. Bring essentials like a notebook and arrive on time for a great experience. Stay open-minded, network, and share insights from the event.",
        },
        {
            question: "How can my company get involved as a sponsor?",
            answer: "Companies can support TEDxRUN by becoming sponsors. To explore sponsorship options, contact Tedxruninfo@gmail.com",
        },
        {
            question: "When is TEDxRUN happening?",
            answer: "The proposed date for TEDxRUN is May 9th 2026.Stay updated by following TEDxRUN official channels or subscribing to notifications.",
        },
        {
            question: "Who can attend TEDxRUN?",
            answer: "TEDxRUN is open to students, professionals, and anyone interested in thought-provoking ideas and innovative discussions. Seats may be limited, so early registration is recommended.",
        },
    ];

    const [selectedIndex, setSelectedIndex] =useState(0)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id='faq' className='py-24'>
      <div className='container'>
        <motion.div 
         style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'0.8s'
          }}
        className='flex justify-center'>
            <div className='inline-flex border border-[#FF2020] gap-2 text-[#FF2020] px-3 py-1 rounded-full uppercase items-center'>
                <span className='text-sm'>&#10038;</span>
                <span>FAQ</span>
            </div>
        </motion.div>

        <motion.h2
         style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'1s'
          }}
        className="text-5xl font-medium mt-6 text-center max-w-xl mx-auto">Questions? We&apos;ve got <span className="text-[#FF2020]">answers</span></motion.h2>

        <motion.div 
         style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'1.4s'
          }}
        className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs.map((faq, faqIndex)=>(
                <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6 ">
                <div className="flex items-center justify-between cursor-pointer" onClick={()=>setSelectedIndex(faqIndex)}>
                    <h3 className="font-medium">{faq.question}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className={twMerge("feather feather-plus flex-shrink-0 text-[#FF2020] transition duration-300", selectedIndex === faqIndex && 'rotate-45')}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>

                <AnimatePresence>
                        {selectedIndex === faqIndex && (
                            <motion.div 
                            initial={{
                                height:0,
                                marginTop:0
                            }}
                            animate={{
                                height:'auto',
                                marginTop:24
                            }}
                            exit={{
                                height:0,
                                marginTop:0
                            }}
                            className={twMerge("overflow-hidden")}>
                                <p className="text-white/50">{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Faq
