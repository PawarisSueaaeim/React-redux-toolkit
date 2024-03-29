"use client";
import { ButtonCircle, ButtonPrimary } from "@/common/button";
import { selected } from "@/redux/feature/selectProductSlice";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const imgSrc = useAppSelector((state) => state.selectProductSlice.img);

  const handleOnClickNavy = () => {
    dispatch(selected("navy"));
  };

  const handleOnClickGreen = () => {
    dispatch(selected("green"));
  };

  const handleOnClickWhite = () => {
    dispatch(selected("white"));
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gradient-to-t from-primary h-full">
        <div className="flex item-center justify-center">
          <div className="flex flex-col pt-20 pl-4 md:pt-40 md:pl-4">
            <div className="text-4xl">สวัสดี, ยินดีต้อนรับ</div>
            <div className="text-slate-500 text-3xl">ระเบียบ</div>
            <div className="text-slate-500 text-3xl pt-2">
              กางเกงสแล็คผู้ชาย
            </div>
            <div className="text-slate-500 text-lg text-secondary">
              อัพเดทลุคของคุณด้วยกางเกงที่เข้ากับทุกโอกาส
            </div>
            <div className="text-2xl pt-10">คุณภาพดี</div>
            <div className="text-2xl">MADE IN THAILAND</div>
            <div className="text-2xl">HAND MADE</div>
            <div className="flex flex-col item-center justify-center mt-12 mb-6 gap-4">
              <Link href="">
                <ButtonPrimary
                  title="เลือกสินค้าผ่าน Shopee"
                  outline={true}
                  outlineColor="[#FF4500]"
                  textColor="text-[#FF4500]"
                  hoverColor="hover:bg-[#FF4500]"
                  hoverTextColor="hover:text-white"
                  icon={"/icons/icons8-shopee-144.png"}
                />
              </Link>
              <Link href="">
                <ButtonPrimary
                  title="เลือกสินค้าผ่าน Lazada"
                  outline={true}
                  outlineColor="[#DB0011]"
                  textColor="text-[#DB0011]"
                  hoverColor="hover:bg-[#DB0011]"
                  hoverTextColor="hover:text-white"
                  icon={"/icons/lazada.png"}
                />
              </Link>
            </div>
            <div className="flex justify-center m-10 gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <ButtonCircle
                  bgColor="bg-[#0C2D57]"
                  onClick={handleOnClickNavy}
                />
                <span className="text-sm">สีกรม</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <ButtonCircle
                  bgColor="bg-[#12372A]"
                  onClick={handleOnClickGreen}
                />
                <span className="text-sm">สีเขียวขี้ม้า</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <ButtonCircle
                  bgColor="bg-[#FDF0D1]"
                  onClick={handleOnClickWhite}
                />
                <span className="text-sm">สีครีม</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[400px] md:h-[900px] relative">
        <Image src={imgSrc} alt="pomelo" layout="fill" objectFit="cover" />
      </div>
    </main>
  );
}
