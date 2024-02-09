import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  outline?: boolean;
  outlineColor?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  icon?: string;
  onClick?: () => void;
};

export default function ButtonPrimary({
  title,
  outline,
  outlineColor,
  bgColor,
  textColor,
  hoverColor,
  hoverTextColor,
  icon,
  onClick,
}: Props) {
  return (
    <div
      className={`
        ${
          outline
            ? `outline outline-${outlineColor} ${textColor} ${hoverColor} ${hoverTextColor}`
            : `${bgColor} ${textColor} ${hoverColor}`
        } 
        flex justify-center items-center p-2 gap-6 text-center transition-all delay-150 h-[50px] w-full rounded-xl hover:-translate-y-1 hover:scale-110
      `}
      onClick={onClick}
    >
      {title}
      {icon && (
          <Image src={`${icon}`} alt="icon" width={40} height={40} />
      )}
    </div>
  );
}
