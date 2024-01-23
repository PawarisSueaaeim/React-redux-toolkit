"use client";
import { ButtonPrimary } from "@/common/button";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function Home() {
  const username = useAppSelector((state) => state.authSlice.value.username);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gradient-to-t from-primary h-[400px] md:h-[900px]">
        <div className="flex item-center justify-center">
          <div className="flex flex-col pt-20 pl-4 md:pt-40 md:pl-4">
            <div className="text-4xl">สวัสดี, ยินดีต้อนรับ</div>
            <div className="text-3xl">บ้านระเบียบ</div>
            <div className="text-slate-500 text-3xl">ช่วยเหลือเกษตรกรยุคใหม่</div>
            <div className="text-2xl pt-10">สั่งซื้อส้มโอออนไลน์</div>
            <div className="text-2xl">ส่งตรงจากสวนส้มโอ อ.ศรีสัชนาลัย จ.สุโขทัย</div>
            <div className="flex item-center justify-center mt-12">
              <ButtonPrimary title="เลือกสินค้า"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[400px] md:h-[900px] relative">
        <Image
          src="/image/bg-pomelo.jpg"
          alt="pomelo"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </main>
  );
}
