import React from "react";

type Props = {
  title?: string;
  bgColor: string;
  onClick?: () => void;
};

export default function ButtonCircle({ bgColor, title, onClick }: Props) {
  return (
    <div className={`transition-all rounded-full h-10 w-10 ${bgColor} hover:scale-150 `} onClick={onClick}>
      {title}
    </div>
  );
}
