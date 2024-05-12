"use client"
import React, { useState } from 'react'

type Props = {}

const SearchBar = (props: Props) => {
const filterButtons = ["Scholarships", "Extra-Curricular", "Internships"]
const [filterMenuOn, setFilterMenuOn] = useState<boolean>(false)
  return (
    <div className='flex flex-col z-20 w-full fixed gap-y-4 justify-center'>
    <div className='flex items-center h-14 justify-around'>
      {/* Search bar */}
<div className='rounded-full border h-14 overflow-hidden relative border-black w-[80%] flex items-center  justify-center'>
    <input type="text" className='w-[100%] pl-10 p-5'/>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-2 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>  
  </div>
  {/* Filter Menu toggle */}
  <div onClick={()=>{setFilterMenuOn((f)=>!f)}} className={`h-14 transition-all duration-200 border rounded-2xl justify-center flex cursor-pointer items-center border-black w-14 ${filterMenuOn && "bg-[#04364a]"}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${filterMenuOn ? "white" : "currentColor"}`} className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
  </div>
    </div>
    {/* Filter buttons */}
{filterMenuOn && <div className='flex justify-center gap-x-5'>
{filterButtons.map((button, index)=>(
<button className='border hover:bg-[#04364a] transition-all duration-200 hover:text-white border-black px-4 py-2 rounded-md' key={index}>{button}</button>
))}
    </div>}
    </div>

    )
}

export default SearchBar