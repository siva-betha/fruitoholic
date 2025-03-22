import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({title, subText, style, titleStyle, subTextStyle}) => {
  return (
    <div className={twMerge("w-full h-60 flex flex-col items-center justify-center gap-4",style)}>
        <h1 className={twMerge('font-bold text-4xl', titleStyle)}>
            {title}
        </h1>
        <p className={twMerge('text-slate-400', subTextStyle)}>
            {subText}
        </p>
    </div>
  )
}

export default Card