const { response, request } =  require('express');

const { performSearch } = require('../clients/pokeApi')

const pokemonGet = async (req = request, res = response) => {

    const txtFilter = req.query.txtFilter;

    const result = await performSearch(txtFilter);       

    //return result;
    res.json( {result: result });
}

module.exports =  pokemonGet 