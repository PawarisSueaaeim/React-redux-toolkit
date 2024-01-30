"use client";
import { ButtonPrimary } from "@/common/button";
import { keepProduct } from "@/redux/cart/cartSlice";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const username = useAppSelector((state) => state.authSlice.value.username);
  const testcart = useAppSelector((state) => state.cartSlice.value.product_name);

  const handleOnClick = () => {
    dispatch(keepProduct("ส้มโอ"));
  };

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
              <Link href='./product'>
                <ButtonPrimary title="เลือกสินค้า" onClick={handleOnClick}/>
              </Link>
            </div>
            {testcart}
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
