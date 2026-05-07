import React, { useEffect, useRef, useState } from 'react';
import {AnimationPlaybackControls, motion, useAnimate} from 'framer-motion'


const DateTicker = () => {

  const [isHovered, setIsHovered]=useState(false)
  const animation= useRef<AnimationPlaybackControls | null>(null)
  const[scope, animate]=useAnimate()

  useEffect(()=>{
      animation.current=animate(scope.current, {x:'-50%'}, {duration:30, ease:'linear', repeat:Infinity})

      // animation.current.speed =0.5
  },[animate, scope])

  useEffect(()=>{
      if(animation.current){
          if(isHovered){
              animation.current.speed =0.5
          }else{
              animation.current.speed =1
          }
      }
  },[isHovered])

  return (
    <section className='pt-24 pb-10 relative -mt-1'>

      <div className='overflow-x-clip p-4 flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <motion.div 
        ref={scope}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        className='flex items-center cursor-pointer pr-16 flex-none gap-4 group'>

          {Array.from({length:10}).map((_, i)=>(
            <div key={i} className='flex items-center gap-8 font-medium text-xl group-hover:text-[#FF2020]'>
              <div className='flex items-center gap-2'>
                <span className=" text-2xl">&#10038;</span>
                <span>Big ideas. Bold conversations.</span>
              </div>

              <div>
                <span>Redeemer&apos;s University&apos;s TEDx Talk event is on the way!</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  )
}

export default DateTicker
