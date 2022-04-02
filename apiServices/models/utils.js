function filterSearch(result, filter) {

    let expression = new RegExp(`${filter}.*`, "i");
    let pokemonFilter = result.filter(pokemon => expression.test(pokemon.name));
    return pokemonFilter;
}

module.exports = { filterSearch }