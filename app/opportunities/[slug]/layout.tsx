import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

const layout = ({children}: Props) => {
  return (
    <div className=' py-10 max-w-screen-2xl mx-auto'
    >{children}</div>
  )
}

export default layout