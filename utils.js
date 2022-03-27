function filtrarBusqueda(resultado, filtro) {

    let expresion = new RegExp(`${filtro}.*`, "i");
    let pokemonFiltrado = resultado.filter(pokemon => expresion.test(pokemon.name));
    return pokemonFiltrado;
}

module.exports = { filtrarBusqueda }