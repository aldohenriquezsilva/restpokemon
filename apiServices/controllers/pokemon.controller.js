const { response, request } =  require('express');

const { performSearch } = require('../clients/pokeApi')

const pokemonGet = async (req = request, res = response) => {

    const { txtFilter =""} = req.query;

    const result = await performSearch(txtFilter);    

    res.json({  
        result: result
    });  
}

module.exports = { pokemonGet }