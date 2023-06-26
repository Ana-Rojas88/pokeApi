export const getData = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const { data: { results } } = await axios.get(URL);
    return results;
}

export const getDataUnique = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

