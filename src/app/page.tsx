"use client";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const username = useAppSelector((state) => state.authSlice.value.username);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
    </main>
  );
}
