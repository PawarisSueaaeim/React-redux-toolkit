import React from "react";
import { getListPokemons } from "@/service/api/pokemon";

type Props = {};

type list = {
  name: string;
  url: string;
};

export default async function Product({}: Props) {
  const data = await getListPokemons();
  console.log(data);

  return (
    <div>
      {data.map((list: list, index: number) => {
        return <div key={list.name + index}>{list.name}</div>;
      })}
    </div>
  );
}
