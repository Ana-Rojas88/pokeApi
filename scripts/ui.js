const imgMain = document.getElementById('imgMain');
const pokemonName = document.getElementById('pokemonName');
const textId = document.getElementById('textId');
const textExperience = document.getElementById('textExperience');
const textType = document.getElementById('textType');
const textHabilities = document.getElementById('textHabilities');
const textHeight = document.getElementById('textHeight');
const textWeight = document.getElementById('textWeight');
const textStats = document.getElementById('textStats');
const containerFooter = document.getElementById('containerFooter');

const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');

export const renderPokemon = (pokemon) => {
    console.log(pokemon);
    pokemonName.innerHTML = pokemon.name;
    textId.innerHTML = pokemon.info.id;
    textExperience.innerHTML = pokemon.info.base_experience;
    imgMain.src = pokemon.info.sprites.other['official-artwork'].front_default;

    let type = '';
    pokemon.info.types.forEach(element => {
        type += `${element.type.name}<br>`
    });
    textType.innerHTML = type;

    let habilities = '';
    
    pokemon.info.abilities.forEach(element => {
        habilities += `${element.ability.name}<br>`;
    })
    textHabilities.innerHTML = habilities;

    textHeight.innerHTML = pokemon.info.height;

    textWeight.innerHTML = pokemon.info.weight;

    let stats = '';
    pokemon.info.stats.forEach(element => {
        stats += `${element.stat.name}: ${element.base_stat}<br>`
    })
    textStats.innerHTML = stats;
}

export const renderFooter = (element) => {
    console.log(element);
    for (let index = 14; index < element.length; index++) {
        containerFooter.innerHTML += `
        <figure>
                 <button name="${element[index]?.info.id}"  class="pokemonFooter"><img name="${element[index]?.info.id}" class="pokemonFooter" src="${element[index]?.info.sprites.other['official-artwork'].front_default}" alt="${element[index]?.name}"></button>
            </figure>
                `

    }
    document.addEventListener('click', ({ target }) => {
        if (target.classList.contains("pokemonFooter")) {
            let index = element.findIndex((item) => item.info.id == target.getAttribute("name"));
            renderPokemon(element[index]);

        }

    })
}

const renderSearch = (pokemon) => {
    pokemonName.innerHTML = pokemon.name;
    textId.innerHTML = pokemon.id;
    textExperience.innerHTML = pokemon.base_experience;
    imgMain.src = pokemon.sprites.other['official-artwork'].front_default;

    let type = '';
    pokemon.types.forEach(element => {
        type += `${element.type.name}<br>`
    });
    textType.innerHTML = type;

    let habilities = '';
    pokemon.abilities.forEach(element => {
        habilities += `${element.ability.name}<br>`;
    })
    textHabilities.innerHTML = habilities;

    textHeight.innerHTML = pokemon.height;

    textWeight.innerHTML = pokemon.weight;

    let stats = '';
    pokemon.stats.forEach(element => {
        stats += `${element.stat.name}: ${element.base_stat}<br>`
    })
    textStats.innerHTML = stats;

}

btnSearch.addEventListener('click', async () => {
    try {
        let URL = `https://pokeapi.co/api/v2/pokemon/${searchInput.value}`;
        const { data } = await axios.get(URL);
        renderSearch(data);
    } catch (error) {
        console.log(error);
    }
});