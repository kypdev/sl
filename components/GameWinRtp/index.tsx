import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

type GameWinRtpProps = {
  image: string
  bg: string
  className?: string
}

const GameWinRtp = ({ image, bg, className }: GameWinRtpProps) => {
  return (
    <div className=''>
      <Image
        src={image}
        alt={''}
        width={376}
        height={180}
        className={`${style.content} rounded-t-2xl`}
      />
      <div
        className={cn(
          `absolute h-[11vw] w-[24.5vw] top-[29vw] backdrop-blur-xl bg-white/30 ${style.content}`,
          className
        )}
      >
        <p className='text-white'>{bg}</p>
      </div>
    </div>
  )
}

export default GameWinRtp
