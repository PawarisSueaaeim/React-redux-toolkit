import { CardContainer } from "@/common/card";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="pt-40 pb-10 px-10">
      <CardContainer>
        <div className="relative h-96">
          <Image
            src="/image/map.png"
            alt="map"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-10">
          <div className="text-md">
            <strong>ระเบียบ</strong> คำปันผ้าทอบ้านยายคำปัน
          </div>
          <div className="text-sm text-quaternary">
            หมู่บ้านปลายนา ตำบลบ้านตึก
          </div>
          <div className="text-sm text-quaternary">
            อำเภอศรีสัชนาลัย จังหวัดสุโขทัย
          </div>
          <div className="flex text-xs text-quaternary mt-4">
            <Image
              src="/icons/icons8-phone-90.png"
              alt="phone"
              width={30}
              height={30}
            />
            : 095-579-9772
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <div className="flex justify-start items-center text-xs">
              <Image
                src="/icons/icons8-facebook-96.png"
                alt="facebook"
                width={30}
                height={30}
                className="transition-all hover:scale-150"
              />
              <span>: Facebook Fanpage Rabeab</span>
            </div>
            <div className="flex justify-start items-center text-xs">
              <Image
                src="/icons/icons8-ig-96.png"
                alt="ig"
                width={30}
                height={30}
                className="transition-all hover:scale-150"
              />
              <span>: Intargram Rabeab</span>
            </div>
            <div className="flex justify-start items-center text-xs">
              <Image
                src="/icons/icons8-tiktok-96.png"
                alt="tiktok"
                width={30}
                height={30}
                className="transition-all hover:scale-150"
              />
              <span>: Tiktok Rabeab</span>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
