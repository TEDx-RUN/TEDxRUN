import React from 'react'
import { twMerge } from 'tailwind-merge'

type Prop ={
    text:string
    bg?:boolean
    icon:string,
    href?:string
}
const Button = ({text, bg, icon, href}:Prop) => {
  return (
    <a href={href} className={twMerge('px-6 py-4 border border-[#FF2020] text-[#FF2020] flex items-center gap-2 rounded-full text-sm',  bg && 'bg-[#FF2020] text-white')}>
     {text} <span><img src={icon} alt='icon' /></span>
    </a>
  )
}

export default Button
