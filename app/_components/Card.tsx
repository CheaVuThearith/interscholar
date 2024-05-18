import { InformationCircleIcon, TvIcon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {
    title:string,
    icon:any
}

const Card = ({title, icon}: Props) => {
  return (
    <div className='size-64 flex flex-col overflow-hidden bg-[#0000002a] rounded-xl'>
        <div className='w-full h-[75%] flex justify-center items-center overflow-hidden'> <InformationCircleIcon className='size-40'/>{icon}</div>
        <p className='text-3xl bg-[#ffffff90] grow flex items-center justify-center'>{title}</p>
    </div>
  )
}

export default Card