import React from 'react'
import { Instagram, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <section id='contact-us' className='py-24'>
      <div className='container'>
        <hr />
        <div className='w-full flex flex-col md:flex-row justify-between'>
            <h2 className='font-bold text-4xl mt-10'>TEDxRUN</h2>


            <div>
                <p className='max-w-[300px] mt-10'>TED Members make our mission possible by supporting global access to inspiring ideas. Plus, 
                    they get to attend exclusive events. Help support a better future and a brighter you.</p>

                <div className='flex items-center mt-10 gap-4'>
                    <a href='https://www.linkedin.com/company/tedxrun/'>
                    <Linkedin />
                    </a>
                    <a href='https://www.instagram.com/tedx_run?igsh=OGowY2h3OXcwZzI0'>
                      <Instagram />
                    </a>
                </div>
            </div>
        </div>

        <p className='text-[12px] text-gray-400 text-center max-w-[500px] mx-auto mt-12'>This independent TEDx event is operated under licence from TED.
        All rights reserved. © 2026 TEDxRedeemers University.</p>
      </div>
    </section>
  )
}

export default Footer
