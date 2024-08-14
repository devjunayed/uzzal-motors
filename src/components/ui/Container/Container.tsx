import React, { ReactNode } from 'react'

interface TContainerProps{
  children: ReactNode
}

const Container = ({children}: TContainerProps) => {
  return (
    <div className="mx-10">
      {children}
    </div>
  )
}

export default Container
