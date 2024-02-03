import Image from "next/image";
import React from "react";

type Props = {};

export default function PrimaryFooter({}: Props) {
  return (
    <div className="bg-secondary h-50 p-5 md:p-10">
      <div className="flex flex-col space-y-20">
        <div className="flex flex-col">
          <div className="text-md md:text-lg text-quaternary">ระเบียบ</div>
          <div className="flex gap-4">
            <span className="text-quaternary">ติดตามเรา:</span>
            <span>
              <Image
                src="/icons/icons8-facebook-96.png"
                width={25}
                height={25}
                alt="icon-facebook"
              />
            </span>
            <span>
              <Image
                src="/icons/icons8-ig-96.png"
                width={25}
                height={25}
                alt="icon-ig"
              />
            </span>
            <span>
              <Image
                src="/icons/icons8-tiktok-96.png"
                width={25}
                height={25}
                alt="icon-tiktok"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <span className="text-xs text-quaternary">
            ©2024 RABEAB Co., Ltd.
          </span>
        </div>
      </div>
    </div>
  );
}
