import Link from 'next/link'
import React from 'react'

type Props = {}

export default function PrimaryNavbar({}: Props) {
  return (
      <div className='flex justify-between items-center px-2 py-1 text-slate-900 h-20 fixed'>
        <div className='flex gap-10 md:ml-10'>
          <span className='text-lg md:text-2xl font-semibold p-3'><Link href="/">ระเบียบ</Link></span>
          <ul className='flex gap-5 justify-center items-center'>
            <li className='hover:bg-slate-300 ease-out duration-500 rounded-md p-3 text-lg md:text-2xl'><Link href="/aboutus">เกี่ยวกับเรา</Link></li>
            <li className='hover:bg-slate-300 ease-out duration-500 rounded-md p-3 text-lg md:text-2xl'><Link href="/contactus">ติดต่อเรา</Link></li>
          </ul>
        </div>
      </div>
  )
}