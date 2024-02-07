import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function CardContainer({children}: Props) {
  return (
    <div className='relative truncate rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2'>{children}</div>
  )
}