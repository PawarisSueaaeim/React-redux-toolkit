import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_POKEMON_API || '';

export const getListPokemons = () => {
    const response = axios.get(baseUrl)
    return response
};