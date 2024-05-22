import { InformationCircleIcon, TvIcon } from '@heroicons/react/16/solid'
import React, { ReactNode } from 'react'

type Props = {
    title:string,
    children:ReactNode
}

const Card = ({title, children}: Props) => {
  return (
    <div className='size-64 flex flex-col overflow-hidden bg-[#e1f0da] rounded-xl'>
        <div className='w-full h-[75%] flex justify-center items-center overflow-hidden'> {children}</div>
        <p className='text-2xl font-semibold text-[#515050] bg-[#ffffff90] grow flex items-center justify-center'>{title}</p>
    </div>
  )
}


export default Card