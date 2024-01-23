import Link from 'next/link'
import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";

type Props = {}

export default function PrimaryNavbar({}: Props) {
  return (
      <div className='flex justify-between items-center px-2 py-1 text-slate-900 h-20'>
        <div className='flex gap-10 ml-10'>
          <span className='text-lg font-semibold p-3'><Link href="/">บ้านระเบียบ</Link></span>
          <ul className='flex gap-5 justify-center items-center'>
            <li className='hover:bg-slate-300 ease-out duration-500 rounded-md p-3'><Link href="/aboutus"></Link>เกี่ยวกับเรา</li>
            <li className='hover:bg-slate-300 ease-out duration-500 rounded-md p-3'><Link href="contactus"></Link>ติดต่อเรา</li>
          </ul>
        </div>
        <div className='flex justify-center items-center text-[22px] mr-10 relative h-20 w-20'>
          <FaShoppingBasket />
          <div className='absolute bg-red-500 rounded-full w-5 h-5 flex items-center justify-center right-5 top-5'>
            <span className='text-sm'>1</span>
          </div>
        </div>
      </div>
  )
}