import React, { useState } from 'react'
import tedxrunLogo from '@/assets/tedxrun-logo.svg'
import solaTicket from '@/assets/solar_ticket.svg'
import Button from '@/components/Button';
import { twMerge } from 'tailwind-merge'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'

const Navbar = () => {

    const navLinks = [
        { label: "HOME", href: "#hero" },
        { label: "SPEAKERS", href: "#speakers" },
        { label: "FAQ", href: "#faq" },
        { label: "CONTACT US", href: "#contact-us" },
    ];
    const [isOpen, setIsOpen]=useState(false)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickMobileNav =(e:any)=>{
      e.preventDefault();
      setIsOpen(false)
  
      const url =new URL(e.currentTarget.href);
      const hash =url.hash
  
      const target =document.querySelector(hash);
  
      if(!target) return;
      target.scrollIntoView({behavior:'smooth'})
  
    }

  return (
    <>
    <section className='py-4 lg:py-8 fixed top-0 z-50 w-full '>
      <div className='container max-w-5xl'>
      <div className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur">
        <div className='flex items-center justify-between bg-white/20 rounded-[27px] py-2 px-4'>
            <div>
                <img src={tedxrunLogo} alt='tedxrun-logo' width={150} height={150} />
            </div>

            <div className='hidden lg:flex justify-center items-center'>
                <nav className='flex items-center gap-6 font-medium'>
                    {navLinks.map((link)=>(
                        <a key={link.label} onClick={handleClickMobileNav} href={link.href} className='text-white text-sm'>{link.label}</a>
                    ))}
                </nav>
            </div>
            
            <div className='hidden lg:flex'>
            <Button href='https://app.ibloov.com/event/CTZOB2ZRFrz' text='GET TICKETS' icon={solaTicket} bg />
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className="feather feather-menu md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                <line x1="3" y1="6" x2="21" y2="6"  className={(twMerge('origin-left  transition duration-200', isOpen && 'rotate-45 -translate-y-1'))}></line>
                <line x1="3" y1="12" x2="21" y2="12" className={(twMerge(' transition duration-200',isOpen && 'opacity-0'))}></line>
                <line x1="3" y1="18" x2="21" y2="18" className={(twMerge('origin-left  transition duration-200',isOpen && '-rotate-45 translate-y-1'))}></line>
              </svg>
            </div>

        </div>
            <AnimatePresence>
                    {isOpen && 
                        <motion.div 
                        initial={{height:0}}
                        animate={{height:'auto'}}
                        exit={{height:0}}
                        className="overflow-hidden">
                            <div className="flex flex-col items-center gap-4 py-4">
                                {navLinks.map(link=>(
                                    <a href={link.href} key={link.label} className="">{link.label}</a>
                                ))}
                                <Button text='GET TICKETS' icon={solaTicket} bg />
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
        </div>
      </div>
    </section>

    </>
  )
}

export default Navbar
