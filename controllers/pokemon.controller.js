const { response, request } =  require('express');

const { realizarBusqueda } = require('../clients/pokeApi')

const pokemonGet = async (req = request, res = response) => {

    const { txtBusqueda =""} = req.query;

    const result = await realizarBusqueda(txtBusqueda);    

    res.json({  
        result: result
    });  
}

module.exports = { pokemonGet }