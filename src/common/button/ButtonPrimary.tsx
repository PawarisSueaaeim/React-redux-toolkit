import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
};

export default function ButtonPrimary({ title, onClick }: Props) {
  return (
    <button className="transition-all delay-150 h-[50px] w-[150px] bg-tertiary rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-quaternary text-white" onClick={onClick}>
      {title}
    </button>
  );
}
