import React from 'react'

type Props = {}

export default function PrimaryFooter({}: Props) {
  return (
    <div className='flex justify-center items-center bg-secondary h-40'>
        <span className='text-sm text-white'>©2024 by Pawaris Rabeab | v1.0.0</span>
    </div>
  )
}