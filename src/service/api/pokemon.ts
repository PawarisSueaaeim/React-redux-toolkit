import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_POKEMON_API || '';

export const getListPokemons = async () => {
    try {        
        const response = await axios.get(baseUrl + '?limit=100000&offset=0')
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
};