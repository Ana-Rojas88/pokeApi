import { getData, getDataUnique } from "./scripts/process.js";
import { renderPokemon, renderFooter } from "./scripts/ui.js";

let data;

const mainFunction = async () => {
    data = await getData();
    let responseInfo = [];
    data.forEach(element => {
        let infoPokemons = getDataUnique(element.url);
        responseInfo.push(infoPokemons)
    });
    const newResponse = await Promise.all(responseInfo);
    data.forEach((_, index) => {
        data[index].info = newResponse[index];
    })
    renderPokemon(data[18]);
    renderFooter(data);

}

mainFunction();

