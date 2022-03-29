const { response, request } =  require('express');

const { performSearch } = require('../clients/pokeApi')

const pokemonGet = async (req = request, res = response) => {

    const { txtBusqueda =""} = req.query;

    const result = await performSearch(txtBusqueda);    

    res.json({  
        result: result
    });  
}

module.exports = { pokemonGet }