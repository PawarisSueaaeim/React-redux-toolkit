import React from 'react'

type Props = {}

export default function PrimaryNavbar({}: Props) {
  return (
    <div className='flex justify-between items-center px-2 py-1 bg-orange-400 text-slate-50 h-12'>
        <span className='text-lg font-semibold'>Pokemon Shop</span>
        <ul className='text-base flex items-center justify-center gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}