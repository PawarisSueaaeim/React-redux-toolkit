import React from "react";
import { getListPokemons } from "@/service/api/pokemon";

type Props = {};

type list = {
  name: string;
  url: string;
};

export default async function Product({}: Props) {
  const data = await getListPokemons(20, 0);
  console.log(data)

  return (
    <div className="flex items-center">
      <div className="p-10">
        {data.map((list: list, index: number) => {
          return <div key={list.name + index}>
              {list.name}
            </div>;
        })}
      </div>
    </div>
  );
}
