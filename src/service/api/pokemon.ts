import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_POKEMON_API || '';

export const getPokemon = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
};

export const getListPokemons = async (limit: number, offset: number) => {
    try {        
        const response = await axios.get(baseUrl + `?limit=${limit}&offset=${offset}`)
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
};