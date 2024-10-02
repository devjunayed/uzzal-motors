import React, { ReactNode } from 'react'

interface TContainerProps{
  children: ReactNode
}

const Container = ({children}: TContainerProps) => {
  return (
    <div className="mx-10 mt-28">
      {children}
    </div>
  )
}

export default Container
