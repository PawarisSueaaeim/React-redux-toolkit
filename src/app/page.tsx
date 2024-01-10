"use client"
import Login from './login'
import { useAppSelector } from '@/redux/store'

export default function Home() {

  const username = useAppSelector((state) => state.authSlice.value.username)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login/>

      <h1>username: {username}</h1>
    </main>
  )
}
