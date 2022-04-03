function filterSearch(data, filter) {

    let expression = new RegExp(`${filter}.*`, "i");
    let pokemonFilter = data.filter(pokemon => expression.test(pokemon.name));
    return pokemonFilter;
}

module.exports = { filterSearch }