"use client"
import { useAppSelector } from '@/redux/store'

export default function Home() {

  const username = useAppSelector((state) => state.authSlice.value.username)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='flex w-full bg-slate-500'>
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          <div className='bg-black row-span-3'>
            <span className='text-[72px]'>สวัสดี, ยินดีต้อนรับ</span>
          </div>
          <div className='bg-lime-500 col-span-2 w-full'>
            <span className=''>text</span>
          </div>
          <div className='bg-cyan-300 row-span-2 col-span-2 w-full'>
            <span className=''>3</span>
          </div>
        </div>
      </div>
    </main>
  )
}
