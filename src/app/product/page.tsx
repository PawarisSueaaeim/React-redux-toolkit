import { getListPokemons } from "@/service/api/pokemon";
import axios from "axios";
import React from "react";

type Props = {};

const baseUrl = process.env.NEXT_PUBLIC_POKEMON_API || "";

export default function Product({}: Props) {
  const response = axios.get(baseUrl);
  console.log(response);

  return <div>Product</div>;
}
